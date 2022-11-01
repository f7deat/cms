import { listTree } from '@/services/catalog';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Tree } from 'antd';
import { DataNode } from 'antd/lib/tree';
import React, { useState, useEffect } from 'react';

const { Search } = Input;

type CatalogProps = {
  catalogIds: React.Key[];
  setCatalogIds: any;
};

const Catalog: React.FC<CatalogProps> = (props) => {
  const defaultSelectedKeys = ['06d5c4c9-18a6-49eb-a821-ed208631945e'];

  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

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
  };

  return (
    <div>
      <div className="flex">
        <Search />
        <Button type="primary" icon={<PlusOutlined />}></Button>
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
    </div>
  );
};

export default Catalog;
