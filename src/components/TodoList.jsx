import React from 'react';

const Todo = ({todo, remove}) => {
    const removeTodo = () => remove(todo.id)

    return <a href="#" className="todo-item" onClick={removeTodo}>{ todo.text }</a>;
}

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => <Todo todo={todo} key={todo.id} remove={remove}/>);
  
    return <div className="todo-list">{ todoNode }</div>;
};

export default TodoList;