import './style.css'
export const Form = ():string => {
  return `
  <form class="flex flex-col justify-center align-middle w-300">

    <label class"bg-red" for="title" class='block pt-3' >Title</label>
    <input id='title' type="text" name="title" placeHolder="Write a title"
      class='bg-gray-800 p-2 rounded-md'
    />

    <label for="description" class='block pt-3'>Description:</label>
    <textarea id='description' name="description" row="3" name="description" placeholder="Write a description"
      class='bg-gray-800 p-2 rounded-md'
    ></textarea>

    <button class='mt-5 bg-blue-600 hover:bg-blue-500 w-32 h-10 mx-auto rounded-md font-semibold text-xl' >save </button>
  </form>
` }