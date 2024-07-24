document.addEventListener('DOMContentLoaded', () => {
  const dateTimeInput = document.querySelector('.date-time');

  dateTimeInput.addEventListener('change', (event) => {
    const selectedDateTime = event.target.value;
    console.log('Selected Date and Time:', selectedDateTime);
  });
});

