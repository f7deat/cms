import { listTree } from '@/services/catalog';
import { Input, Tree } from 'antd';
import React, { useState, useEffect } from 'react';

const { Search } = Input;

type CatalogProps = {
  catalogIds: React.Key[];
  setCatalogIds: any;
};

const Catalog: React.FC<CatalogProps> = (props) => {
  const [treeData, setTreeData] = useState<any>();
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

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
    props.setCatalogIds(selectedKeys);
  };

  return (
    <div>
      <Search />
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
    </div>
  );
};

export default Catalog;
