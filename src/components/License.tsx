import React from 'react';
import "./License.scss"
import { TbLicense } from "react-icons/tb";

const License = () => {
    return (
        <div id='license'>
            <h2><TbLicense className='tbLicense'/><span>License</span></h2>
            <ul className='licenseUl'>
                <li>
                    <h3>정보처리기능사</h3>
                    <p>취득일 : 2023.04</p>
                </li>
                <li>
                    <h3>기계설계산업기사</h3>
                    <p>취득일 : 2017.08</p>
                </li>
                <li>
                    <h3>전산응용기계제도기능사</h3>
                    <p>취득일 : 2016.12</p>   
                </li>
                <li>
                    <h3>컴퓨터응용선반기능사</h3>
                    <p>취득일 : 2012.07</p>   
                </li>
            </ul>
        </div>
    );
};

export default License;