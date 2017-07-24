import React from 'react';
import ProjectTitle from './ProjectTitle.jsx';
import ProjectForm from './ProjectForm.jsx';
import ProjectList from './ProjectList.jsx';
import store from './../store';

import sample_tasks from './../../data/sample';
sample_tasks.forEach(task => {
    store.add({
        name: task.name,
        desc: task.desc, 
        status: task.status
    });
});

class Project extends React.Component {
    constructor(props) {
        super(props);
        
        this.addTodo = this.addTodo.bind(this);
        this.handleMove = this.handleMove.bind(this);
        this.handleRemove = this.handleRemove.bind(this);

        this.state = {
            todos: []
        };
    }
    componentDidMount() {
        this.setState({ todos: store.todos });
    }
    addTodo(desc, name) {
        if (empty(desc) || empty(name)) return;

        store.add({
            name: name,
            desc: desc
        });

        this.setState({ todos: store.todos });

        return true;
    } 
    handleMove(id, status) {
        const modified = this.state.todos.map((todo) => {
            if (todo.id === id) {
                let statusNum = store.status.indexOf(todo.status);
                todo.status = statusNum === 2 ? store.status[0] : store.status[statusNum + 1];
            }

            return todo;
        });

        this.setState({ todos: modified });
    }
    handleRemove(id) {
        const modified = this.state.todos.filter((todo) => {
            if (todo.id !== id) return todo;
        });

        store.todos.forEach((el, i, array) => {
            if (el.id === id) array.splice(i, 1);
        });

        this.setState({ todos: modified });
    }
    render() {
        return (
            <div>
                <ProjectTitle todoCount={this.state.todos.length}/>
                <ProjectForm add={this.addTodo}/>
                <ProjectList
                    todos={this.state.todos}
                    move={this.handleMove}
                    remove={this.handleRemove}
                />
            </div>
        );
    }
}

function empty(val) {
    return !val.replace(/\s/g, '').length;
}

export default Project;