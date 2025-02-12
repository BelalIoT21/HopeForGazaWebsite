// Define the global variables and functions
let donationType = 'one-off'; // Default to 'one-off'
let donationAmount = 5; // Default to £5

// Function to set the donation type
function setDonationType(type) {
    donationType = type; // Update the donationType variable with the provided type
}

// Function to set the donation amount
function setDonationAmount(amount) {
    donationAmount = amount; // Update the donationAmount variable with the provided amount
}

// Function to select donation type
function selectDonationType(type) {
    // Remove selected class from all buttons
    document.getElementById('oneOffButton').classList.remove('selected');
    document.getElementById('monthlyButton').classList.remove('selected');

    // Add selected class to the clicked button
    if (type === 'one-off') {
        document.getElementById('oneOffButton').classList.add('selected');
    } else if (type === 'monthly') {
        document.getElementById('monthlyButton').classList.add('selected');
    }

    // Set donation type
    setDonationType(type);
}

// Function to toggle visibility of custom amount input
function toggleCustomAmount() {
    const customAmountInput = document.getElementById('customAmount');
    customAmountInput.classList.toggle('hidden'); // Toggle the 'hidden' class
}

// Function to select donation amount
function selectDonationAmount(amount) {
    // Remove selected class from all buttons
    document.getElementById('amount5Button').classList.remove('selected');
    document.getElementById('amount10Button').classList.remove('selected');
    document.getElementById('amount25Button').classList.remove('selected');
    document.getElementById('otherAmountButton').classList.remove('selected');

    // Add selected class to the clicked button
    if (amount === 5) {
        document.getElementById('amount5Button').classList.add('selected');
        // Hide the custom amount input if 'other' is not selected
        document.getElementById('customAmount').classList.add('hidden');
    } else if (amount === 10) {
        document.getElementById('amount10Button').classList.add('selected');
        // Hide the custom amount input if 'other' is not selected
        document.getElementById('customAmount').classList.add('hidden');
    } else if (amount === 25) {
        document.getElementById('amount25Button').classList.add('selected');
        // Hide the custom amount input if 'other' is not selected
        document.getElementById('customAmount').classList.add('hidden');
    } else if (amount === 'other') {
        document.getElementById('otherAmountButton').classList.add('selected');
        // Show the custom amount input
        document.getElementById('customAmount').classList.remove('hidden');
    }

    // Set donation amount
    setDonationAmount(amount);
}

// Function to handle the click event of the "Other" button
function selectOtherAmount() {
    // Call selectDonationAmount with 'other' as the amount
    selectDonationAmount('other');
}

// Event listener to run JavaScript code after the HTML document has been completely loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the form element with the id "donationForm"
    const donateForm = document.getElementById('donationForm');

    // Select the input element for custom donation amount
    const customAmountInput = document.getElementById('customAmount');

    // Prevent the default form submission behavior when the form is submitted
    donateForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    // Event listener to capture changes in the input value for custom donation amount
    customAmountInput.addEventListener('input', function(event) {
        // Update donationAmount variable when input value changes
        // Parse input value as integer or default to 0 if input is not a valid number
        setDonationAmount(parseInt(event.target.value) || 0);
    });

    // Add event listeners to the donation type buttons
    document.getElementById('oneOffButton').addEventListener('click', function() {
        selectDonationType('one-off');
    });

    document.getElementById('monthlyButton').addEventListener('click', function() {
        selectDonationType('monthly');
    });

    // Call the functions to select the default donation type and amount
    selectDonationType(donationType);
    selectDonationAmount(donationAmount);
});

// Function to proceed to the next form part
function proceedToNext() {
    // Log the selected donation type and amount
    console.log('Donation Type:', donationType);
    console.log('Donation Amount:', donationAmount);

    // Update the header text with the selected donation type and amount
    document.getElementById('donationHeader').textContent = `Donating £${donationAmount} ${donationType === 'one-off' ? 'One-off' : 'Monthly'} To General Fund`;

    // Hide form part 1
    document.querySelector('.donate_form_part1').classList.add('hidden');

    // Adjust the margin-top of .donate_section2 and .donate_footer
    document.querySelector('.donate_section2').style.marginTop = '72vw'; // Push down donate_section2
    document.querySelector('.donate_footer').style.marginTop = '115vw'; // Push down donate_footer
    
    // Show form part 2
    setTimeout(function() {
        document.querySelector('.donate_form_part2').classList.remove('hidden');
    }, 200); // Adjust timing to match CSS animation duration
    
    // Scroll to a fixed position
    window.scrollTo({ top: 23.5 * window.innerWidth / 100, behavior: 'smooth' });;
}

document.addEventListener('DOMContentLoaded', function() {
    // Select the donation form element
    const form = document.getElementById('donationForm2');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the values from form inputs
        const firstName = form.querySelector('#donationForm2_firstName').value;
        const lastName = form.querySelector('#donationForm2_lastName').value;
        const number = form.querySelector('#donationForm2_number').value;
        const email = form.querySelector('#donationForm2_email').value;
        const creditNumber = form.querySelector('#credit-number').value;
        const creditExpires = form.querySelector('#credit-expires').value;
        const creditCvc = form.querySelector('#credit-cvc').value;

        // Check if any of the fields are empty
        if (!firstName || !lastName || !number || !email || !creditNumber || !creditExpires || !creditCvc) {
            // Show an alert if any field is empty
            alert('Please fill in all fields.');
            // Exit the function early if any field is empty
            return;
        }

        // Create the success message
        const message = `Thank you ${firstName} ${lastName} for your donation of £${donationAmount}.`;

        // Display the message in an alert
        alert(message);

        // Reset the form
        form.reset();
    });
});

document.querySelectorAll('.donate_form_part2 input').forEach(function(input) {
    input.addEventListener('input', function(e) {
        var target = e.target;
        var value = target.value.trim(); // Trim whitespace
        
        // Allow only characters for name inputs
        if (target.id === 'donationForm2_firstName' || target.id === 'donationForm2_lastName') {
            value = value.replace(/[^a-zA-Z]/g, ''); // Replace any non-alphabetical characters with empty string
        }
        
        // Restrict 'credit-number' to numbers
        if (target.id === 'credit-number') {
            // Remove any non-numeric characters
            value = value.replace(/\D/g, ''); // Remove non-numeric characters
            // Split into groups of up to four digits and join with spaces
            value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
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

        // Restrict 'cc-expires' to numbers and '/' and format as MM / YY
        if (target.id === 'credit-expires') {
            value = value.replace(/\D/g, ''); // Remove non-numeric characters
            if (value.length > 2) {
                value = value.slice(0, 2) + ' / ' + value.slice(2);
            }
        }

        // Restrict 'cc-cvc' and 'donationForm2_cvc' to numbers only
        if (target.id === 'credit-cvc' || target.id === 'donationForm2_cvc') {
            value = value.replace(/\D/g, ''); // Remove non-numeric characters
        }

        target.value = value;
    });
});

// Function to go back to the previous form part
function goBack() {
    // Hide form part 2
    document.querySelector('.donate_form_part2').classList.add('hidden');
    
    // Show form part 1
    setTimeout(function() {
        document.querySelector('.donate_form_part1').classList.remove('hidden');
        // Adjust the margin-top of .donate_section2 and .donate_footer
        document.querySelector('.donate_section2').style.marginTop = '50vw'; // Push up donate_section2
        document.querySelector('.donate_footer').style.marginTop = '93vw'; // Push up donate_footer
    }, 200); // Adjust timing to match CSS animation duration

    // Scroll to a fixed position
    window.scrollTo({ top: 7 * window.innerWidth / 100, behavior: 'smooth' });;
}