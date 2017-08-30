import React from 'react';
import { connect } from 'react-redux';
import { changeTaskStatus, removeTask } from '../actions';
import Card from './Card';

const List = ({ 
    status, 
    children, 
    tasks,
    changeStatus,
    remove
}) => (
    <div className={`list ${status.toLowerCase()}-list`}>
        <h5>{children} <span>{tasks.length}</span></h5>

        {tasks.map((task) => 
            <Card 
                key={task.id}
                {...task}
                onChangeClick={changeStatus}
                onRemoveClick={remove}
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
        changeStatus: (id) => {
            dispatch(changeTaskStatus(id));
        },
        remove: (id) => {
            dispatch(removeTask(id));
        }
    };
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(List);

