import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Board = () => (
    <div className="project-board">
        <Card status="TODO"> 
            Todo tasks
        </Card>
        <Card status="DOING"> 
            Doing tasks
        </Card>
        <Card status="DONE"> 
            Done tasks
        </Card>
    </div>
);

export default Board;