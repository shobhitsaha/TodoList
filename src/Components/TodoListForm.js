import React, { Component } from 'react'
import '../Styles/TodoListForm.css'

class TodoListForm extends Component {

    constructor(props) {
        super(props);
        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({ task: e.target.value })
    }
    handleSubmit() {
        let value = this.state.task;
        if (value === '') {
            return;
        }
        this.setState({ task: '' })
        this.props.addTask(value);
    }
    render() {
        return (
            <section className='add'>
                <label className="add-input">
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name='task'
                        id='addtask'
                        value={this.state.task}
                        placeholder='Enter Task'
                    />
                </label>

                <button className='submit' onClick={this.handleSubmit}>Add Task</button>
            </section>
        )
    }
}
export default TodoListForm