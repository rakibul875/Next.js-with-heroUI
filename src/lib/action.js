'use server'

import { revalidatePath } from "next/cache"
import { displayTasks } from "./tasks"

export const handelTask= async(fromData)=>{

    const newTasks=Object.fromEntries(fromData.entries())

  const res= await displayTasks(newTasks)

   if(res.ok){
    revalidatePath('/tasks')
   }
    
    return res
}