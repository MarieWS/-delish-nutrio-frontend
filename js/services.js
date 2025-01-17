document.addEventListener('DOMContentLoaded', function() {
    const services = [
        { 
            title: 'Personalized Meal Plans', 
            description: 'Tailored to your dietary needs, preferences, and goals.', 
            image: 'images/meal-plan.png' 
        },
        { 
            title: 'Delicious & Easy Recipes', 
            description: 'Quick and simple recipes for busy lifestyles.', 
            image: 'images/recipe-book.png' 
        },
        { 
            title: 'Nutritional Guidance', 
            description: 'Expert advice from our registered dietitians.', 
            image: 'images/nutritionist.png' 
        },
        { 
            title: 'Access to Healthy Foods', 
            description: 'Partnered with local farms and markets.', 
            image: 'images/local-produce.png' 
        }
    ];

    const servicesList = document.getElementById('services-list');

    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.classList.add('service-item');

        const serviceImage = document.createElement('img');
        serviceImage.src = service.image;
        serviceImage.alt = service.title;

        const serviceTitle = document.createElement('h3');
        serviceTitle.textContent = service.title;

        const serviceDescription = document.createElement('p');
        serviceDescription.textContent = service.description;

        serviceItem.appendChild(serviceImage);
        serviceItem.appendChild(serviceTitle);
        serviceItem.appendChild(serviceDescription);

        servicesList.appendChild(serviceItem);
    });
});
