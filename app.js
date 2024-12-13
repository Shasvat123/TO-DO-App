// Select DOM elements for interaction
const inputField = document.querySelector('.inp'); // Input field for entering tasks
const addButton = document.getElementById('butt'); // Button to add a new task
const taskList = document.getElementById('list-container'); // UL container for tasks

// Function to add a new task
addButton.addEventListener('click', () => {
  const taskText = inputField.value.trim(); // Get the input value and trim any extra spaces
  
  if (taskText === '') {
    alert('Please enter a task!'); // Alert if input is empty
    return;
  }

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = taskText; // Set the task text

  // Create a "Delete" button for the task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'del-btn'; // Assign class for styling
  deleteButton.addEventListener('click', () => listItem.remove()); // Add delete functionality
  
  // Append the delete button to the list item
  listItem.appendChild(deleteButton);

  // Add the new task to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  inputField.value = '';
});

// Functionality to toggle the "completed" state when a task is clicked
taskList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed'); // Toggle "completed" class for styling
  }
});

// Functionality to delete pre-existing tasks
const existingDeleteButtons = document.querySelectorAll('.del-btn');
existingDeleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.remove(); // Remove the parent list item
  });
});
