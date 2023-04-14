import React, {useRef,useEffect} from 'react';
import UpBlock from '../components/UpBlock';
import "./Main.scss"
import MiddleBlock from '../components/MiddleBlock';
import DownBlock from '../components/DownBlock';
import Header from '../components/Header';

const Main = () => {
  const outerDivRef = useRef<any>();
  useEffect(()=>{
    const wheelHandler = (e:React.WheelEvent<HTMLDivElement>)=>{
    e.preventDefault();
    const {deltaY} = e
    const {scrollTop} = outerDivRef.current; //스크롤 위쪽 끝부분 위치
    const pageHeight = window.innerHeight; // 화면 세로길이
    console.log(pageHeight)
    console.log(deltaY)
    console.log(scrollTop)

    if(deltaY > 0) {
        //스크롤 내릴때
        if(scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("여기는 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight ,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("여기는 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }else {
          //현재 3페이지
          console.log("여기는 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
    } else {
        //스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("여기는 1페이지, up");
          outerDivRef.current.scrollTo({
            top:0,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("여기는 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          })
        } else {
          //현재 3페이지
          console.log("여기는 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth"
          })
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
        <div className='wrap' ref={outerDivRef}>
            <Header/>
            <div id="main">
                <div id="content">
                    <UpBlock/>
                    <DownBlock/>
                </div>
                {window.innerWidth <= 762 ? null : <MiddleBlock/>}
            </div>
            {window.innerWidth <= 762 ? <MiddleBlock/> : null}
        </div>
    );
};

export default Main;