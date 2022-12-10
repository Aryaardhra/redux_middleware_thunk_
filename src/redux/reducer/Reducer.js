import ActionTypes from "../constant/ActionTypes";
import { combineReducers } from "redux";

const initialState = {
    products:[],
};

const Reducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return{...state, products: action.payload};
            default:
                return state;
    }
}

export const mainReducer = combineReducers({
    Reducer,
});