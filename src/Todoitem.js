import React, { Component } from 'react'
import right from './check.svg'

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handelDeleteItem = this.handelDeleteItem.bind(this);
    }
    handelDeleteItem(){
        this.props.delete(this.props.index)
        console.log('delete');
    }
    render(){
        return (
            <li onClick={this.handelDeleteItem}><img src={right} alt="item:" style={{marginRight: '0.5rem'}}/>{this.props.content}</li>
            //子组件使用props接受父组件传进来的值
        )
    }
}

export default TodoItem;