import React, {useState} from 'react';
import "./MyProject.scss"
import MyProjectSoloContainer from '../containers/MyProjectSoloContainer';
import MyProjectTeamContainer from '../containers/MyProjectTeamContainer';
import SelectProjectContainer from '../containers/SelectProjectContainer';


const MyProject = () => {
    const [isNo, setNo] = useState(0)
    const [isMainImg, setMainImg] = useState<string | null | undefined>("")
    return (
        <div className='myProject'>
            <div className='projectListBoxs'>
                <MyProjectSoloContainer setNo={setNo} setMainImg={setMainImg} />
                <MyProjectTeamContainer setNo={setNo} setMainImg={setMainImg}/>
            </div>
            {isNo !== 0 ? <SelectProjectContainer isNo={isNo} setNo={setNo} isMainImg={isMainImg} setMainImg={setMainImg}/> : null}
            
        </div>
    );
};

export default MyProject;