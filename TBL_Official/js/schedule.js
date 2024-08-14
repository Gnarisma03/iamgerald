document.addEventListener('DOMContentLoaded', function() {
    const datePickerInput = document.getElementById('date-picker');
    const currentDateElem = document.getElementById('current-date');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Initialize Flatpickr
    const datePicker = flatpickr(datePickerInput, {
        dateFormat: 'Y-m-d',
        defaultDate: new Date(), // Default to today
        onChange: function(selectedDates) {
            // Show spinner when date is selected
            showSpinner();
            setTimeout(() => {
                if (selectedDates.length > 0) {
                    currentDate = selectedDates[0];
                    updateDateDisplay();
                }
                hideSpinner();
            }, 1000); // Simulate loading time
        }
    });

    let currentDate = new Date();

    function updateDateDisplay() {
        // Format currentDate as YYYY-MM-DD
        const formattedDate = currentDate.toISOString().split('T')[0];
        // Update the display element
        currentDateElem.textContent = formattedDate;
        // Update the value of the input to the formatted date
        datePickerInput.value = formattedDate;
    }

    function showSpinner() {
        loadingSpinner.classList.add('show');
    }

    function hideSpinner() {
        loadingSpinner.classList.remove('show');
    }

    // Initialize display
    updateDateDisplay();

    // Handle previous date button
    document.getElementById('prev-date').addEventListener('click', function() {
        showSpinner();
        setTimeout(() => {
            currentDate.setDate(currentDate.getDate() - 1); // Go to previous day
            updateDateDisplay();
            hideSpinner();
        }, 1000); // Simulate loading time
    });

    // Handle next date button
    document.getElementById('next-date').addEventListener('click', function() {
        showSpinner();
        setTimeout(() => {
            currentDate.setDate(currentDate.getDate() + 1); // Go to next day
            updateDateDisplay();
            hideSpinner();
        }, 1000); // Simulate loading time
    });

    // Handle input focus to ensure the date picker appears
    datePickerInput.addEventListener('focus', function() {
        datePicker.open(); // Open the date picker when input is focused
    });
});
