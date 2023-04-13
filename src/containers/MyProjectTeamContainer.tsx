import React, {useEffect} from 'react';
import { rootState } from '../modules';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { API_URL } from '../config/apiurl';
import axios from 'axios';
import { getDataTeamF } from '../modules/project';
import MyProjectDown from '../components/MyProjectDown';
import Skeleton2 from '../components/Skeleton2';

type MyProjectTeamContainerType = {
    setNo: React.Dispatch<React.SetStateAction<number>>
    setMainImg: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

const MyProjectTeamContainer = ({setNo, setMainImg}:MyProjectTeamContainerType) => {
    const {loading, data, error} = useSelector((state:rootState)=> state.project.projectTeam)
    const dispatch = useDispatch<any>();

    const projectSoleDatas = async () => {
        const data = await axios.get(`${API_URL}/projectTeam`)
        return data
    }
    useEffect(()=>{
       dispatch(getDataTeamF(projectSoleDatas))
    },[dispatch])
    if(loading) return <Skeleton2/>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 없습니다</div>
    return (
        <div>
            <MyProjectDown data={data} setNo={setNo} setMainImg={setMainImg}/>
        </div>
    );
};

export default MyProjectTeamContainer;