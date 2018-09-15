import React, { Component, Fragment } from 'react';
import TodoItem from './Todoitem.js'
//import ReactSvg from 'react-svg'
import fall from './fall.svg'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    };
    this.HeaderButton = this.HeaderButton.bind(this);
    this.handelInputChange = this.handelInputChange.bind(this);
    this.clickItem = this.clickItem.bind(this);
  }
/* 按钮点击事件处理函数 */
  HeaderButton(){
    if(this.state.inputValue.trim()){
      this.setState({
      list:[...this.state.list,this.state.inputValue.trim()],
      inputValue:''
    })
  }else{
    this.setState({
      inputValue:''
    })
  } 
  }
/* input输入框change事件处理函数 */
  handelInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
    //console.log(e.target.value);
  }
/* 由TodoItem组件触发的处理函数，作用是删除list对应项 */
  clickItem(index){
    //console.log(index);
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
  getTodoItems(){
    return(
      this.state.list.map((item,index) => {
        //return <li key={index} onClick={this.clickItem.bind(this,index)}>{item}</li>
        return (
          <TodoItem 
          key={index}
          delete={this.clickItem}
          index={index}
          content={item}/>
        )
        //父组件使用属性给子组件传值,key只用于循环识别，不会传进子组件
      })
    ) 
  }
  render() {
    //jsx中不能写语句只能写表达式
    //数据的流向从js到HTML中，于是，value={this.state.inputValue}相当于把value与inputValue的值进行绑定
    return (
      <Fragment>
        <div className="inputBtn">        
        <div className="inputContainer">
          <img src={fall} alt='write down your plan' className="btn-img"/>
          <input value={this.state.inputValue} onChange={this.handelInputChange}/>
        </div>
          <button onClick={this.HeaderButton} className="btn">Save</button>
        </div>  
        
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
