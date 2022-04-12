import React, { Component } from 'react'
import TodoListForm from './TodoListForm.js'
import Todo from './Todo.js'
import TodoEdit from './TodoEdit.js'
import { v4 as uuidv4 } from 'uuid'
import '../Styles/TodoList.css'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = { tasks: [] };
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);

    }

    addTask(task) {
        let newTasks = this.state.tasks;
        newTasks.push({ task, id: uuidv4(), edit: false, completed: false });
        this.setState({ tasks: newTasks });
    }
    removeTask(id) {
        let newTasks = this.state.tasks.filter(f => f.id !== id);
        this.setState({ tasks: newTasks });
    }
    editToggle(id) {
        let newTasks = this.state.tasks.map(m => {
            if (m.id === id) {
                return { ...m, edit: true };
            }
            return m;
        })
        this.setState({ tasks: newTasks })
    }
    toggleCompleted(id) {
        let newTasks = this.state.tasks.map(m => {
            if (m.id === id) {
                return { ...m, completed: !m.completed };
            }
            return m;
        })
        this.setState({ tasks: newTasks })
    }
    editTask(id, value) {
        let newTasks = this.state.tasks.map(m => {
            if (m.id === id) {
                return { id: m.id, task: value, edit: false };
            }
            return m;
        })
        this.setState({ tasks: newTasks })
    }

    render() {
        let Displaytask = this.state.tasks.map(m => {

            if (m.edit === false) {

                return <Todo
                    key={m.id}
                    task={m.task}
                    completed={m.completed}
                    toggleCompleted={() => { this.toggleCompleted(m.id) }}
                    removeTask={() => this.removeTask(m.id)}
                    editToggle={() => this.editToggle(m.id)}
                />
            }
            else {
                return <TodoEdit
                    key={m.id}
                    task={m.task}
                    removeTask={() => this.removeTask(m.id)}
                    editTask={this.editTask}
                    id={m.id}
                />
            }
        })
        return (
            <section className='TodoList'>

                <div className='header'>
                    <h1>Todo List</h1>
                    <p>An app that manages all your work</p>
                </div>

                <div>{Displaytask}</div>

                <TodoListForm addTask={this.addTask} />
            </section>
        )
    }

}
export default TodoList;