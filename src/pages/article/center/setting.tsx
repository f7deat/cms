import { articleSaveAsync } from '@/services/catalog';
import {
  ProForm,
  ProFormCheckbox,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { message } from 'antd';

type ArticleSettingProps = {
  data?: API.Catalog;
};

const ArticleSetting: React.FC<ArticleSettingProps> = (props) => {
  const onFinish = async (values: API.Catalog) => {
    const response = await articleSaveAsync(values);
    if (response.succeeded) {
      message.success('Saved!');
    } else {
      message.error(response.errors[0].description);
    }
  };

  return (
    <ProForm onFinish={onFinish}>
      <ProFormText name="id" hidden initialValue={props.data?.id} />
      <ProFormText
        required
        name="name"
        label="Name"
        initialValue={props.data?.name}
      />
      <ProFormTextArea
        name="description"
        label="Description"
        initialValue={props.data?.description}
      />
      <ProFormText
        name="thumbnail"
        label="Thumbnail"
        initialValue={props.data?.thumbnail}
      />
      <ProFormCheckbox
        name="active"
        label="Active"
        initialValue={props.data?.active}
      />
    </ProForm>
  );
};

export default ArticleSetting;
