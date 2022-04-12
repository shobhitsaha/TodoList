import React, { Component } from 'react'
import '../Styles/Todo.css'

class Todo extends Component {
    render() {
        return (
            <div className='todo'>
                <span
                    className={`task-name ${this.props.completed ? 'completed' : ''}`}
                    onClick={this.props.toggleCompleted}
                    title={`task-name ${this.props.completed ? 'Mark as Undone' : 'Mark as done'}`}
                >
                    {this.props.task}
                </span>

                <div className='buttons'>
                    <button className='todo' title='Delete Task' onClick={this.props.removeTask}><i className="fa fa-trash-o" aria-hidden="true"></i></button>

                    <button className='todo' title='Edit Task' onClick={this.props.editToggle}><i className="fa fa-wrench" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}
export default Todo;
