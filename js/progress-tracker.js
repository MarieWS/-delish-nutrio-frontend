document.addEventListener('DOMContentLoaded', function() {
    const progress1 = document.getElementById('progress1');
    const progress2 = document.getElementById('progress2');

    // Example of updating progress dynamically
    setTimeout(() => {
        progress1.value = 85;
        progress2.value = 60;
    }, 2000);
});
