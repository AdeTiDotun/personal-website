// document.addEventListener('DOMContentLoaded', (event) => {
//     // Get the current date and time
//     const now = new Date();

//     // Get the UTC date and time
//     const utcDate = now.toUTCString().split(' ').slice(0, 4).join(' ');
//     const utcTime = now.toISOString().split('T')[1].split('.')[0];

//     // Replace the query selectors with your specific ones
//     document.querySelector('#utc-date').textContent = `UTC Date: ${utcDate}`;
//     document.querySelector('#utc-time').textContent = `UTC Time: ${utcTime}`;65
// });

document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
        const now = new Date();

        // Get time and date
        const utcDate = now.toUTCString().split(' ').slice(0, 4).join(' ');
        const utcTime = now.toISOString().split('T')[1].split('.')[0];

        // update selector
        document.querySelector('#utc-date').textContent = `${utcDate}`;
        document.querySelector('#utc-time').textContent = `${utcTime}`;
    }
    updateTime();

    // Update the time
    setInterval(updateTime, 1000);
});