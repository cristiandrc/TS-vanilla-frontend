// import { TaskItem } from "../Task"
export const TaskList = ():string =>{


  // ${TaskItem([{title:'hol', description:'asdf'}])}
  return `
    <div class='bg-zinc-700 py-2 w-3/4 h-4/6 rounded-md '>
    <ul id='taskList' class=' h-full  overflow-auto'>
    </ul>
    </div>
  `
}