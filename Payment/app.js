// Add this JavaScript for the popup functionality
document.addEventListener('DOMContentLoaded', function () {
    let popup = document.getElementById('popup');
    let paymentForm = document.querySelector('.payment-form');
    let okButton = popup.querySelector('button');

    function openPopup() {
        // Add a 1.5-second delay before showing the popup
        setTimeout(() => {
            popup.classList.add('open-popup');
        }, 1500); // 1500 milliseconds = 1.5 seconds
    }

    function closePopup() {
        popup.classList.remove('open-popup');
    }

    paymentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        openPopup();
        // You can add additional logic here, such as submitting the form data via AJAX
    });

    okButton.addEventListener('click', function () {
        // Redirect to a different page when "OK" button is clicked
        window.location.href = '/Home page/index.html'; // Replace with your desired URL
    });
});
