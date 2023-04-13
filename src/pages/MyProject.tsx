import React, {useState} from 'react';
import {FaArrowLeft} from "react-icons/fa";
import "./MyProject.scss"
import { Link } from 'react-router-dom';
import SelectProject from './SelectProject';
import MyProjectSoloContainer from '../containers/MyProjectSoloContainer';
import MyProjectTeamContainer from '../containers/MyProjectTeamContainer';



const MyProject = () => {
    const [isNo, setNo] = useState(0)
    const [isMainImg, setMainImg] = useState<string | null | undefined>("")
    return (
        <div className='myProject'>
            <h3 className='goback'>
                <Link to="/">
                    <FaArrowLeft className='faArrowLeft'/>
                    <span>뒤로가기</span>
                </Link>
            </h3>
            <div className='projectListBoxs'>
                <MyProjectSoloContainer setNo={setNo} setMainImg={setMainImg}/>
                <MyProjectTeamContainer setNo={setNo} setMainImg={setMainImg}/>
            </div>
            {isNo !== 0 ? <SelectProject isNo={isNo} setNo={setNo} isMainImg={isMainImg} setMainImg={setMainImg}/> : null}
            
        </div>
    );
};

export default MyProject;