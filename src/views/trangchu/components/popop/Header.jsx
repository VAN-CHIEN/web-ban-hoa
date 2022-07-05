import React from "react";
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import { Breadcrumb, Input, Button  } from 'antd';
import logo from '../../img/logo2.jpg';
import '../../style/Style.css';
import '../../style/ButtonInput.css'

export function HeaderKey(){
    return(
        <Row
        className="grid-header"
        style={{borderBottom: '2px solid black'}}
        >
            <Col span={7}>
                <Row>
                    <Col span={12}><img src={logo} alt="ảnh logo"/></Col>
                    <Col span={12}><h1 style={{marginTop: '20%'}}>Mùa hạ</h1></Col>
                </Row>
            </Col>
            <Col span={10}>
                <Breadcrumb style={{marginTop: '10%'}}>
                    <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">Các loại hoa</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">Oder</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><a href="/">Giỏ hàng</a></Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col span={7}>
                <Row style={{marginTop: '15%'}}>
                    <Col span={11}><Input.Search allowClear placeholder="Nhập loại hoa cần tìm kiếm" /></Col>
                    <Col span={2} />
                    <Col span={11}><Button type="primary">Đăng nhập</Button></Col>
                </Row>
                
            </Col>
        </Row>
    )
}