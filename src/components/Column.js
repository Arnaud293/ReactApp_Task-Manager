import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({column, tasks}) => {
    return (
        <div className='tasks-column'>
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
                {provider => (
                    <div {...provider.droppableProps}
                    ref={provider.innerRef}
                    className='tasks-list'>
                
                {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index}/>
                ))}
                </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;