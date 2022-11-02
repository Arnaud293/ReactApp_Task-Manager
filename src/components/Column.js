import React from 'react';
import Task from './Task';

const Column = ({column, tasks}) => {
    return (
        <div className='tasks-column'>
            <h2>{column.title}</h2>
            {tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index}/>
            ))}
        </div>
    );
};

export default Column;