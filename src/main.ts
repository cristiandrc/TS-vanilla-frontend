import './style.css'
import {Form} from './components/Form'
import {TaskList} from './components/List'
import { TaskInterface } from './models/task.model'
import {Task} from './components/Task'


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

  tasks.push({
    title: title.value,
    description: description.value
  })

  localStorage.setItem('task', JSON.stringify(tasks))
  addTask({
    title: title.value,
    description: description.value
  })
})


document.addEventListener("DOMContentLoaded",()=>{
  tasks = JSON.parse(localStorage.getItem('task') || "[]")
  renderTask(tasks)
})

const renderTask = (item:TaskInterface[]) => {
  item.map((e)=>{
      taskList!.innerHTML += Task(e)
  })
}

const addTask = (task:TaskInterface) => {
  taskList!.innerHTML += Task(task)
}