import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { onOpen } from '../modules/display';
import { ProjectType } from '../apis/dataType';

type MyProjectDownType = {
    data: ProjectType []
    setNo: React.Dispatch<React.SetStateAction<number>>
    setMainImg: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

const MyProjectDown = ({data, setNo, setMainImg}:MyProjectDownType) => {
    const dispatch = useDispatch<any>();
    const onOpenDisplay = (id:number, img:string | null, vide:string | null | undefined) => {
        dispatch(onOpen())
        setNo(id)
        setMainImg(vide === null ? img : vide)
    }
    return (
        <div className='projectListBox'>
            <h2>Project-List(Team)</h2>
            <ul className='projectList'>
                {data.map((team, index) => <li key={team.p_no} className='pLi' onClick={() =>onOpenDisplay(team.p_no, team.p_img1, team.p_vide1)}>
                <h3>{data[index].p_title.replace(/\<br>/g, '\n')}{window.innerWidth <= 762 ? <br/> : null}<span>인원: {team.p_person.split(",").length}명 / {team.p_person}</span></h3>
                <ul className='language'>
                        {team.p_language.indexOf("Html") !== -1 ? 
                        <li>
                            <img src="images/html.png" alt="" />
                            <p>Html</p>
                        </li>: null}
                        {team.p_language.indexOf("Css") !== -1 ? 
                        <li>
                            <img src="images/css.png" alt="" />
                            <p>Css</p>
                        </li>: null}
                        {team.p_language.indexOf("Sass") !== -1 ? 
                        <li>
                            <img src="images/sass.png" alt="" />
                            <p>Sass</p>
                        </li>: null}
                        {team.p_language.indexOf("Javascript") !== -1 ?
                        <li className='javaScript'>
                            <img src="images/js.png" alt="" />
                            <p>JavaScript</p>
                        </li>
                        : null}
                        {team.p_language.indexOf("PHP") !== -1 ?
                        <li>
                            <img src="images/php.png" alt="" />
                            <p>PHP</p>
                        </li>: null}
                        {team.p_language.indexOf("React") !== -1 ?
                        <li>
                            <img src="images/react.png" alt="" />
                            <p>React</p>
                        </li>: null}
                        {team.p_language.indexOf("Redux") !== -1 ?
                        <li>
                            <img src="images/redux.png" alt="" />
                            <p>Redux</p>
                        </li>: null}
                        {team.p_language.indexOf("TypeScript") !== -1 ?
                        <li className='typeScript'>
                            <img src="images/typescript.png" alt="" />
                            <p>TypeScript</p>
                        </li>: null}
                        {team.p_language.indexOf("node.js") !== -1 ?
                        <li className='node'>
                            <img src="images/nodejs.png" alt="" />
                            <p>node.js</p>
                        </li>: null}
                        {team.p_language.indexOf("MySQL") !== -1 ?
                        <li className='mysql'>
                            <img src="images/mysql.png" alt="" />
                            <p>MySQL</p>
                        </li>
                        : null}
                        {team.p_language.indexOf("GitHub") !== -1 ?
                        <li className='github'>
                            <img src="images/github.png" alt="" />
                            <p>GitHub</p>
                        </li>: null}
                        {team.p_language.indexOf("Git") !== -1 ?
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

export default MyProjectDown;