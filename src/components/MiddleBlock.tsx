import React from 'react';
import "./MiddleBlock.scss"
import { IoLogoHtml5, IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5"
import { SiPhp, SiMysql, SiTypescript, SiRedux, SiVercel } from "react-icons/si";
import { FaReact, FaGithub, FaPython, FaAws, FaSass, FaArrowRight} from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { Link } from 'react-router-dom';

const MiddleBlock = () => {
    return (
        <div className='middleBlock'>
            <div className='skillBlock'>
                <h2><MdOutlineComputer className='mdOutlineComputer'/><span>Skills</span></h2>
                <div className='skills'>
                    <div className='frontend'>
                        <h3>Frontend</h3>
                        <div className='frontendIcon'>
                            <div className='htmlIcon icons'>
                                <IoLogoHtml5/>
                                <h4>Html</h4>
                            </div>
                            <div className='cssIcon icons'>
                                <IoLogoCss3/>
                                <h4>Css</h4>
                            </div>
                            <div className='sassIcon icons'>
                                <FaSass/>
                                <h4>scss</h4>
                            </div>
                            <div className='javascriptIcon icons'>
                                <IoLogoJavascript/>
                                <h4>JavaScript</h4>
                            </div>
                            <div className='reactIcon icons'>
                                <FaReact/>
                                <h4>React</h4>
                            </div>
                            <div className='reduxIcon icons'>
                                <SiRedux/>
                                <h4>Redux</h4>
                            </div>
                            <div className='typeScriptIcon icons'>
                                <SiTypescript/>
                                <h4>TypeScript</h4>
                            </div>
                        </div>
                    </div>{/* 프론트엔드스킬 */}

                    <div className='backend'>
                        <h3>Backend</h3>
                        <div className='backendIcon'>
                            <div className='phpIcon icons'>
                                <SiPhp/>
                                <h4>PHP</h4>
                            </div>
                            <div className='nodeIcon icons'>
                                <IoLogoNodejs/>
                                <h4>Node.js</h4>
                            </div>
                            <div className='pythonIcon icons'>
                                <img src="images/python_logo.png" alt="" />
                                <h4>Python</h4>
                            </div>
                        </div>
                    </div>{/* 백엔드스킬 */}
                    <div className='db'>
                        <h3>DB</h3>
                        <div className='dbIcon'>
                            <div className='sqlIcon icons'>
                                <SiMysql/>
                                <h4>MySQL</h4>
                            </div>
                        </div>
                    </div>{/* db스킬 */}
                    <div className='version'>
                        <h3>Version Control</h3>
                        <div className='versionIcon'>
                            <div className='gitHubIcon icons'>
                                <FaGithub/>
                                <h4>GitHub</h4>
                            </div>
                            <div className='gitIcon icons'>
                                <BsGit/>
                                <h4>Git</h4>
                            </div>
                        </div>
                    </div>{/* 버젼관리 */}

                    <div className='deployment'>
                        <h3>Deployment</h3>
                        <div className='depIcon'>
                            <div className='awsIcon icons'>
                                <FaAws/>
                                <h4>AWS</h4>
                            </div>
                            <div className='vercelIcon icons'>
                                <img src="images/vercel.png" alt="" />
                                <h4>Vercel</h4>
                            </div>
                            <div className='herokuIcon icons'>
                                <img src="images/heroku_logo.png" alt="" />
                                <h4>Heroku</h4>
                            </div>{/* 배포관리 */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='moveList'>
                <Link to="/projects">
                    <h3><span>Project List</span><FaArrowRight className='faArrowRight'/></h3>
                </Link>
            </div>
        </div>
    );
};

export default MiddleBlock;