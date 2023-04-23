import React, {useEffect, useState, useRef} from 'react';
import { GrClose } from "react-icons/gr";
import "./SelectProject.scss"
import { useDispatch } from 'react-redux';
import { API_URL } from '../config/apiurl';
import { ProjectType } from '../apis/dataType';
import { rootState } from '../modules';
import { useSelector } from 'react-redux';

type SelectProjectType = {
    setMainImg: React.Dispatch<React.SetStateAction<string | null | undefined>>
    isMainImg: string | null | undefined
    data: ProjectType
    onCloseDisplay: () => void
    isOpen: boolean
}

const SelectProject = ({isMainImg, setMainImg, data, onCloseDisplay, isOpen}:SelectProjectType) => {
    const onDisplay = useSelector((state:rootState)=> state.displayOnOff.stateType)
    const outerDivRef = useRef<any>();
    console.log(outerDivRef)
    console.log(onDisplay)
    const dispatch = useDispatch<any>(); 
    
    const onImg = (img:string) => {
        setMainImg(img)
    }
    let tap = data.p_desc.replace(/\<br>/g, '\n')
    let title = data.p_title.replace(/\<br>/g, '\n')
    document.addEventListener("scroll", function(){
        let sct = document.documentElement.scrollTop;
        console.log(sct)
    })
    useEffect(()=>{
        const wheelHandler = (e:React.WheelEvent<HTMLDivElement>)=>{
        e.preventDefault();
        const {deltaY} = e
        const {scrollTop} = outerDivRef.current; //스크롤 위쪽 끝부분 위치
        const pageHeight = window.innerHeight; // 화면 세로길이
    
        if(deltaY > 0) {
            //스크롤 내릴때
            if(scrollTop >= 0 && scrollTop < pageHeight) {
              //현재 1페이지
              outerDivRef.current.scrollTo({
                top: scrollTop + 150,
                left: 0,
                behavior: "smooth",
              });
            }
        } else {
            //스크롤 올릴 때
            if (scrollTop >= 0 && scrollTop < pageHeight + 300) {
              //현재 1페이지
              outerDivRef.current.scrollTo({
                top: scrollTop - 150,
                left: 0,
                behavior: "smooth",
              });
            }
          }
        }
    
        const outerDiveRefCurrent = outerDivRef.current;
        outerDiveRefCurrent.addEventListener("wheel", wheelHandler);
        return () => {
          outerDiveRefCurrent.removeEventListener("wheel", wheelHandler)
        }
      }, [onDisplay])
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
                <div className='descForm' ref={outerDivRef}>
                    <p >{tap}</p>
                </div>
            </div>
        </div>
    );
};

export default SelectProject;