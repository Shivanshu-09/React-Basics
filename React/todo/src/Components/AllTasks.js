import React, { Component } from 'react'

export default class AllTasks extends Component {
  render() {
    return (
      <div >
        {
            this.props.state.tasks.map((task) => (
                <div key={task.id}>
                    {task.task}
                </div>
            ))
        }
      </div>
    )
  }
}
