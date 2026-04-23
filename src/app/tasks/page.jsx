import AddTasks from '@/components/AddTasks';
import TasksCard from '@/components/TasksCard';
import { getTasksData } from '@/lib/tasks';
import React from 'react';

const page = async () => {
    const tasksData= await getTasksData()
    return (
        <div>
            <h1>Tasks:{tasksData.length}</h1>
            <div className="flex justify-center my-5 container mx-auto">

            <AddTasks/>
            </div>
            <div className="grid grid-cols-3 gap-5 container mx-auto my-10">
                {
                    tasksData.map(task=> <TasksCard key={task.id} task={task}/>)
                }
            </div>
        </div>
    );
};

export default page;