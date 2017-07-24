import React from 'react';
import ProjectTitle from './ProjectTitle.jsx';
import ProjectForm from './ProjectForm.jsx';
import ProjectList from './ProjectList.jsx';

const data = {
    id: 0,
    todos: [],
    status: ['todo', 'doing', 'done']
};

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
    addTodo(desc, name) {
        if (empty(desc) || empty(name)) return;

        data.todos.push({ 
            id: data.id++, 
            text: desc, 
            name: name, 
            status: data.status[0]
        });

        this.setState({ todos: data.todos });

        return true;
    } 
    handleMove(id, status) {
        const modified = this.state.todos.map((todo) => {
            if (todo.id === id) {
                let statusNum = data.status.indexOf(todo.status);
                todo.status = statusNum === 2 ? data.status[0] : data.status[statusNum + 1];
            }

            return todo;
        });

        this.setState({ todos: modified });
    }
    handleRemove(id) {
        const modified = this.state.todos.filter((todo) => {
            if (todo.id !== id) return todo;
        });

        data.todos.forEach((el, i, array) => {
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