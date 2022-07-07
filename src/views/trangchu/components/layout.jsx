import React from "react";
import { Layout } from 'antd';
import {HeaderKey} from './popop/Header';
import {Body} from './popop/Body';
import {Footer} from './popop/Footer';

export function Office() {
    return(

            <Layout>
                <HeaderKey />
                <Body />
                <Footer />
            </Layout>

    )
}