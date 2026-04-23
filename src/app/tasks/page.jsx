import { getTasksData } from '@/lib/tasks';
import React from 'react';

const page = async () => {
    const tasksData= await getTasksData()
    return (
        <div>
            <h1>Tasks:{tasksData.length}</h1>
        </div>
    );
};

export default page;