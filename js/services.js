document.addEventListener('DOMContentLoaded', function() {
    const services = [
        { title: 'Service 1', description: 'Description for service 1' },
        { title: 'Service 2', description: 'Description for service 2' },
        { title: 'Service 3', description: 'Description for service 3' },
        // Add more services as needed
    ];

    const servicesList = document.getElementById('services-list');
    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');

        const serviceTitle = document.createElement('h2');
        serviceTitle.textContent = service.title;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        serviceItem.appendChild(serviceTitle);
        serviceItem.appendChild(serviceDescription);

        servicesList.appendChild(serviceItem);
    });
});
