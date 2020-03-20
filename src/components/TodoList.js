import React, {Component, Fragment} from 'react';
import  './TodoList.css';
import TodoListItem from './TodoListItem.js';
import store from '../store/index.js';
import {getHandleInputChangeAction,getHandleDeleteAction,getHandleClickAction,getInitAction} from '../store/actionCreator';
import {connect} from 'react-redux';
import {TodoListDiv} from '../store/style'

class TodoList extends Component{
    constructor(props){
        super(props);
        // this.state= store.getState();
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClickItem = this.handleClickItem.bind(this);
        // this.handleDelete= this.handleDelete.bind(this);
        // this.handleStoreChange = this.handleStoreChange.bind(this);
        // store.subscribe(this.handleStoreChange);
    }
    // componentDidMount(){
    //     const action = getInitAction();
    //     store.dispatch(action);
    // }
    // componentWillMount(){
    //     console.log("componentWillMount")
    // }
    // /*handleChange(e){
        
    //     this.setState({
    //         inputValue:e.target.value//target 是event的属性
    //     })
    // }*/
    // handleChange(e){
    //     // const value = e.target.value;//e.target.value用于拿到input里面输入的值，built in.
    //     // this.setState((state, props)=>{
    //     //     return{inputValue:value}
    //     // })
    //     // console.log("change_input_value",change_input_value);
    //     // const action ={
    //     //     type:change_input_value,
    //     //     value:e.target.value,
    //     // }
    //     const action = getHandleInputChangeAction(e.target.value);
    //     store.dispatch(action);
    // }
    // handleStoreChange(){
    //     this.setState(store.getState());
    // }
    // handleClickItem(){
    //     // console.log("inputValue", this.state.inputValue);
    //     // let listTemp = this.state.list;
    //     // listTemp.push(this.state.inputValue);
    //     // this.setState({
    //     //     list:listTemp,
    //     //     inputValue:''
    //     // })
    //     // const action ={
    //     //     type:handle_button_click
    //     // }
    //     const action = getHandleClickAction();
    //     store.dispatch(action);
    // }
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate")
    //     return true;
    // }
    // componentDidUpdate(){
    //     console.log("componentDidUpdate")
    // }
    // componentWillUpdate(){//delete
    //     console.log("componentWillUpdate")
    // }
    // /*handleDelete(index){
    //     const listTemp = this.state.list;
    //     listTemp.splice(index,1);
    //     this.setState({
    //         list:listTemp
    //     })
    // } */
    // handleDelete(index){
    //     // this.setState((prestate, props)=>{
    //     //     const tem = prestate.list;
    //     //     tem.splice(index,1)
    //     //     return {list:tem}
    //     // })
    //     // const action ={
    //     //     type:handle_button_delete,
    //     //     index:index
    //     // }
    //     const action = getHandleDeleteAction(index);
    //     store.dispatch(action);
    // }/*render function必须return，每一个component里面必须有render*/
    render(){  
        console.log("render")  
        return(/*小括号中只允许1个div,但是可以包div*/
            <Fragment> 
                <TodoListDiv>
                <input value={this.props.inputValue} onChange= {this.props.handleChange}></input>
                <button onClick = {this.props.handleClickItem}> Submit </button>
                <ul>
                   {this.props.list.map((item,index)=>{
                       return <TodoListItem key={index} number={index} content={item} handleDeleteItem={this.props.handleDelete}/>
                   })}
                </ul></TodoListDiv>
            </Fragment>
        )
    }
}
// store's state===>  todolist's props
function mapStateToProps(state){
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}
//React Redux 的作用Store和React连起来，React和Redux连起来，更方便更简洁
//Store 是一个Global Object
//store dispatch todo list's props
function mapDispatchToProps(dispatch){
    return{
        handleChange(e){
            const action = getHandleInputChangeAction(e.target.value);
            dispatch(action);
        },
        handleClickItem(){
            const action= getHandleClickAction();
            dispatch(action);
        },
        handleDelete(index){
            const action = getHandleDeleteAction(index);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);