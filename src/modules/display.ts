const SET_OPEN = "project/SET_OPEN" as const;
const SET_CLOSE = "project/SET_CLOSE" as const;

export const onOpen = () => ({type:SET_OPEN})
export const onClose = () => ({type:SET_CLOSE})

type DisplayAction = ReturnType<typeof onOpen>
| ReturnType<typeof onClose>

export type DisplayState = {
    stateType: boolean;
}

const initialState:DisplayState = {
    stateType: false
}

export default function displayOnOff(state=initialState, action: DisplayAction) {
    switch(action.type){
        case SET_OPEN:
            return {
                stateType:state.stateType = true  
            }
        case SET_CLOSE:
            return {
                stateType:state.stateType = false
        }
        default:
            return state;  
    }
}