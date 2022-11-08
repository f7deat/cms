import { addCatalog, listTree } from '@/services/catalog';
import { PlusOutlined } from '@ant-design/icons';
import {
  ProFormInstance,
  ModalForm,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Input, message, Tree } from 'antd';
import { DataNode } from 'antd/lib/tree';
import React, { useState, useEffect, useRef } from 'react';

const { Search } = Input;

const Catalog: React.FC = () => {
  const formRef = useRef<ProFormInstance>();

  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    listTree().then((response) => {
      setTreeData(response);
    });
  }, []);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onSelect = (selectedKeys: React.Key[]) => {
    if (!selectedKeys || selectedKeys.length === 0) {
      message.warning('Can de-select');
      return;
    }
    formRef.current?.setFieldValue('parentId', selectedKeys[0]);
    history.push(`/catalog/${selectedKeys[0]}`);
  };

  const onFinish = async (values: API.Catalog) => {
    const response = await addCatalog(values);
    if (response.succeeded) {
      message.success('Saved!');
      setVisible(false);
    }
  };

  const handleAdd = () => {
    setVisible(true);
  };

  return (
    <div>
      <div className="flex">
        <Search />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} />
      </div>
      <div className="bg-white">
        <Tree
          treeData={treeData}
          expandedKeys={expandedKeys}
          onExpand={onExpand}
          autoExpandParent={autoExpandParent}
          draggable
          onSelect={onSelect}
        />
      </div>
      <ModalForm
        onVisibleChange={setVisible}
        visible={visible}
        onFinish={onFinish}
        formRef={formRef}
      >
        <ProFormText name="parentId" label="Parrent Id" disabled />
        <ProFormText name="name" label="Name" />
        <ProFormText name="normalizedName" label="Normalized Name" />
        <ProFormCheckbox name="active" label="Active" />
      </ModalForm>
    </div>
  );
};

export default Catalog;
