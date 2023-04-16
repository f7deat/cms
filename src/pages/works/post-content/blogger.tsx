import { getArguments, saveArguments } from '@/services/work-content';
import {
  ProForm,
  ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import { message } from 'antd';
import { useEffect, useRef } from 'react';

const BloggerContent: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    getArguments(id).then((response) => {
      if (response.blogger) {
        formRef.current?.setFields([
          {
            name: 'blogId',
            value: response.blogger.blogId,
          },
          {
            name: 'postId',
            value: response.blogger.postId,
          },
        ]);
      }
    });
  }, [id]);

  const onFinish = async (values: any) => {
    const data = {
      type: 2,
      blogger: {
        blogId: values.blogId,
        postId: values.postId,
      },
    };
    const response = await saveArguments(id, data);
    if (response.succeeded) {
      message.success('Saved');
    }
  };
  return (
    <ProForm onFinish={onFinish} formRef={formRef}>
      <ProFormText
        label="Blog ID"
        name="blogId"
        rules={[
          {
            required: true,
          },
        ]}
      />
      <ProFormText
        label="Post ID"
        name="postId"
        rules={[
          {
            required: true,
          },
        ]}
      />
    </ProForm>
  );
};

export default BloggerContent;
