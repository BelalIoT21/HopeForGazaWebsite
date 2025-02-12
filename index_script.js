function toggleMenu() {
    // Select the menu, toggler, menu text, and rounded block elements
    const menu = document.querySelector('.menu'); // Select the menu element
    const toggler = document.querySelector('.menu__toggler'); // Select the toggler element
    const menuText = document.getElementById('menuText'); // Select the menu text element
    const overlay = document.querySelector('.overlay'); // Select the overlay element

        // If the menu is currently active (open)
        if (menu.classList.contains('active')) {
            // Remove 'active' class from menu, toggler, and overlay
            menu.classList.remove('active');
            toggler.classList.remove('active');
            overlay.classList.remove('active');
            // Set text to 'Menu' when closing
            menuText.textContent = 'Menu';
            // Remove class to disable scrolling when overlay is active
            document.body.classList.remove('overlay-active');

        } else {
            // If the menu is not active (closed)
            // Add 'active' class to menu, toggler, and overlay
            menu.classList.add('active');
            toggler.classList.add('active');
            overlay.classList.add('active');
            // Set text to 'Close' when opening
            menuText.textContent = 'Close';
            // Add class to disable scrolling when overlay is active
            document.body.classList.add('overlay-active');
        }
    }

// JavaScript function to show the menu toggler after scrolling down //
window.addEventListener('scroll', function() {
    var header1 = document.querySelector('.header_block1');
    var toggler = document.getElementById('menuToggler');

    // Get the height of the rounded block
    var header1Height = header1.offsetHeight;

    // Get the vertical scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Check if the scroll position is beyond the rounded block
    if (scrollPosition > header1Height) {
        toggler.classList.remove('hidden');
    } else {
        toggler.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const form = document.getElementById('emailListForm');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from form inputs
        const firstName = form.querySelector('input[name="mailList_firstName"]').value;
        const lastName = form.querySelector('input[name="mailList_lastName"]').value;
        const email = form.querySelector('input[name="mailList_email"]').value;

        // Check if any of the fields are empty
        if (!firstName || !lastName || !email) {
            // Show an alert if any field is empty
            alert('Please fill in all fields.');
            // Exit the function early if any field is empty
            return;
        }

        // Create the success message
        const message = `Thank you ${firstName} ${lastName}. You have successfully subscribed to our mailing list.`;

        // Display the message in an alert
        alert(message);

        // Reset the form
        form.reset();
    });
});