import React,{useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { onOpen } from '../modules/display';
import { ProjectType } from '../apis/dataType';
import { onDown, onNumber, onUp } from '../modules/scroll';

type MyProjectUpData = {
    data: ProjectType []
    setNo: React.Dispatch<React.SetStateAction<number>>
    setMainImg: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

const MyProjectUp = ({data, setNo, setMainImg}:MyProjectUpData) => {
    const dispatch = useDispatch<any>();
    const onOpenDisplay = (id:number, img:string | null, vide:string | null | undefined) => {
        dispatch(onOpen())
        setNo(id)
        setMainImg(vide === null ? img : vide)
    }
    const outerDivRef = useRef<any>();
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
            top: pageHeight ,
            left: 0,
            behavior: "smooth",
          });
          dispatch(onUp())
          dispatch(onNumber(scrollTop))
        }
    } else {
        //스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top:0,
            left: 0,
            behavior: "smooth",
          });
          
          if(scrollTop === 0) {
            dispatch(onDown())
          }
        }
      }
    }

    const outerDiveRefCurrent = outerDivRef.current;
    outerDiveRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDiveRefCurrent.removeEventListener("wheel", wheelHandler)
    }
  }, [])
    return (
        <div className='projectListBox'>
            <h2>Project-List(Solo)</h2>
                    <ul className='projectList proSolo' ref={outerDivRef}>
                        {data.map((solo, index) => <li key={solo.p_no} className='pLi' onClick={() =>onOpenDisplay(solo.p_no, solo.p_img1, solo.p_vide1)}>
                            <h3>{data[index].p_title.replace(/\<br>/g, '\n')}{window.innerWidth <= 762 ? <br/> : null}<span>인원: {solo.p_person.split(",").length}명 / {solo.p_person}</span></h3>
                            <ul className='language'>
                                {solo.p_language.indexOf("Html") !== -1 ? 
                                <li>
                                    <img src="images/html.png" alt=""/>
                                    <p>Html</p>
                                </li>: null}
                                {solo.p_language.indexOf("Css") !== -1 ? 
                                <li>
                                    <img src="images/css.png" alt="" />
                                    <p>Css</p>
                                </li>: null}
                                {solo.p_language.indexOf("Sass") !== -1 ? 
                                <li>
                                    <img src="images/sass.png" alt="" />
                                    <p>Sass</p>
                                </li>: null}
                                {solo.p_language.indexOf("Javascript") !== -1 ?
                                <li className='javaScript'>
                                    <img src="images/js.png" alt="" />
                                    <p>JavaScript</p>
                                </li>
                                : null}
                                {solo.p_language.indexOf("PHP") !== -1 ?
                                <li>
                                    <img src="images/php.png" alt="" />
                                    <p>PHP</p>
                                </li>: null}
                                {solo.p_language.indexOf("React") !== -1 ?
                                <li>
                                    <img src="images/react.png" alt="" />
                                    <p>React</p>
                                </li>: null}
                                {solo.p_language.indexOf("Redux") !== -1 ?
                                <li>
                                    <img src="images/redux.png" alt="" />
                                    <p>Redux</p>
                                </li>: null}
                                {solo.p_language.indexOf("TypeScript") !== -1 ?
                                <li className='typeScript'>
                                    <img src="images/typescript.png" alt="" />
                                    <p>TypeScript</p>
                                </li>: null}
                                {solo.p_language.indexOf("node.js") !== -1 ?
                                <li className='node'>
                                    <img src="images/nodejs.png" alt="" />
                                    <p>node.js</p>
                                </li>: null}
                                {solo.p_language.indexOf("MySQL") !== -1 ?
                                <li className='mysql'>
                                    <img src="images/mysql.png" alt="" />
                                    <p>MySQL</p>
                                </li>
                                : null}
                                {solo.p_language.indexOf("GitHub") !== -1 ?
                                <li className='github'>
                                    <img src="images/github.png" alt="" />
                                    <p>GitHub</p>
                                </li>: null}
                                {solo.p_language.indexOf("Git") !== -1 ?
                                <li>
                                    <img src="images/Git.png" alt="" />
                                    <p>Git</p>
                                </li>
                                : null}
                            </ul>
                        </li>)}
                    </ul>
                </div>
    );
};

export default MyProjectUp;