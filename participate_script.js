// Function to set the participateTyp type
function setParticipateType(type) {
    participateType = type; // Update the  participateTyp variable with the provided type
}

// Variable to track if the second form part has been displayed
let formPart2Displayed = false;

// Function to select participateTyp type
function selectParticipateType(type) {
    // Remove selected class from all buttons
    document.getElementById('volunteerButton').classList.remove('selected');
    document.getElementById('fundraiseButton').classList.remove('selected');
    document.getElementById('notSureButton').classList.remove('selected');

    // Add selected class to the clicked button
    if (type === 'volunteer') {
        document.getElementById('volunteerButton').classList.add('selected');
        document.getElementById('volunteerText').classList.remove('hidden');
        document.getElementById('fundraiseText').classList.add('hidden');
        document.getElementById('notSureText').classList.add('hidden');
    } else if (type === 'fundraise') {
        document.getElementById('fundraiseButton').classList.add('selected');
        document.getElementById('fundraiseText').classList.remove('hidden');
        document.getElementById('volunteerText').classList.add('hidden');
        document.getElementById('notSureText').classList.add('hidden');
    } else if (type === 'not-sure') {
        document.getElementById('notSureButton').classList.add('selected');
        document.getElementById('notSureText').classList.remove('hidden');
        document.getElementById('fundraiseText').classList.add('hidden');
        document.getElementById('volunteerText').classList.add('hidden');
    }

    // Show the next button only if the second form part hasn't been displayed yet
    if (!formPart2Displayed) {
        document.getElementById('nextButton').classList.remove('hidden');
    }

    // Set participate type
    setParticipateType(type);

    // Scroll to a fixed position
    window.scrollTo({ top: 10 * window.innerWidth / 100, behavior: 'smooth' });
}

// Event listener to run JavaScript code after the HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with the id "participateForm"
    const participateForm = document.getElementById('participateForm');

    // Prevent the default form submission behavior when the form is submitted
    participateForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    // Add event listeners to the participate type buttons
    document.getElementById('volunteerButton').addEventListener('click', function() {
        selectParticipateType('volunteer');
    });

    document.getElementById('fundraiseButton').addEventListener('click', function() {
        selectParticipateType('fundraise');
    });

    document.getElementById('notSureButton').addEventListener('click', function() {
        selectParticipateType('not-sure');
    });

});

// Function to proceed to the next part of the form
function proceedToNext() {
    // Log the selected participation type
    console.log('Participation Type:', participateType);

    // If the second form part has already been displayed, return
    if (formPart2Displayed) {
        return;
    }

    // Hide the next button
    document.getElementById('nextButton').classList.add('hidden');

    // Adjust the margins of form sections
    document.querySelector('.participate_section2').style.marginTop = '77vw';
    document.querySelector('.participate_section3').style.marginTop = '128vw';
    document.querySelector('.participate_section4').style.marginTop = '165vw';
    document.querySelector('.participate_footer').style.marginTop = '208vw';
    
    // Show the second part of the form
    setTimeout(function() {
        document.querySelector('.participate_form_part2').classList.remove('hidden');
        // Update the flag to indicate that the second form part has been displayed
        formPart2Displayed = true;
    }, 200); // Adjust timing to match CSS animation duration
    
    // Scroll to a fixed position
    window.scrollTo({ top: 28 * window.innerWidth / 100, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    // Select the donation form element
    const form = document.getElementById('participateForm2');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from form inputs
        const firstName = form.querySelector('#donationForm2_firstName').value;
        const lastName = form.querySelector('#donationForm2_lastName').value;
        const number = form.querySelector('#donationForm2_number').value;
        const email = form.querySelector('#donationForm2_email').value;

        // Check if any of the fields are empty
        if (!firstName || !lastName || !number || !email) {
            // Show an alert if any field is empty
            alert('Please fill in all fields.');
            // Exit the function early if any field is empty
            return;
        }

        // If all fields are filled, show the success message
        showSuccessMessage(firstName);

        // Adjust the margins of the sections after the forms
        document.querySelector('.participate_section2').style.marginTop = '60vw';
        document.querySelector('.participate_section3').style.marginTop = '111vw';
        document.querySelector('.participate_section4').style.marginTop = '148vw';
        document.querySelector('.participate_footer').style.marginTop = '191vw';
    });
});

// Function to show success message
function showSuccessMessage(firstName) {
    // Create the success message
    const message = `Thank you ${firstName} for taking action!`;

    // Display the message
    const successMessage = document.getElementById('successMessage');
    successMessage.textContent = message;
    successMessage.style.display = 'block';

    // Hide the forms
    document.getElementById('participate_form_part1').classList.add('hidden');
    document.getElementById('participate_form_part2').classList.add('hidden');

    // Scroll to a fixed position
    window.scrollTo({ top: 28 * window.innerWidth / 100, behavior: 'smooth' });
}


document.querySelectorAll('.donate_form_part2 input').forEach(function(input) {
    input.addEventListener('input', function(e) {
        var target = e.target;
        var value = target.value.trim(); // Trim whitespace
        
        // Allow only characters for name inputs
        if (target.id === 'donationForm2_firstName' || target.id === 'donationForm2_lastName') {
            value = value.replace(/[^a-zA-Z]/g, ''); // Replace any non-alphabetical characters with empty string
        }

        // Restrict 'donationForm2_number' to numbers
        if (target.id === 'donationForm2_number') {
            // Remove non-numeric characters
            value = value.replace(/\D/g, '');

            // Limit to 11 numbers
            if (value.length > 11) {
                // If more than 11 characters, truncate to first 11 characters
                value = value.slice(0, 11);
            }
        }

        target.value = value;
    });
});