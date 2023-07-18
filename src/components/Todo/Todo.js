import React, { Component } from "react";

import { TodoInput } from "../TodoInput"
import { TodoList } from "../TodoList";

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
     
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this)
    this.updateTodo=this.updateTodo.bind(this)
  }

  addTodo(title) {
   

    const todo = {
      id: Date.now(),
      title,
      created: new Date(),
    };

    const newList = [todo, ...this.state.list];

    this.setState({ list: newList });
  }
removeTodo(todoId){
  console.log(todoId);
  let filterData=this.state.list.filter((item)=>item.id !==todoId)
  this.setState({list: filterData})
}
updateTodo(todoId, todoTitle ) { 
console.log(  todoId);
console.log(todoTitle);
let copyList=[...this.state.list]

let currendtTodoIndex=copyList.findIndex(item=>item.id=== todoId)
let currentItem=copyList[currendtTodoIndex]
let updateItem={...currentItem, updated: new Date(), title: todoTitle}
copyList[currendtTodoIndex]=updateItem
this.setState({list: copyList})
}
  render() {
    console.log("this content", this.state.list);
    return (
      <div style={{textAlign:"center"}} >
        
        <h1>Todo app</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList list={this.state.list} removeTodo={this.removeTodo} updateTodo={this.updateTodo} />
      </div>
    );
  }
}

export default Todo;