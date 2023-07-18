import React, { Component, createRef } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
export class ToDoItem extends Component {
    constructor (){
        super()
        this.state={
todoRef: createRef(),
            isShowEdit: false,
          
        }
        this.onToggleShos=this.onToggleShos.bind(this)
        this.onSave=this.onSave.bind(this)
    }
onToggleShos(){
this.setState({isShowEdit : true})
}
onSave(){
    const value=this.state.todoRef.current.value
    // console.log(value);
    this.props.updateTodo(this.props.id, value)
    this.setState({isShowEdit : false })
    }


  render() {
    const {title, created, onClick}=this.props
    return (
    <>
    <div >
        {this.state.isShowEdit ? (
            <input ref={this.state.todoRef} 

           
            size={20} defaultValue={title}/>
        ): (

      <Card sx={{ maxWidth: 450 }} style={{marginLeft:"30px" , marginTop:"50px"}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {new Date(created).getFullYear()} 
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
        )}

        {this.state.isShowEdit ? (
            <button onClick={this.onSave}> Save</button>
        ): 
        (
            <>
        <Button  style={{marginLeft:"35px"}} onClick={onClick} size="small">Delete</Button>
        <Button style={{marginLeft:"35px"}} onClick={this.onToggleShos} size="small">Edit</Button>
            </>
        )}
      </div>
      </>
    )
  }
}

export default ToDoItem