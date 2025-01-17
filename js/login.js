import { backendServer } from "./global_variables.js"; 

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginResponse = document.querySelector('.login-response');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        loginResponse.textContent = ''; 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch(`${backendServer}/api/login`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed. Please check your credentials.'); 
            }

            // Handle successful login (e.g., redirect to dashboard)
            window.location.href = '/dashboard'; 

        } catch (error) {
            loginResponse.classList.add('error'); 
            loginResponse.textContent = error.message; 
        }
    });
});
