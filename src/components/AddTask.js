import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTask = ({ dispatch, state }) => {
    let inputText, inputExecutor;

    const submitTask = (e) => {
        e.preventDefault();

        if (!inputText.value.trim())
            return;
            
        dispatch(addTask({
            text: inputText.value,
            executor: inputExecutor.value.trim() ? inputExecutor.value : 'All'
        }));

        inputText.value = '';
        inputExecutor.value = '';
    };

    return (
        <div className="form-container">
            <form onSubmit={submitTask}>
                <input className="todo-form-desc" placeholder="New task..." ref={node => inputText = node} />
                <input className="todo-form-name" placeholder="Who..." ref={node => inputExecutor = node} />
                <input className="todo-form-submit" type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default connect()(AddTask);