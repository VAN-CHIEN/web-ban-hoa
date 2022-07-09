import React, { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Drawer } from 'antd';
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
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
                        <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        or  <span style={{ color: 'red' }} onClick={showDrawer}>
                                register now!
                            </span>
                            <Drawer title="Đăng ký ở đây nào!" placement="right" onClose={onClose} visible={visible}>
                                <Form
                                name="basic"
                                labelCol={{ span: 10 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                >
                                <Form.Item
                                    label="Tên đăng nhập"
                                    name="username"
                                    rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Mật khẩu"
                                    name="password"
                                    rules={[{ required: true, message: 'Vui lòng điền mật khẩu!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    label="Nhập lại mật khẩu"
                                    name="password"
                                    rules={[{ required: true, message: 'Vui lòng điền lại mật khẩu!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit">
                                    Đăng ký
                                    </Button>
                                </Form.Item>
                                </Form>
                            </Drawer>
                    </Form.Item>
                </Form>
    )
}