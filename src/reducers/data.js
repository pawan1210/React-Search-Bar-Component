import { ADD_DATA } from "../actions/actionTypes";

export default function data(state=[],action){
    switch(action.type){


        case ADD_DATA:
            return [
              action.data,
              ...state
            ];

        default:
            return state
    }
     
}