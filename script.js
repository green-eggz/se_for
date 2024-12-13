const nameInput = document.getElementById('nameInput'); // Get reference to the input field
const greetingParagraph = document.getElementById('greeting'); // Get reference to the greeting paragraph

const form = document.getElementById('nameForm'); // Get the reference to the form element 
form.addEventListener('submit', function(event) { // Listen for the submit even (when the user clicks the submit button)
    event.preventDefault(); // Prevent the page from reloading when the form is submitted
    
    const name = nameInput.value; // Get the value entered in the input field
    
    greetingParagraph.textContent = `Hello, ${name}!`;   // Display greeting based on what name has been entered
    
    nameInput.value = '';  // Clear the input field after submitting
});
