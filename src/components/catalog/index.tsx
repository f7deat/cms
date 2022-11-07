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

type CatalogProps = {
  catalogIds: React.Key[];
  setCatalogIds: any;
};

const Catalog: React.FC<CatalogProps> = (props) => {
  const defaultSelectedKeys = ['06d5c4c9-18a6-49eb-a821-ed208631945e'];
  const formRef = useRef<ProFormInstance>();

  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    listTree().then((response) => {
      setTreeData(response);
      props.setCatalogIds(defaultSelectedKeys);
    });
  }, []);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const onSelect = (selectedKeys: React.Key[]) => {
    props.setCatalogIds(selectedKeys);
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
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
        ></Button>
      </div>
      <div className="bg-white">
        <Tree
          defaultSelectedKeys={defaultSelectedKeys}
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
