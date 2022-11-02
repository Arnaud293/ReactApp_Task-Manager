import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../config/data';
import Column from './Column';

const Tasks = () => {

    const [data, setData] = useState(initialData);

    const onDragEnd = () => {
        
    }

    return (
        <div className='tasks'>
            <DragDropContext onDragEnd={onDragEnd}>
            {data.columnsOrder.map(columnId =>{
                const column = data.columns[columnId];
                const tasks = column.taskIds.map(taskId => data.tasks[taskId]) 

                return <Column key={column.id} column={column} tasks={tasks}/>
            })}
            </DragDropContext>

            
        </div>
    );
};

export default Tasks;