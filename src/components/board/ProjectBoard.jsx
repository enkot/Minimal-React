import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import store from './../store';

const ProjectBoard = ({todos, move, remove}) => {
    const card = status => <ProjectCard status={status} key={status} todos={todos} move={move} remove={remove}/>;
    const board = store.status.map(card);
  
    return (
        <div className="project-board">
            {board}
        </div>
    );
};

export default ProjectBoard;