import React from 'react';

const ProjectForm = ({add}) => {
    let input;
    const addTodo = e => {
        e.preventDefault();
        add(input.value);
        input.value = '';
    };
  
    return (
        <div className="form-container">
            <form onSubmit={addTodo}>
                <input className="todo-form" placeholder="My new task..." ref={node => input = node} />
            </form>
        </div>
    );
};

export default ProjectForm;