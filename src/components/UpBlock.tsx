import React from 'react';
import "./UpBlock.scss"
import { BiIdCard } from "react-icons/bi";

const UpBlock = () => {
    return (
        <div className='upBlock'>
            <h2><BiIdCard className='biIdCard'/><span>Information</span></h2>
            <div className='information'>
                <div className='myPicture'>
                    <img src="images/myPicture.jpg" alt="" />
                </div>
                <div className='bor'></div>
                <ul className='inforTable'>
                    <li>
                        <h3>Name:</h3>
                        <p>남민섭</p>
                    </li>
                    <li>
                        <h3>Birth:</h3>
                        <p>1994.04.13</p>
                    </li>
                    <li>
                        <h3>Phone:</h3>
                        <p>010-9173-2247</p>
                    </li>
                    <li>
                        <h3>E-mail:</h3>
                        <p>uou413@naver.com</p>
                    </li>
                    <li>
                        <h3>GitHub:</h3>
                        <p>https://github.com/namminimi</p>
                    </li>
                    <li className='blog'>
                        <h3>Blog:</h3>
                        <p>https://uou413.tistory.com/</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UpBlock;