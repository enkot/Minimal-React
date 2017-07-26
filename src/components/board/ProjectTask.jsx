import React from 'react';

const ProjectTask = ({todo, move, remove}) => {
    const moveTodo = () => move(todo.id, todo.status);
    const removeTodo = e => {
        e.stopPropagation();
        remove(todo.id);
    };

    return (
        <div className="project-task" onClick={moveTodo}>
            <p className="task-desc">{todo.desc}</p> 
            <span className="task-name">{todo.name}</span> 
            <span className="task-remove" onClick={removeTodo}>-</span>
        </div>
    );
};

export default ProjectTask;