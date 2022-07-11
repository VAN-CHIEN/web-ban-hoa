import React from "react";
import { Space, Table, Button, InputNumber } from 'antd';
import 'antd/dist/antd.css';

export function GioHang(){
      const columns = [
        {
          title: 'Ảnh sản phẩm',
          dataIndex: 'img',
          key: 'img',
        },
        {
          title: 'Tên sản phẩm',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Giá',
          dataIndex: 'money',
          key: 'money',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
          title: 'Chức năng',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button danger>Xóa</Button>
            </Space>
          ),
        },
    ];
    const data = [
        {
          key: '1',
          img: 'John Brown',
          name: 32,
          money: 'New York No. 1 Lake Park',
          amount: ( <InputNumber min={1} max={100} defaultValue={1} />),
        }
      ];
    return (
        <Table style={{position:'absolute', width: '100%', height: '100%'}} columns={columns} dataSource={data} />
    )
}