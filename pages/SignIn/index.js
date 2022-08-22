import { Button, Checkbox,  Form,  Input } from "antd";
import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout/Layout";
const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout title="Giriş Yap">
      <div className="max-w-[400px] mx-auto border-2 p-4 rounded">
       <div className="mx-auto w-1/2">
       <Image src={'/Logo.png'} width={100} height={100} layout="responsive"/>
       </div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="E-Mail"
            name="E-Mail"
            rules={[
              {
                required: true,
                type:"email",
                message: "Lütfen mail adresinizi giriniz.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Şifre"
            name="password"
            rules={[
              {
                required: true,
                message: "Lütfen şifrenizi kontrol edin.",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="w-full rounded !bg-yellow-500 !border-none !h-12" htmlType="submit">
              <span className="text-xl font-bold">Giriş Yap</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default SignIn;
