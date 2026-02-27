// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(event.target);
    const data = {};

    // Validate form data
    for (const [key, value] of formData.entries()) {
        if (!value) {
            alert(`Please fill out the ${key} field.`);
            return;
        }
        data[key] = value;
    }

    // Save data to local storage
    localStorage.setItem('formData', JSON.stringify(data));
    alert('Data saved successfully!');
}

// Attach event listener to the form
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleSubmit);
}