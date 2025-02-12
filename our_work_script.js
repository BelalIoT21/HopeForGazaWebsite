// JavaScript function to show the header block after scrolling down //
window.addEventListener('scroll', function() {
    var header2 = document.querySelector('.header_block2');
    var header3 = document.querySelector('.header_block3');

    // Get the height of the rounded block
    var header2Height = header2.offsetHeight;

    // Get the vertical scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Check if the scroll position is beyond the rounded block
    if (scrollPosition > header2Height) {
        header3.classList.remove('hidden');
    } else {
        header3.classList.add('hidden');
    }
});

// Function to navigate to the participate_page.html and scroll down after navigation
function navigateAndScroll() {
    // Navigate to the participate_page.html page
    window.location.href = 'participate_page.html?scroll=true';
}

// Function to scroll down
function scrollDown() {
    // Scroll to a fixed position
    window.scrollTo({ top: 102 * window.innerWidth / 100, behavior: 'smooth' });
}

// Function to reset the 'scroll' parameter
function resetScrollParameter() {
    // Modify the URL to remove the 'scroll' parameter
    history.replaceState(null, null, window.location.pathname);
}

// Listen for the window's onload event
window.onload = function() {
    // Parse the query string of the current URL
    const urlParams = new URLSearchParams(window.location.search);
    // Check if 'scroll' parameter is present and set to 'true'
    if (urlParams.get('scroll') === 'true') {
        scrollDown();
        // Reset the 'scroll' parameter after activating the function
        resetScrollParameter();
    }
};

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