import { CatalogType } from '@/constants';
import { addCatalog, listCatalog } from '@/services/catalog';
import { PlusOutlined } from '@ant-design/icons';
import {
  ActionType,
  ModalForm,
  PageContainer,
  ProColumns,
  ProFormText,
  ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, message } from 'antd';
import { useRef, useState } from 'react';

const ShopPage: React.FC = () => {
  const intl = useIntl();
  const [open, setOpen] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();

  const onFinish = async (values: any) => {
    const response = await addCatalog(values);
    if (response.succeeded) {
      message.success(
        intl.formatMessage({
          id: 'general.added',
        }),
      );
      setOpen(false);
      actionRef.current?.reload();
    } else {
      message.error(response.errors[0].description);
    }
  };

  const columns: ProColumns<API.Catalog>[] = [
    {
      title: '#',
      valueType: 'indexBorder',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
  ];

  return (
    <PageContainer
      extra={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(true)}
        >
          <FormattedMessage id="general.new" />
        </Button>
      }
    >
      <ProTable
        rowKey="id"
        columns={columns}
        actionRef={actionRef}
        request={(params) => listCatalog({ type: CatalogType.Shop, ...params })}
      />
      <ModalForm
        onFinish={onFinish}
        open={open}
        onOpenChange={setOpen}
        title={intl.formatMessage({
          id: 'general.new',
        })}
      >
        <ProFormText label="Name" name="name" required />
        <ProFormText label="Normalized name" name="normalizedName" />
        <ProFormText name="type" initialValue={CatalogType.Shop} hidden />
      </ModalForm>
    </PageContainer>
  );
};

export default ShopPage;
