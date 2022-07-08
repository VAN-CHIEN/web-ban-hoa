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
        style={{borderBottom: '2px solid #D22880'}}
        >
            <Col span={7}>
                <Row>
                    <Col span={12}><img src={logo} alt="ảnh logo"/></Col>
                    <Col span={12}><h1 style={{marginTop: '20%', fontFamily: 'Bookman', fontSize: '28px', color: '#D22880'}}>Mùa Hạ</h1></Col>
                </Row>
            </Col>
            <Col span={10}>
                <Breadcrumb style={{marginTop: '10%'}}>
                    <Breadcrumb.Item><a style={{color: '#D22880'}} href="/">Home</a></Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a style={{color: '#D22880'}} href="/">Oder</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item><a style={{color: '#D22880'}} href="/">Giỏ hàng</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a style={{color: '#D22880'}} href="/">Hỗ trợ</a></Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col span={7}>
                <Row style={{marginTop: '15%'}}>
                    <Col span={11}><Input.Search allowClear placeholder="Nhập loại hoa cần tìm kiếm" /></Col>
                    <Col span={2} />
                    <Col span={11}><Button style={{backgroundColor: '#D22880'}} type="primary">Đăng nhập</Button></Col>
                </Row>
                
            </Col>
        </Row>
    )
}