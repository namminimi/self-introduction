import React, { Dispatch, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../modules';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import MyProject from '../pages/MyProject';
import { getDataSoloF } from '../modules/project';
import MyProjectUp from '../components/MyProjectUp';
import Skeleton from '../components/Skeleton';

type MyProjectSoloContainerType = {
    setNo: React.Dispatch<React.SetStateAction<number>>
    setMainImg: React.Dispatch<React.SetStateAction<string | null | undefined>>
}

const MyProjectSoloContainer = ({setNo, setMainImg}:MyProjectSoloContainerType) => {
    const {loading, data, error} = useSelector((state:rootState)=> state.project.projectSolo)
    const dispatch = useDispatch<any>();

    const projectSoleDatas = async () => {
        const data = await axios.get(`${API_URL}/projectSole`)
        return data
    }
    useEffect(()=>{
       dispatch(getDataSoloF(projectSoleDatas))
    },[dispatch])
    if(loading) return <Skeleton/>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 없습니다</div>
    return (
        <div>
            <MyProjectUp data={data} setNo={setNo} setMainImg={setMainImg}/>
        </div>
    );
};

export default MyProjectSoloContainer;