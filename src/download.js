const downloadWindowsBtn = document.getElementById('download-btn');
const downloadContainer = document.getElementById('download-container');
const notVirusContainer = document.getElementById('not-virus-container');
const separator = document.getElementById('separator-container-download');

const comingSoonWindows = document.getElementById('download-coming-label-windows');
const comingSoonMacOS = document.getElementById('download-coming-label-macos');
const comingSoonLinux = document.getElementById('download-coming-label-linux');
const comingSoonMobile = document.getElementById('download-coming-label-mobile');

const downloadPlatformWindows = document.getElementById('download-platform-windows');
const downloadPlatformMacOS = document.getElementById('download-platform-macos');
const downloadPlatformLinux = document.getElementById('download-platform-linux');

// downloadWindowsBtn.addEventListener('click', () => {
//     window.location.href = 'https://canvas-hw-reminder.s3.us-west-1.amazonaws.com/Canvas-HW-Reminder-Setup.exe';
// })

function getOS() {
    let userAgent = navigator.userAgent;
    let platform = navigator.platform;
    let os = null;
  
    if (/Win/.test(platform)) {
      os = 'Windows';
    } else if (/Mac/.test(platform)) {
      os = 'Mac OS';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
      os = 'iOS';
    }
  
    return os;
}

let operatingSystem = getOS();

comingSoonWindows.classList.add('hide');
comingSoonMacOS.classList.add('hide');
comingSoonLinux.classList.add('hide');
comingSoonMobile.classList.add('hide');

notVirusContainer.classList.add('hide');
separator.classList.add('hide');

switch (operatingSystem) {
    case 'Windows':
        comingSoonWindows.classList.remove('hide');
        notVirusContainer.classList.remove('hide');
        separator.classList.remove('hide');

        downloadPlatformWindows.classList.add('hide');
        break;

    case 'MacOS':
        comingSoonMacOS.classList.remove('hide');

        downloadPlatformMacOS.classList.add('hide');
        break;

    case 'Linux':
        comingSoonLinux.classList.remove('hide');

        downloadPlatformLinux.classList.add('hide');
        break;

    case 'iOS':
    case 'Android':
        comingSoonMobile.classList.remove('hide');
        break;

    default:
        break;
}