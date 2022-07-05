import React from "react";
import Slide1 from '../../img/hoaslide1.jpg';
import '../../style/Style.css';

export function Body() {
    return(
        <div class="list-images">
            <img src={Slide1} alt="" class="active" />
        </div> 
    )
}