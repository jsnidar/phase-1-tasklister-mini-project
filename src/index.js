document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //prevent submit from carrying out its default action using preventDefaul()
  const submitButton = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)")
  submitButton.addEventListener('click', e => e.preventDefault())
  // As a user, I should be able to type a task into the input field.
  let descField = document.getElementById('new-task-description');
  let listLocation = document.getElementById('tasks');
  descField.addEventListener('text', function (e) {
      descField = e
      
  })
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
let buttonNum = 0
let liNum =  0

const subBtn = submitButton.addEventListener('click', function (e) {
  liNum++
  let li = document.createElement(`li`);
  listLocation.appendChild(li);
  listLocation.lastChild.id = `li${liNum}`
  buttonNum++
  newButton = `<button type="button" id = btn${buttonNum} >x</button>`
  newBtnId = '.#btn' + buttonNum.toString()
  const priority = `<label for="new-task-priority"></label>
    <select id = drp${buttonNum} name="priority">
      <option value="">Select One …</option>
      <option value="high">High Priority</option>
      <option value="med">Medium Priority</option>
      <option value="low">Low Priority</option>
    </select>
    <div class="result"></div>`
  listLocation.lastChild.innerHTML = descField.value +  newButton + priority
  
  document.getElementById(`drp${buttonNum}`).addEventListener('change', function (e) { 
    
    if (e.target.value === 'high') {
      e.target.parentNode.style.color = 'red'
  }else if(e.target.value == 'med') {
    e.target.parentNode.style.color = 'orange'
  }else if(e.target.value == 'low') {
    e.target.parentNode.style.color = 'green'}
  })

  document.getElementById(`btn${buttonNum}`).addEventListener('click', function (e) {
    console.log(e.target)
    e.target.parentNode.remove()
  
      })   
})   

}); 

