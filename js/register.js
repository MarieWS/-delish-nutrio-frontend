import { backendServer } from "./global_variables.js";

const form = document.getElementById('register-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData);

  try {
    const response = await fetch(`${backendServer}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataObject),
    });

    if (response.ok) {
      window.alert('User Registered Successfully');
      window.location.href = './verification.html'; 
    } else {
      const data = await response.json(); 
      if (data.message) {
        alert(data.message); 
      } else if (data.errors) {
        data.errors.forEach(error => {
          const errorElement = document.getElementById(`${error.path}_error`);
          if (errorElement) {
            errorElement.textContent = error.msg;
          }
        });
      } else {
        alert('An error occurred during registration.');
      }
    }

  } catch (error) {
    alert('An error occurred during registration.');
  }
});
