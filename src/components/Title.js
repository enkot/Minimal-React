import React from 'react';
import { connect } from 'react-redux';

const Title = ({ taskCount }) => (
    <div className="project-info">
        <h1>Trololo Board</h1>
        <p>There are {taskCount} tasks on boards</p>
        <span>Type task description and member name. Click on task to move to another board.</span>
    </div>
);

const mapStateToProps = (state) => {
    return { 
        taskCount: state.length
    };
};

export default connect(mapStateToProps)(Title);