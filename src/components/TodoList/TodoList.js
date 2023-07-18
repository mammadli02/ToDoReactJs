import React, { Component } from "react";
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import { Typography } from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";
export class TodoList extends Component {
  render() {
    const { list, removeTodo , updateTodo} = this.props;
    const content = list?.map((todo, index) => (
      <ToDoItem key={todo.id} 
      title={todo.title}
      id={todo.id}
      created={todo.created} 
      onClick={()=> removeTodo(todo.id)} 
      updateTodo={updateTodo} />
    //   <div key={todo.id} >
    //   <Card sx={{ maxWidth: 205 }}>
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {todo.title}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //     {new Date(todo.created).getFullYear()} 
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button onClick={()=>removeTodo(todo.id)} size="small">Delete</Button>
    //     <Button size="small">Edit</Button>
    //   </CardActions>
    // </Card>
    //   </div>
    ));
    return <div style={{display:"flex"}}>{content}</div>;
  }
}
export default TodoList;