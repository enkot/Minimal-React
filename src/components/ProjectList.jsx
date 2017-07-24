import React from 'react';

const ProjectItem = ({todo, move, remove}) => {
    const moveTodo = () => move(todo.id, todo.status);
    const removeTodo = e => {
        e.stopPropagation();
        remove(todo.id);
    };

    return (
        <div className="project-item" onClick={moveTodo}>
            <p className="task-desc">{todo.text}</p> 
            <span className="task-name">{todo.name}</span> 
            <span className="task-remove" onClick={removeTodo}>-</span>
        </div>
    );
}

const ProjectList = ({todos, move, remove}) => {
    const todoItem = (todo) => <ProjectItem todo={todo} key={todo.id} move={move} remove={remove}/>;

    const todoList = todos.filter((todo) => todo.status === 'todo').map(todoItem);
    const doingList = todos.filter((todo) => todo.status === 'doing').map(todoItem);
    const doneList = todos.filter((todo) => todo.status === 'done').map(todoItem);
  
    return (
        <div className="project-list">
            <div className="card todo-list">
                <h5>TODO <span>{todoList.length}</span></h5>
                {todoList}
            </div>
            <div className="card doing-list">
                <h5>DOING <span>{doingList.length}</span></h5>
                {doingList}
            </div>
            <div className="card done-list">
                <h5>DONE:) <span>{doneList.length}</span></h5>
                {doneList}
            </div>
        </div>
    );
};

export default ProjectList;