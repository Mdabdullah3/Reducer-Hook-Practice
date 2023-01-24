import React, { createContext, useEffect, useReducer, useState } from 'react';
import { useContext } from 'react';
import { actionTypes } from '../state/ProductState/ActionTypes';
import { initialState, productReducer } from '../state/ProductState/ProductReducer';
const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {
        dispatch({ type: actionTypes.FECTHING_START })
        fetch("https://ford-server.onrender.com/products")
            .then(res => res.json())
            .then(data => {
                dispatch({ type: actionTypes.FECTHING_SUCESS, payload: data})
                console.log(data);
            }).catch(() => {
                dispatch({ type: actionTypes.FECTHING_ERROR })
            })
    }, [])
    console.log(state);
    const value = {
        state,
        dispatch
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(PRODUCT_CONTEXT)

    return context
}

export default ProductProvider;