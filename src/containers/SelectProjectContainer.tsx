import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../modules';
import { useDispatch } from 'react-redux';
import { onClose } from '../modules/display';
import axios from 'axios';
import { API_URL } from '../config/apiurl';
import { getDataF } from '../modules/project';
import SelectProject from '../pages/SelectProject';


type SelectProjectType = {
    isNo: number
    setNo: React.Dispatch<React.SetStateAction<number>>
    setMainImg: React.Dispatch<React.SetStateAction<string | null | undefined>>
    isMainImg: string | null | undefined
}

const SelectProjectContainer = ({isNo, setNo, isMainImg, setMainImg}:SelectProjectType) => {

    const isOpen = useSelector((state:rootState) => state.displayOnOff.stateType)
    const {loading, data, error} = useSelector((state: rootState) => state.project.project)
    const dispatch = useDispatch<any>();

    const onCloseDisplay = () => {
        dispatch(onClose())
        setNo(0)
        setMainImg(data?.p_vide1 !== null ? `${data?.p_vide1}`: `${data.p_img1}`)
    }

    const selectProject = async () => {
        const data = await axios.get(`${API_URL}/selectProject/${isNo}`)
        return data
    }

    useEffect(()=>{
        dispatch(getDataF(selectProject))
    },[dispatch, isNo])
    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러발생</div>
    if(!data) return <div>데이터가 없습니다</div>
    return (
        <div>
            <SelectProject data={data} isMainImg={isMainImg} setMainImg={setMainImg} onCloseDisplay={onCloseDisplay} isOpen={isOpen}/>
        </div>
    );
};

export default SelectProjectContainer;