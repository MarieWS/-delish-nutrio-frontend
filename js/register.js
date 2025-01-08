const form = document.getElementById('register-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData);

    const options = {
        method: 'POST',
        body: JSON.stringify(data),
    }

    fetch('http://delish-nutrio.onrender.com/api/register', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {  
            console.log('Success:', data);  
        })  
        .catch(error => {  
            console.error('Error:', error);  
        }); 
})