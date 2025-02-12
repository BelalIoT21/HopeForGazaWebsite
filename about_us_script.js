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