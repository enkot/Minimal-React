import React from 'react';

const ProjectTitle = ({todoCount}) => {
    return (
        <div className="project-info">
            <p>There are {todoCount} tasks on boards</p>
            <span>Type task description and member name. Click on task to change board</span>
        </div>
    );
};

export default ProjectTitle;