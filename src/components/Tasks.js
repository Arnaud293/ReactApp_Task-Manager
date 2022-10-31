import React, { useState } from 'react';
import initialData from '../config/data';
import Column from './Column';

const Tasks = () => {

    const [data, setData] = useState(initialData);

    return (
        <div className='tasks'>

            {data.columnOrder.map(columnId =>{
                const column = data.column[columnId];
                const tasks = column.taskIds.map(taskId => data.tasks[taskId]) 

                return <Column key={column.id} column={column} tasks={tasks}/>
            })}

            
        </div>
    );
};

export default Tasks;