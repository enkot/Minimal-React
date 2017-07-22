import React from 'react';
import TodoTitle from './TodoTitle.jsx';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';

const data = {
	id: 0,
	todos: []
};

class Todo extends React.Component {
	constructor(props) {
    	super(props);
		
		this.addTodo = this.addTodo.bind(this);
		this.handleRemove = this.handleRemove.bind(this);

    	this.state = {
    		todos: []
		};
	}
	componentDidMount() {
		this.setState({
			todos: data.todos
		});
	}
	addTodo(val) {
		if (!val.replace(/\s/g, '').length) return;

		data.todos.push({ text: val, id: data.id++});

		this.setState({
			todos: data.todos
		});
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
				<TodoTitle todoCount={this.state.todos.length}/>
				<TodoForm addTodo={this.addTodo}/>
				<TodoList
					todos={this.state.todos}
					remove={this.handleRemove}
				/>
			</div>
		);
	}
}

export default Todo;