import{handle_button_delete,handle_button_click,change_input_value, init_value} from './actionTypes'
import axios from 'axios';

export const getHandleInputChangeAction = (value) =>{
    const action ={
        type:change_input_value,
        value:value,
    }
    return action;
}

export const getHandleDeleteAction = (index) =>{
    const action ={
            type:handle_button_delete,
            index:index
    }
    return action;
}

export const getHandleClickAction = () =>{
    const action ={
        type:handle_button_click
        }
    return action;
}

export const getInitAction = () =>{
    return (dispatch)=>{
        axios.get('http://localhost:3001/')
        .then(function(response){
            const action = {
                type:init_value,
                value:response.data
            }
            dispatch(action);
            //console.log("response",response.data);
        })
    }
}