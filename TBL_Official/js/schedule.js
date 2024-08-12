document.addEventListener('DOMContentLoaded', function() {
    const datePicker = document.getElementById('date-picker');
    const currentDateElem = document.getElementById('current-date');
    let currentDate = new Date();

    function updateDateDisplay() {
        const formattedDate = currentDate.toISOString().split('T')[0];
        currentDateElem.textContent = formattedDate;
        datePicker._flatpickr.setDate(currentDate); // Update flatpickr date
    }

    const flatpickrInstance = flatpickr(datePicker, {
        defaultDate: currentDate,
        placeholder: "Select Date", // Ensure this is set
        onChange: function(selectedDates) {
            currentDate = selectedDates[0] || currentDate;
            updateDateDisplay();
        }
    });

    document.getElementById('prev-date').addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() - 1);
        updateDateDisplay();
    });

    document.getElementById('next-date').addEventListener('click', function() {
        currentDate.setDate(currentDate.getDate() + 1);
        updateDateDisplay();
    });

    // Initialize display
    updateDateDisplay();
});
