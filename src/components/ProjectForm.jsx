import React from 'react';

const ProjectForm = ({add}) => {
    let inputDesc, inputName;
    const addTodo = e => {
        e.preventDefault();
        add(inputDesc.value, inputName.value);
        inputDesc.value = '';
        inputName.value = '';
    };
  
    return (
        <div className="form-container">
            <form onSubmit={addTodo}>
                <input className="todo-form-desc" placeholder="New task..." ref={node => inputDesc = node} />
                <input className="todo-form-name" placeholder="Who..." ref={node => inputName = node} />
                <input className="todo-form-submit" type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default ProjectForm;