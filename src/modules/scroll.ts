const SET_UP = "project/SET_UP" as const;
const SET_DOWN = "project/SET_DOWN" as const;
const SET_NUMBER = "project/SET_NUMBER" as const;

export const onUp = () => ({type:SET_UP})
export const onDown = () => ({type:SET_DOWN})
export const onNumber = (number:number) => ({type:SET_NUMBER, payload: number})

type ScrollAction = ReturnType<typeof onUp>
| ReturnType<typeof onDown>
| ReturnType<typeof onNumber>

export type ScrollState = {
    stateType: boolean;
    scrollZero: number
}

const initialState:ScrollState = {
    stateType: false,
    scrollZero: 0
}

export default function scrollOnOff(state=initialState, action: ScrollAction) {
    switch(action.type){
        case SET_UP:
            return {
                ...state,
                stateType:state.stateType = true  
            }
        case SET_DOWN:
            return {
                ...state,
                stateType:state.stateType = false
        }
        case SET_NUMBER:
            return {
                ...state,
                scrollZero:action.payload
        }
        default:
            return state;  
    }
}