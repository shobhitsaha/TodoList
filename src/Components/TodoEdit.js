import React, { Component } from 'react'
import '../Styles/TodoEdit.css'

class TodoEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { task: this.props.task }
        this.handleChange = this.handleChange.bind(this);
        this.editTask = this.editTask.bind(this);

    }
    handleChange(e) {
        this.setState({ task: e.target.value })
    }
    editTask() {
        let value = this.state.task;
        if (value === '') {
            this.props.removeTask();

        }
        else {
            this.props.editTask(this.props.id, value);
        }
    }
    render() {
        return (
            <div className='edit'>
                <input
                    onChange={this.handleChange}
                    type="text"
                    name='task'
                    id='task'
                    value={this.state.task}
                />
                <button className='todo' onClick={this.editTask}><i className="fa fa-check" aria-hidden="true"></i></button>
            </div >
        )
    }
}
export default TodoEdit;