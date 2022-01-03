import { BUY_CAKE } from "./Actions"

const initialState = {
    numOfCakes : 100
}

export const cakeReducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes : state.numOfCakes -1
        }
        default : return state
    }
}