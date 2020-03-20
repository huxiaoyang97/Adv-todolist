import React, {Component} from 'react';
import { render } from '@testing-library/react';

class TodoListItem extends Component{
    constructor(props){
        super(props);
        this.deleteItem= this.deleteItem.bind(this);
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps...")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount==>***")
    }
    deleteItem(){
        this.props.handleDeleteItem(this.props.number);
    }
    render(){
        return(
            <li onClick={this.deleteItem}>{this.props.content}</li>

        )
    }
}
export default TodoListItem;