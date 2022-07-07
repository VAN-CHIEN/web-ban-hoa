import React, { useState } from "react";
import Slide1 from '../../img/hoaslide1.jpg';
import { Card } from 'antd';
import '../../style/Style.css';
import {bohoa} from './BodyTc';
import {langhoa} from './BodyTc';
import {khaitruong} from './BodyTc';
import {damtang} from './BodyTc';
import {chauhoa} from './BodyTc'

export function Body() {
  const { Meta } = Card;
    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    const onTab1Change = (key) => {
        setActiveTabKey1(key);
      };
      const contentList = {
        tab1: (
          <div className="list-flower">
            {bohoa.map(item=>{
              return <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.url} />}
              key={item.id}
            >
              <Meta title={item.title} description={"Giá: "+item.money + " VND"} />
            </Card>
            })
            }
          </div>
       ),
        tab2: (
          <div className="list-flower">
            {langhoa.map(item=>{
              return <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.url} />}
              key={item.id}
            >
              <Meta title={item.title} description={"Giá: "+item.money + " VND"} />
            </Card>
            })
            }
          </div>
        ),
        tab3: (
          <div className="list-flower">
            {khaitruong.map(item=>{
              return <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.url} />}
              key={item.id}
            >
              <Meta title={item.title} description={"Giá: "+item.money + " VND"} />
            </Card>
            })
            }
          </div>
        ),
        tab4: (
          <div className="list-flower">
            {damtang.map(item=>{
              return <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.url} />}
              key={item.id}
            >
              <Meta title={item.title} description={"Giá: "+item.money + " VND"} />
            </Card>
            })
            }
          </div>
        ),
        tab5: (
          <div className="list-flower">
            {chauhoa.map(item=>{
              return <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.url} />}
              key={item.id}
            >
              <Meta title={item.title} description={"Giá: "+item.money + " VND"} />
            </Card>
            })
            }
          </div>
        ),
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