import React from 'react';
import Title from './Title';
import AddTask from './AddTask';
import Board from './Board';
import './App.css';

const App = () => (
    <div>
        <Title />
        <AddTask />
        <Board />
    </div>
);

export default App;