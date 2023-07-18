import React, { Component } from "react";
import PropTypes from 'prop-types';
export class TodoInput extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isDropdown: false
    };
    this.handleChangeText = this.handleChangeText.bind(this);
   
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onHandleFocus=this.onHandleFocus.bind(this)
    // this.onHandleBlur=this.onHandleBlur.bind(this)
  }
  handleChangeText(e) {
    const text = e.target.value;
    this.setState({ text  });
  }
  handleSubmit() {
    this.props.addTodo(this.state.text);
     this.setState({ text: "" });
  
  }
// onHandleFocus(){
//   console.log("input focus");
//   this.setState({isDropdown: true})
// }
// onHandleBlur(){
//   console.log("input onHandleNlur");
//   this.setState({isDropdown: false})
// }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleChangeText} 
        // onFocus={this.onHandleFocus} onBlur={this.onHandleBlur}
        />
        <button onClick={this.handleSubmit}>Send</button>

        {/* {this.state.isDropdown && (<div>
          
          <li>salam</li>
          <li>salam</li>
          <li>salam</li>
          <li>salam</li>
          </div>)} */}
      </div>
    );
  }
}
export default TodoInput;
TodoInput.propTypes={
  text: PropTypes.string.isRequired,
 
}