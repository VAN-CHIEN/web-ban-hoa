import React, { useState } from "react";
import Slide1 from '../../img/hoaslide1.jpg';
import { Card } from 'antd';
import '../../style/Style.css';

export function Body() {
  const { Meta } = Card;
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
      };
      const contentList = {
        tab1: (
          <div className="list-flower">
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://bonn.vn/wp-content/uploads/2021/03/bo-hong-kem-dep.jpg" />}
        >
          <Meta title="Hồng nhạt" description="Giá:" />
        </Card>,
          <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://shophoavip.com/uploads/noidung/images/Danh%20m%E1%BB%A5c%20sp/lang-hoa-dep/lang-hoa-dep-1.jpg" />}
        >
          <Meta title="Lẵng hồng vàng" description="Giá:" />
        </Card>
    </div>
      ),
        tab2: <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://shophoavip.com/uploads/noidung/images/Danh%20m%E1%BB%A5c%20sp/lang-hoa-dep/lang-hoa-dep-1.jpg" />}
      >
        <Meta title="Lẵng hồng vàng" description="Giá:" />
      </Card>,
        tab3: <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://hoaphuquy.com/wp-content/uploads/2021/03/ke-hoa-khai-truong-toan-thang-130321.jpg" />}
      >
        <Meta title="Hướng dương" description="Giá:" />
      </Card>,
        tab4: <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://iweb.tatthanh.com.vn/pic/3207/product/images/lang-hoa-vieng-dam-tang.jpg" />}
      >
        <Meta title="Thiên điểu vàng" description="Giá:" />
      </Card>,
        tab5: <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://www.studytienganh.vn/upload/2021/04/95037.jpg" />}
      >
        <Meta title="Hoa mười giờ" description="Giá:" />
      </Card>,
      };
      const tabList = [
        {
          key: 'tab1',
          tab: 'Bó hoa đẹp tặng người xinh',
        },
        {
          key: 'tab2',
          tab: 'Lẵng hoa tiệc tùng',
        },
        {
          key: 'tab3',
          tab: 'Hoa khai trương',
        },
        {
          key: 'tab4',
          tab: 'Hoa buồn đám tang',
        },
        {
          key: 'tab5',
          tab: 'Chậu hoa',
        },
      ];
    return(
        <div className="box-body">
            <div class="list-images">
                <img src={Slide1} alt="" class="active" />
            </div> 
            <Card
                className="card-list"
                style={{ width: '100%' }}
                title="Danh sách các loại mặt hàng hoa"
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={key => {
                onTab1Change(key);
                }}
            >
              {contentList[activeTabKey1]}
            </Card>
        </div>
    )
}