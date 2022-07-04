import React from "react";
import 'antd/dist/antd.css';
import { PageHeader, Breadcrumb, Input, Button  } from 'antd';
import logo from '../../img/logo.jpg'

export function HeaderKey(){
    return(
        <PageHeader
        className="site-page-header"
        title="Hoa mùa "
        >
            <img src={logo} alt="ảnh logo"/>
            <Breadcrumb>
                <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">Các loại hoa</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="/">Oder</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">Giỏ hàng</a></Breadcrumb.Item>
                <Breadcrumb.Item><Input  placeholder="Nhập loại hoa cần tìm" enterButton="Tìm kiếm" allowClear size="large" /></Breadcrumb.Item>
                <Breadcrumb.Item><Button type="primary">Đăng nhập</Button></Breadcrumb.Item>
            </Breadcrumb>
        </PageHeader>
    )
}