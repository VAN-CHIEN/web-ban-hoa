import React, { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Drawer } from 'antd';
import '../../../styles/Style.css';
import 'antd/dist/antd.css';

export function Login(){
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };
      const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
    return(
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="/">
                        Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        or  <Button type="primary" onClick={showDrawer}>
                                register now!
                            </Button>
                            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                                <p>Some contents...</p>
                            </Drawer>
                    </Form.Item>
                </Form>
    )
}