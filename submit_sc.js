document.getElementById('numberForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const numberInput = document.getElementById('numberInput');
    const errorMessage = document.getElementById('error-message');
    const numberValue = parseFloat(numberInput.value);
  
    if (numberValue <= 10) {
      errorMessage.textContent = 'Please enter a number greater than 10.';
    } else {
      errorMessage.textContent = '';
      alert('Form submitted successfully!');
      numberInput.value = ''; // Clear input after successful submission
    }
  });
  