import React, { Component } from 'react'
import Header from './Header'
import AllTasks from './AllTasks'

class Todo extends Component {
  constructor(){
    super();
    this.state = {
        tasks : [{task : "Check Emails", id : 1}],
        current_task : ""
    }
  }

  handleStateChange = (new_task, new_current_task) => {
    this.setState({
        tasks : [...this.state.tasks, new_task],
        current_task : new_current_task
    })
  }

  render() {
    return (
      <div>
        <Header state = {this.state} handleStateChange = {this.handleStateChange}/>
        <AllTasks state={this.state}/>        
      </div>
    )
  }
}

export default Todo;
