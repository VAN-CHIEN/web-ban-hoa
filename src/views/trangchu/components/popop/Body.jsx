import React, { useState } from "react";
import Slide1 from '../../img/hoaslide1.jpg';
import { Card } from 'antd';
import '../../style/Style.css';

export function Body() {
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
      };
      const contentList = {
        tab1: <p>content1</p>,
        tab2: <p>content2</p>,
      };
      const tabList = [
        {
          key: 'tab1',
          tab: 'tab1',
        },
        {
          key: 'tab2',
          tab: 'tab2',
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
                title="Card title"
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