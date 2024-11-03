const downloadWindowsBtn = document.getElementById('download-btn');

downloadWindowsBtn.addEventListener('click', () => {
    window.location.href = 'https://canvas-hw-reminder.s3.us-west-1.amazonaws.com/Canvas-HW-Reminder-Setup.exe';
})