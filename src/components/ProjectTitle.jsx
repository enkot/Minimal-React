import React from 'react';

const ProjectTitle = ({todoCount}) => {
	return (
		<div>
			<h5>There are {todoCount} tasks on boards</h5>
			<p>Type some text and press Enter. Click on task to change board</p>
		</div>
	);
};

export default ProjectTitle;