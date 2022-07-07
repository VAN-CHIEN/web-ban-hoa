import React from "react";
import { Timeline } from 'antd';
import '../../style/Style.css';

export function Footer(){
    return(
    <div className="box-footer">
        <Timeline >
            <Timeline.Item>Shop hoa mùa hạ vì khai trương vào mùa hạ nhá !</Timeline.Item>
            <Timeline.Item>Thành viên cứng sẽ được phiểu giảm giá 10-20-45% lận</Timeline.Item>
            <Timeline.Item>Hoa đảm bảo tươi không tươi không lấy tiền nghen</Timeline.Item>
            <Timeline.Item>Cảm ơn các bạn đã ủng hộ shop hoa của tụi mình</Timeline.Item>
        </Timeline>
        <Timeline >
            <Timeline.Item>Liên hệ : 0393107144 để đặt hàng ngay tận nhà nhé!</Timeline.Item>
            <Timeline.Item>Địa chỉ: 89 Quang Trung </Timeline.Item>
            <Timeline.Item>Email: chiendang1824@gmail.com</Timeline.Item>
            <Timeline.Item>Chúc mọi người vui vẻ</Timeline.Item>
        </Timeline>
    </div>
    )
}
