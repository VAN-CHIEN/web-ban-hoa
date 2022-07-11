import React from "react";
import {GioHang} from './components/Giohang';
import background from '../../images/nengio.jpg'

export function LayoutGioHang(){
    return(
        <div style={{ backgroundImage: `url(${background})`, width: '100%', height: '775px', position: 'relative'}}>
            <marquee behavior="alternate" vspace><h1>Giỏ hoa của bạn !!!</h1></marquee>
           < GioHang />
        </div>
    )
}
