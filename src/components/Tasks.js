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

        const start = data.columns[source.droppableId];
        const finish = data.columns[destination.droppableId];

        if(start === finish){

            // If elements are correctly move into an another place
            const column = data.columns[source.droppableId];
            const newTasksId = Array.from(column.taskIds);
            newTasksId.splice(source.index, 1);
            newTasksId.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...column,
                taskIds: newTasksId,
            }
            const newState = {
                ...data,
                columns: {
                    ...data.columns,
                    [newColumn.id] : newColumn,
                },
                
            }

            setData(newState);
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds : startTaskIds
        }

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index,0, draggableId);
        const newFinish = {
            ...finish,
            taskIds : finishTaskIds
        }

        const newState = {
            ...data,
            columns: {
                ...data.columns,
                [newStart.id] : newStart,
                [newFinish.id] : newFinish,
            },
            
        }

        setData(newState);

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