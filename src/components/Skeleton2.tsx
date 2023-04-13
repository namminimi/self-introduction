import React from 'react';
import "./Skeleton.scss"


const Skeleton2 = () => {
    return (
        <div className='skeleton-projectListBox'>
            <h2>Project-List(Team)</h2>
            <ul className='skeleton-projectList'>
            { new Array(3).fill(1).map((a , i) =>
                <li className='skeleton-pLi' key={i}>
                    <h3></h3>
                    <div className='line'></div>
                    <ul className='skeleton-language'>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li className='javaScript'>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                        </li>
                        <li className='typeScript'>
                            <p></p>
                        </li>
                        <li className='node'>
                            <p></p>
                        </li>
                        <li className='mysql'>
                            <p></p>
                        </li>
                        
                        <li className='github'>
                            <p></p>
                        </li>
                        <li>
                            <p></p>
                        </li>
                    </ul>
                </li>)}
            </ul>
        </div>
    );
};

export default Skeleton2;