import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({column, tasks}) => {
    return (
        <div className='tasks-column'>
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
                {provided => (
                    <div {...provided.droppableProps}
                    ref={provided.innerRef}
                    className='tasks-list'
                    >
                
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