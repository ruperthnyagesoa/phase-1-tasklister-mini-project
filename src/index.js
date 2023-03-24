document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildList(e.target.new_task.value)
    // Reset Form Here!!
    form.reset()
  })
})

// Function to build out To-DO
const buildList = (todo) => {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.style.backgroundColor = 'red'
  btn.addEventListener('click', deleteHandler)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function deleteHandler(e) {
  e.target.parentNode.remove()
}

function sortList(e) {
  e.target.parentNode.sort()
}