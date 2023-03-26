// Select all the buttons and input element
const buttons = document.querySelectorAll('button');
const input = document.querySelector('#display');

// Add click event listener to all the buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the value of the button clicked
    const buttonValue = button.value;

    if (buttonValue === '=') {
      // If equal to button is clicked, calculate and set the result to input field
      input.value = eval(input.value);
    } else if (buttonValue === 'C') {
      // If clear button is clicked, clear the input field
      input.value = '';
    } else {
      // Append the button value to the input field
      input.value += buttonValue;
    }
  });
});