import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../config/data';
import Column from './Column';

const Tasks = () => {

    const [data, setData] = useState(initialData);

    const onDragEnd = result => {
        const { destination, source, draggableId} = result;

        // If elements are moving outside of the column or at the same place return null
        if(!destination){
            return null;
        }
        if(destination.droppableId === destination.droppableId && destination.index === source.index){
            return null;
        }
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