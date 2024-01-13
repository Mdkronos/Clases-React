
import { TYPES } from "@/actions/actions"
import { initialState } from "./initialState"

export const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.SUMAR: {
            return {contador: state.contador + action.payload}
        }
        case TYPES.RESETEAR: {
            return initialState
        }
        case TYPES.RESTAR: {
            return {contador: state.contador - 1}
        }
            
        default:
            return state
    }}