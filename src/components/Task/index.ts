import { TaskInterface } from "../../models/task.model"
export const Task = (task:TaskInterface):string =>{

  return `
    <li class='list-none flex justify-between bg-zinc-800 m-2 p-2 py-4 rounded-xl hover:cursor-pointer transition-colors '>
      <div>
        <span>${task.title}</span>
        <p>${task.description}</p>
      </div>
      <button class='bg-red-500 w-auto px-3 rounded-md hover:bg-red-600 transition-colors duration-300'>Delete</button>
    </li>
  `
}