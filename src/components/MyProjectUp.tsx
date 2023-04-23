import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { onOpen } from '../modules/display';
import { ProjectType } from '../apis/dataType';

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
    return (
        <div className='projectListBox'>
            <h2>Project-List(Solo)</h2>
                    <ul className='projectList proSolo'>
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