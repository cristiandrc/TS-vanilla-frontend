import './style.css'
import {Form} from './components/Form'
import {TaskList} from './components/List'
import { TaskInterface } from './models/task.model'
import {Task} from './components/Task'
import {v4} from 'uuid'


let tasks:TaskInterface[] = []

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='bg-slate-700 w-1/2 p-10 rounded-md ' >
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
})


document.addEventListener("DOMContentLoaded",()=>{
  tasks = JSON.parse(localStorage.getItem('task') || "[]")
  renderTask(tasks)
})


const deleteTask = (id:string) => {
  const newTask = tasks.filter((e)=> e.id !== id)
  tasks = newTask

  localStorage.setItem('task', JSON.stringify(tasks))

  console.log(newTask)
}

const renderTask = (item:TaskInterface[]) => {
  item.map((e)=>{
      taskList!.append(Task(e,deleteTask))
  })
}

const addTask = (task:TaskInterface) => {
  taskList!.append(Task(task,deleteTask))
}