import { actionTypes } from "./ActionTypes"
export const initialState = {
    loading: false,
    product: [],
    error: false,
    cart: [],
    remove: []
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FECTHING_START:
            return {
                ...state,
                loading: true,
                error: false
            }
        case actionTypes.FECTHING_SUCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: false
            }
        case actionTypes.FECTHING_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case actionTypes.REMOVE_ITEMS:
            return {
                ...state,
                product: [...state.product].filter(item => item._id !== action.payload),
                cart: [...state.cart].filter(item => item._id !== action.payload)
            }
        default:
            return state
    }
}