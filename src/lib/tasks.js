import tasks from '../data/task.json'

export const getTasksData = async()=>{
    return tasks
}
export const displayTasks=async(newTasks)=>{
    newTasks.id=tasks.length+1
    tasks.push(newTasks)
  return {ok:true,message:"newTasks push successfully"}
}