import { TaskInterface } from "../../models/task.model"
export const Task = (task:TaskInterface,cb:Function):HTMLLIElement =>{

  const li = document.createElement('li')
  li.className = 'list-none flex justify-between items-center bg-zinc-800 m-2 p-2 py-4 rounded-xl hover:cursor-pointer transition-colors class="  "'

  const div = document.createElement('div')
  div.className =' class=" w-3/4 pr-2 break-all "'

  const span = document.createElement('span')
  span.innerText = task.title

  const p = document.createElement('p')
  p.innerText = task.description

  div.append(span,p)

  const btn = document.createElement('button')
  btn.className = ' bg-red-500 w-1/5 md:h-12 px-3 rounded-md hover:bg-red-600 transition-colors duration-300 class=" w-2/6 h-8 " '
  btn.innerText = 'Delete'

  btn.addEventListener('click',()=> {
    cb(task.id)
    li.remove()
  })


  li.append(div,btn)

  return li
}