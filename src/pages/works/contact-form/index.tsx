import { PageContainer, ProCard } from '@ant-design/pro-components';
import { useState } from 'react';
import ContactFormContent from './components/content';
import ContactFormSetting from './components/setting';

const ContactForm: React.FC = () => {
  const [tab, setTab] = useState('content');

  return (
    <PageContainer title="Contact form">
      <ProCard
        tabs={{
          activeKey: tab,
          items: [
            {
              label: 'Content',
              key: 'content',
              children: <ContactFormContent />,
            },
            {
              label: 'Setting',
              key: 'setting',
              children: <ContactFormSetting />,
            },
          ],
          onChange: (key) => {
            setTab(key);
          },
        }}
      ></ProCard>
    </PageContainer>
  );
};

export default ContactForm;
