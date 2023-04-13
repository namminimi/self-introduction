import React from 'react';
import { BsBookHalf } from "react-icons/bs";
import "./DownBlock.scss";

const DownBlock = () => {
    return (
        <div className='downBlock'>
            <h2><BsBookHalf className='bsBookHalf'/><span>TimeLine</span></h2>
            <div className='timeline'>
                <div className='line1 lines'>
                    <div className='lineDate'>
                        <h4>2013.03 ~ 2018.03</h4>
                        <p></p>
                    </div>
                    <div className='story'>
                        <h4>울산과학대학교</h4>
                        <div></div>
                        <p>기계공학부(3년제) 13학번</p>
                    </div>
                </div>
                <div className='line1 lines'>
                    <div className='lineDate'>
                        <h4>2018.05.08 ~ 2022.03.31</h4>
                        <p></p>
                    </div>
                    <div className='story'>
                        <h4>(주)한국이엠</h4>
                        <div></div>
                        <p>기술부/계장, 업무: 기계설계, CAD, 도면관리</p>
                    </div>
                </div>
                <div className='line1 lines'>
                    <div className='lineDate'>
                        <h4>2022.08.08 ~ 2022.08.30</h4>
                        <p></p>
                    </div>
                    <div className='story'>
                        <h4>그린아카데미컴퓨터학원(울산)</h4>
                        <div></div>
                        <p>자바(JAVA) 프로그래밍 기초 과정 수료</p>
                    </div>
                </div>
                <div className='line1 lines'>
                    <div className='lineDate'>
                        <h4>2022.10.04 ~ 2023.03.23</h4>
                    </div>
                    <div className='story'>
                        <h4>그린아카데미컴퓨터학원(울산)</h4>
                        <div></div>
                        <p>IoT융합 자바스크립트 기반 소프트웨어 엔지니어 개발자(프론트엔드) 과정 수료</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownBlock;