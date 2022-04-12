import React, { Component } from 'react'
import '../Styles/Todo.css'

class Todo extends Component {
    render() {
        return (
            <div className='todo'>
                <span
                    className={`task-name ${this.props.completed ? 'completed' : ''}`}
                    onClick={this.props.toggleCompleted}
                >
                    {this.props.task}
                </span>

                <div className='button'>
                    <button className='todo' onClick={this.props.removeTask}><i className="fa fa-trash-o" aria-hidden="true"></i></button>

                    <button className='todo' onClick={this.props.editToggle}><i className="fa fa-wrench" aria-hidden="true"></i></button>
                </div>
            </div>
        )
    }
}
export default Todo;