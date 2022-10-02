import './style.css'
import {Form} from './components/Form'
import {TaskList} from './components/List'
import { Task } from './models/task.model'


const tasks:Task[] = []

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='bg-slate-700 w-1/2 p-10 rounded-md ' >
    <h1 class='text-2xl'>Tasks</h1>
    ${Form()}
  </div>

  ${TaskList()}
`

const taskForm = document.querySelector<HTMLFormElement>('#taskForm')
// const taskList = document.querySelector<HTMLDivElement>('#taskList')

taskForm?.addEventListener('submit',(e)=>{
  e.preventDefault()
  const title = taskForm['title'] as unknown as HTMLInputElement
  const description = taskForm['description'] as unknown as HTMLTextAreaElement

  tasks.push({
    title: title.value,
    description: description.value
  })

  localStorage.setItem('task', JSON.stringify(tasks))
})