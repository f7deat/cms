import { deleteCatalog, listCatalog } from '@/services/catalog';
import { BarsOutlined } from '@ant-design/icons';
import { Button, Dropdown, Input, Menu, MenuProps, message } from 'antd';
import { useState, useEffect } from 'react';

const { Search } = Input;

type CatalogProps = {
  catalog?: API.Catalog;
  setCatalog: any;
};

const Catalog: React.FC<CatalogProps> = (props) => {
  const [catalogs, setCatalogs] = useState<API.Catalog[]>([]);
  useEffect(() => {
    listCatalog().then((response) => {
      setCatalogs(response);
    });
  }, []);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (!props.catalog?.id) {
      return message.warning('Cannot find any catalog selected!');
    }
    if (key === 'delete') {
      deleteCatalog(props.catalog.id).then((response) => {
        if (response.succeeded) {
          message.success('Deleted!');
        } else {
          message.error(response.message);
        }
      });
    }
  };

  const menu = (
    <Menu
      items={[
        {
          key: 'new',
          label: 'New page',
        },
        {
          key: 'copy',
          label: 'Copy',
        },
        {
          key: 'paste',
          label: 'Paste',
        },
        {
          key: 'delete',
          label: 'Delete',
        },
      ]}
      onClick={onClick}
    />
  );

  const setCatalog = (value: API.Catalog) => {
    props.setCatalog(value);
  };

  return (
    <div>
      <Search />
      <div className="bg-white">
        {catalogs.map((value) => (
          <div
            className="flex items-center justify-between"
            key={value.normalizedName}
          >
            <Button type="link" onClick={() => setCatalog(value)}>
              {value.name}
            </Button>
            <Dropdown overlay={menu}>
              <Button type="link">
                <BarsOutlined />
              </Button>
            </Dropdown>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
