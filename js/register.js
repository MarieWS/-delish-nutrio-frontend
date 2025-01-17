document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const firstName = registerForm.elements['firstname'].value;
        const lastName = registerForm.elements['lastname'].value;
        const username = registerForm.elements['username'].value;
        const phoneNumber = registerForm.elements['phone_number'].value;
        const email = registerForm.elements['email'].value;
        const password = registerForm.elements['password'].value;
        const confirmPassword = registerForm.elements['confirmPassword'].value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        
        fetch('https://techcrushbackend-85eulpiau-maries-projects-0395c141.vercel.app/api/register/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, username, phoneNumber, email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = 'accountcreationsuccess.html';
            } else {
                alert('Registration failed. Please try again.');
            }
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred. Please try again.');
        });
    });
});
