import React, {useEffect, useState} from 'react';
import { GrClose } from "react-icons/gr";
import "./SelectProject.scss"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { rootState } from '../modules';
import { onClose } from '../modules/display';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { getDataF } from '../modules/project';

type SelectProjectType = {
    isNo: number
    setNo: React.Dispatch<React.SetStateAction<number>>
    setMainImg: React.Dispatch<React.SetStateAction<string | null | undefined>>
    isMainImg: string | null | undefined
}

const SelectProject = ({isNo, setNo, isMainImg, setMainImg}:SelectProjectType) => {
    const isOpen = useSelector((state:rootState) => state.displayOnOff.stateType)
    const {loading, data, error} = useSelector((state: rootState) => state.project.project)
    
    console.log(isMainImg)

    const dispatch = useDispatch<any>();
    
    const onImg = (img:string) => {
        setMainImg(img)
    }
    const onCloseDisplay = () => {
        dispatch(onClose())
        setNo(0)
        setMainImg(data?.p_vide1 !== null ? `${data?.p_vide1}`: `${data.p_img1}`)
    }

    const selectProject = async () => {
        const data = await axios.get(`${API_URL}/selectProject/${isNo}`)
        return data
    }
    
    console.log(isMainImg!.indexOf("mp4"))
    useEffect(()=>{
        dispatch(getDataF(selectProject))
    },[dispatch, isNo])
    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 없습니다</div>
    let tap = data.p_desc.replace(/\<br>/g, '\n')
    let title = data.p_title.replace(/\<br>/g, '\n')
    return (
        <div className='selectProject' style={{display: isOpen ? "block" : "none"}}>
            <p></p>
            <GrClose className='grClose' onClick={onCloseDisplay}/>
            <h2 className='mainText'>상세보기</h2>
            <div className='detailWrap'>
                <div className='detailForm'>
                    <div className='imgList'>
                        <div className='bigImg'>
                            {isMainImg!.indexOf("mp4") === -1 ?
                            <img src={`${API_URL}/${isMainImg}`} alt="" />:
                            <iframe src={`${API_URL}/${isMainImg}`} style={{border:"0"}} frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            }
                        </div>
                        <ul className='smallImg'>
                            <li onClick={()=>{onImg(data?.p_vide1 !== null ? `${data?.p_vide1}`: `${data?.p_img1}`)}}>
                                <img src={`${API_URL}/${data.p_img1}`} alt="" />
                            </li>
                            <li onClick={()=>{onImg(data?.p_vide2 !== null ? `${data?.p_vide2}`: `${data?.p_img2}`)}}>
                                <img src={`${API_URL}/${data.p_img2}`} alt="" />
                            </li>
                            <li onClick={()=>{onImg(data?.p_vide3 !== null ? `${data?.p_vide3}`: `${data?.p_img3}`)}}>
                                <img src={`${API_URL}/${data.p_img3}`} alt="" />
                            </li>
                            <li onClick={()=>{onImg(`${data.p_img4}`)}}>
                                <img src={`${API_URL}/${data.p_img4}`} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className='descList'>
                        <h2>{title}</h2>
                        <p className='textB'>기간: <span>{data.p_date}</span></p>
                        <p className='textB'>참여자: <span>{data.p_person}</span></p>
                        {data.p_url === null ? null :<p className='textB'>URL: <a href={data?.p_url} target="blank">{data.p_url}</a></p>}
                        <p className='textB'>GitHub: <a href={data.p_git} target="blank">{data.p_git}</a></p>
                        <p className='textB textS'>사용한 기술:</p>
                        <ul className='useLanguage'>
                            {data.p_language.indexOf("Html") !== -1 ? 
                            <li>
                                <img src="images/html.png" alt=""/>
                                <p>Html</p>
                            </li>: null}
                            {data.p_language.indexOf("Css") !== -1 ? 
                            <li>
                                <img src="images/css.png" alt="" />
                                <p>Css</p>
                            </li>: null}
                            {data.p_language.indexOf("Sass") !== -1 ? 
                            <li>
                                <img src="images/sass.png" alt="" />
                                <p>Sass</p>
                            </li>: null}
                            {data.p_language.indexOf("Javascript") !== -1 ?
                            <li className='javaScript'>
                                <img src="images/js.png" alt="" />
                                <p>JavaScript</p>
                            </li>
                            : null}
                            {data.p_language.indexOf("PHP") !== -1 ?
                            <li>
                                <img src="images/php.png" alt="" />
                                <p>PHP</p>
                            </li>: null}
                            {data.p_language.indexOf("React") !== -1 ?
                            <li>
                                <img src="images/react.png" alt="" />
                                <p>React</p>
                            </li>: null}
                            {data.p_language.indexOf("Redux") !== -1 ?
                            <li>
                                <img src="images/redux.png" alt="" />
                                <p>Redux</p>
                            </li>: null}
                            {data.p_language.indexOf("TypeScript") !== -1 ?
                            <li className='typeScript'>
                                <img src="images/typescript.png" alt="" />
                                <p>TypeScript</p>
                            </li>: null}
                            {data.p_language.indexOf("node.js") !== -1 ?
                            <li className='node'>
                                <img src="images/nodejs.png" alt="" />
                                <p>node.js</p>
                            </li>: null}
                            {data.p_language.indexOf("MySQL") !== -1 ?
                            <li className='mysql'>
                                <img src="images/mysql.png" alt="" />
                                <p>MySQL</p>
                            </li>
                            : null}
                            {data.p_language.indexOf("GitHub") !== -1 ?
                            <li className='github'>
                                <img src="images/github.png" alt="" />
                                <p>GitHub</p>
                            </li>: null}
                            {data.p_language.indexOf("Git") !== -1 ?
                            <li>
                                <img src="images/Git.png" alt="" />
                                <p>Git</p>
                            </li>
                            : null}
                        </ul>
                    </div>
                </div>
                <div className='descForm'>
                    <p>{tap}</p>
                </div>
            </div>
        </div>
    );
};

export default SelectProject;