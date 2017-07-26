import React from 'react';
import ProjectTask from './ProjectTask.jsx';

const ProjectCard = ({status, todos, move, remove}) => {
	const task = todo => <ProjectTask todo={todo} key={todo.id} move={move} remove={remove}/>;
    const list = todos.filter(todo => todo.status === status).map(task);

    return (
        <div className={`card ${status}-card`}>
            <h5>{status.toUpperCase()} <span>{list.length}</span></h5>
            {list}
        </div>
    );
};

export default ProjectCard;