import React, { useState } from "react";
import {GioHang} from './components/Giohang';
import background from '../../images/nengio.jpg';
import '../../styles/Cloudes.css';
import { Button, Modal } from 'antd';

export function LayoutGioHang(){
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return(
        <div style={{ backgroundImage: `url(${background})`, width: '100%', height: '775px', position: 'relative'}}>
            <h1 className="txtelegantshadow">Giỏ hoa của bạn !!!</h1>
           < GioHang />
           <div className="sum_btn">
                <h1>Tổng số tiền:</h1>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        </div>
        
    )
}
