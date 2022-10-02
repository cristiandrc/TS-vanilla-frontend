import './style.css'
import "toastify-js/src/toastify.css"

import {Form} from './components/Form'
import {TaskList} from './components/List'
import { TaskInterface } from './models/task.model'
import {Task} from './components/Task'
import {v4} from 'uuid'
import Toastify from 'toastify-js'


let tasks:TaskInterface[] = []

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='bg-slate-700 md:w-1/2 md:p-10 p-5 w-full max-w-xs rounded-md ' >
    <h1 class='text-2xl'>Tasks</h1>
    ${Form()}
  </div>

  ${TaskList()}
`

const taskForm = document.querySelector<HTMLFormElement>('#taskForm')
const taskList = document.querySelector<HTMLDivElement>('#taskList')

taskForm?.addEventListener('submit',(e)=>{
  e.preventDefault()
  const title = taskForm['title'] as unknown as HTMLInputElement
  const description = taskForm['description'] as unknown as HTMLTextAreaElement

  if(!title.value || !description.value){
    title.placeholder = 'Please type a Title'
    description.placeholder = 'Please type a Description'

    title.className = 'placeholder-red-600 bg-gray-800 p-2 rounded-md'
    description.className = 'placeholder-red-600 bg-gray-800 p-2 rounded-md'
    return
  }

  const newTask = {
    title: title.value,
    description: description.value,
    id: v4()
  }

  tasks.push(newTask)

  localStorage.setItem('task', JSON.stringify(tasks))

  addTask(newTask)

  title.value = ''
  description.value = ''
  title.placeholder = 'Write a title'
  description.placeholder = 'Write a Description'
  title.className = ' bg-gray-800 p-2 rounded-md'
  description.className = ' bg-gray-800 p-2 rounded-md'
})


document.addEventListener("DOMContentLoaded",()=>{
  tasks = JSON.parse(localStorage.getItem('task') || "[]")
  renderTask(tasks)
})


const deleteTask = (id:string) => {
  const newTask = tasks.filter((e)=> e.id !== id)
  tasks = newTask

  localStorage.setItem('task', JSON.stringify(tasks))

  Toastify({
    text: "Task deleted",
    className: "info",
    style: {
      background: "linear-gradient(to right, #d7816a , #bd4f6c)",
    }
  }).showToast();
}

const renderTask = (item:TaskInterface[]) => {
  item.map((e)=>{
      taskList!.append(Task(e,deleteTask))
  })
}

const addTask = (task:TaskInterface) => {
  taskList!.append(Task(task,deleteTask))
  Toastify({
    text: "Task added",
    className: "warning",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();
}

