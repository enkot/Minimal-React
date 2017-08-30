import React from 'react';

const Task = ({ 
    id, 
    text, 
    executor, 
    onChangeClick,
    onRemoveClick
}) => {
    return (
        <div className="project-task" onClick={() => onChangeClick(id)}>
            <p className="task-desc">{text}</p> 
            <span className="task-name">{executor}</span> 
            <span className="task-remove" onClick={() => onRemoveClick(id)}>-</span>
        </div>
    );
};

export default Task;