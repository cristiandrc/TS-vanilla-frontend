import './style.css'
export const Form = ():string => `
  <form>
    <label class"bg-red" for="title">Title</label>
    <input type="text" name="title" placeHolder="Write a title"/>

    <label for="description">Description:</label>
    <textarea name="description" row="3" name="description" placeholder="Write a description"></textarea>

    <button >save </button>
  </form>
` 