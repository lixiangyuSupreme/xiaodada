import React from "react";
import "./App1.css";
import Basic from './Basic'

import { Form, Input, Button, Card} from 'antd';
import { InputItem } from "antd-mobile";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App1 = () => {
  // 提交表单且数据验证成功后回调事件
  const onFinish = values => {
    console.log('Success:', values);
  };

  // 提交表单且数据验证失败后回调事件
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
  <Card title="登录" className="login-form">
    <Form {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="密码"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="验证码"
        name="验证码"
        className="liu"
        rules={[
          {
            required: true,
            message: '请输入验证码',
          },
        ]} 
      >
        <Input /><span><Basic /></span>
      </Form.Item>

      <input type="checkbox" ></input>
      <span>下次自动登录</span>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  </Card>
  );
};

export default App1
