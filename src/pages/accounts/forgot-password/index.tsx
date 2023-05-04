import { ProForm, ProFormText } from '@ant-design/pro-components';
import '../index.css';

const Index: React.FC = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <ProForm>
                <ProFormText name="domain" label="Domain" rules={[
                    {
                        required: true
                    }
                ]} width="lg" />
                <ProFormText name="email" label="Email" rules={[
                    {
                        required: true
                    }
                ]} />
            </ProForm>
        </div>
    )
}

export default Index