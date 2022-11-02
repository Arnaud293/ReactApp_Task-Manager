import React from 'react';

const Task = ({task, index}) => {
    return (
        <div className='task-item'>
            {task.content}
        </div>
    );
};

export default Task;