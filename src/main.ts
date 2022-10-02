import './style.css'
import {Form} from './components/Form'
import {TaskList} from './components/List'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class='bg-slate-700 w-1/2 p-10 rounded-md ' >
    <h1 class='text-2xl'>Tasks</h1>
    ${Form()}
  </div>

  ${TaskList()}
`

