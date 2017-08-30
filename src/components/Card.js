import React from 'react';

const Card = ({ 
    id, 
    text, 
    executor, 
    onChangeClick,
    onRemoveClick
}) => {
    return (
        <div className="project-card" onClick={() => onChangeClick(id)}>
            <p className="card-text">{text}</p> 
            <span className="card-executor">{executor}</span> 
            <span className="card-remove" onClick={() => onRemoveClick(id)}>-</span>
        </div>
    );
};

export default Card;