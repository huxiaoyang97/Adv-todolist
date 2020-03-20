import{handle_button_delete,handle_button_click,change_input_value,init_value} from './actionTypes';
const initState = {
    inputValue: '',
    list:[]
}
//存储所有的function
export default(state = initState, action)=>{
    if(action.type===change_input_value){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type===handle_button_click){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return newState;
    }
    if(action.type===handle_button_delete){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    if(action.type===init_value){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value
        return newState;
    }
    return state;
}