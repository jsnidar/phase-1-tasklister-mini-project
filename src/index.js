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
submitButton.addEventListener('click', function (e) {
  let li = document.createElement('li');
  listLocation.appendChild(li);
  listLocation.lastChild.innerHTML = descField.value + '<input type="checkbox" name="taskChecker"></input>'
  console.log(listLocation);
})   

listLocation.addEventListener('click', function (e) {
  for(let li of listLocation) {
    if (li.value === 'on') {
      li.remove()
    }
  }
})

});

