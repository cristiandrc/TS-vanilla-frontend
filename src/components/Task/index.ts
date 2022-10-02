import { TaskInterface } from "../../models/task.model"
export const Task = (task:TaskInterface,cb:Function):HTMLLIElement =>{

  const li = document.createElement('li')
  li.className = 'list-none flex justify-between bg-zinc-800 m-2 p-2 py-4 rounded-xl hover:cursor-pointer transition-colors'

  const div = document.createElement('div')

  const span = document.createElement('span')
  span.innerText = task.title

  const p = document.createElement('p')
  p.innerText = task.description

  div.append(span,p)

  const btn = document.createElement('button')
  btn.className = ' bg-red-500 w-auto px-3 rounded-md hover:bg-red-600 transition-colors duration-300'
  btn.innerText = 'Delete'

  btn.addEventListener('click',()=> {
    cb(task.id)
    li.remove()
  })


  li.append(div,btn)

  return li
}