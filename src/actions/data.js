import { ADD_DATA } from "./actionTypes";

export function addData(data){
  
    return {
        type:ADD_DATA,
        data
    }
}


export function createData(content){
   
  return (dispatch)=>{
    
     
      dispatch(addData(content))
  }
}