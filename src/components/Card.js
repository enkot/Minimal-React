import React from 'react';
import { connect } from 'react-redux';
import { changeTaskStatus, removeTask } from '../actions';
import Task from './Task';

const Card = ({ 
    status, 
    children, 
    tasks,
    changeTaskStatus,
    removeTask
}) => (
    <div className={`card ${status.toLowerCase()}-card`}>
        <h5>{children} <span>{tasks.length}</span></h5>

        {tasks.map((task) => 
            <Task 
                key={task.id}
                {...task}
                onChangeClick={changeTaskStatus}
                onRemoveClick={removeTask}
            />
        )}
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return { 
        tasks: state.filter(t => t.status === ownProps.status) 
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTaskStatus: (id) => {
        dispatch(changeTaskStatus(id));
    },
    removeTask: (id) => {
        dispatch(removeTask(id));
    }
  };
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Card);

