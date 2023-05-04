import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props);

  }
  submit = () => {
    var typed = document.getElementById("currentTask");
    var new_task = {task : typed.value, id : 3}
    this.props.handleStateChange(new_task, "")
  }
  render() {
    return (
      <div>
        <input type='search' id="currentTask"></input>
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}
