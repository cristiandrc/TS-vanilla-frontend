import './style.css'
import {Form} from './components/Form'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1 class='text-white'>Tasks</h1>
  ${Form()}
`

