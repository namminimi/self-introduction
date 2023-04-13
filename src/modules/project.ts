import { AxiosError } from "axios";
import { ProjectType } from "../apis/dataType";
import { Dispatch } from "redux";

//액션타입
const GET_DATAS_SOLO = "project/GET_DATAS_SOLO" as const;
const GET_DATAS_SOLO_SUCCESS = "project/GET_DATAS_SOLO_SUCCESS" as const;
const GET_DATAS_SOLO_ERROR = "project/GET_DATAS_SOLO_ERROR" as const;

const GET_DATAS_TEAM = "project/GET_DATAS_TEAM" as const;
const GET_DATAS_TEAM_SUCCESS = "project/GET_DATAS_TEAM_SUCCESS" as const;
const GET_DATAS_TEAM_ERROR = "project/GET_DATAS_TEAM_ERROR" as const;

const GET_DATA = "project/GET_DATA" as const;
const GET_DATA_SUCCESS = "project/GET_DATA_SUCCESS" as const;
const GET_DATA_ERROR = "project/GET_DATA_ERROR" as const;



//액션함수
const getDatasSolo = () => ({type:GET_DATAS_SOLO})
const getDatasSoloSuccess = (data: ProjectType[]) => ({type:GET_DATAS_SOLO_SUCCESS, payload: data})
const getDatasSoloError = (error: AxiosError) => ({type:GET_DATAS_SOLO_ERROR, payload: error})

const getDatasTeam = () => ({type:GET_DATAS_TEAM})
const getDatasTeamSuccess = (data: ProjectType[]) => ({type:GET_DATAS_TEAM_SUCCESS, payload: data})
const getDatasTeamError = (error: AxiosError) => ({type:GET_DATAS_TEAM_ERROR, payload: error})

const getData = () => ({type:GET_DATA})
const getDataSuccess = (data: ProjectType) => ({type:GET_DATA_SUCCESS, payload: data})
const getDataError = (error: AxiosError) => ({type:GET_DATA_ERROR, payload: error})



//액션타입
type DataAction = ReturnType<typeof getDatasSolo>
| ReturnType<typeof getDatasSoloSuccess>
| ReturnType<typeof getDatasSoloError>
| ReturnType<typeof getDatasTeam>
| ReturnType<typeof getDatasTeamSuccess>
| ReturnType<typeof getDatasTeamError>
| ReturnType<typeof getData>
| ReturnType<typeof getDataSuccess>
| ReturnType<typeof getDataError>


//상태타입
export type DataState = {
    projectSolo: {
        loading: boolean;
        data: null | ProjectType[];
        error: null | Error;
    }
    projectTeam: {
        loading: boolean;
        data: null | ProjectType[];
        error: null | Error;
    }
    project: {
        loading: boolean;
        data: null | ProjectType;
        error: null | Error;
    }  
}

//초기값
const initialState: DataState = {
    projectSolo: {
        loading: false,
        data: null,
        error: null
    },
    projectTeam: {
        loading: false,
        data: null,
        error: null
    },
    project: {
        loading: false,
        data: null,
        error: null
    }
}


export const getDataSoloF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_DATAS_SOLO})
    try {
        const response = await callback();
        const data = response.data
        setTimeout(()=>{
            dispatch({
                type: GET_DATAS_SOLO_SUCCESS, payload: data
            })
        },5000)
    }
    catch(e){
        dispatch({type: GET_DATAS_SOLO_ERROR, error: e})
    }
}

export const getDataTeamF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_DATAS_TEAM})
    try {
        const response = await callback();
        const data = response.data
        setTimeout(()=>{
            dispatch({
                type: GET_DATAS_TEAM_SUCCESS, payload: data
            })
        },5000)
    }
    catch(e){
        dispatch({type: GET_DATAS_TEAM_ERROR, error: e})
    }
}

export const getDataF = (callback:Function) => async (dispatch: Dispatch) => {
    dispatch({type: GET_DATA})
    try {
        const response = await callback();
        const data = response.data[0]
        dispatch({
            type: GET_DATA_SUCCESS, payload: data
        })
    }
    catch(e){
        dispatch({type: GET_DATA_ERROR, error: e})
    }
}


//리듀서
export default function project(state=initialState, action: DataAction) {
    switch(action.type) {
        case GET_DATAS_SOLO:
            return {
                ...state,
                projectSolo: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_DATAS_SOLO_SUCCESS:
            return {
                ...state,
                projectSolo: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_DATAS_SOLO_ERROR:
            return {
                ...state,
                projectSolo: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        case GET_DATAS_TEAM:
            return {
                ...state,
                projectTeam: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_DATAS_TEAM_SUCCESS:
            return {
                ...state,
                projectTeam: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_DATAS_TEAM_ERROR:
            return {
                ...state,
                projectTeam: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }
        case GET_DATA:
            return {
                ...state,
                project: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                project: {
                    loading: false,
                    data: action.payload,
                    error: null
                }
            }
        case GET_DATA_ERROR:
            return {
                ...state,
                project: {
                    loading: false,
                    data: null,
                    error: action.payload
                }
            }        
        default:
            return state;            
    }
}