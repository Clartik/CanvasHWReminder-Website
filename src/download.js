const downloadBtn = document.getElementById('download-btn');
const notVirusContainer = document.getElementById('not-virus-container');
const separator = document.getElementById('separator-container-download');

const downloadContainerWindows = document.getElementById('download-container-windows');
const downloadContainerMacOS = document.getElementById('download-container-macos');
const downloadContainerLinux = document.getElementById('download-container-linux');
const downloadContainerMobile = document.getElementById('download-container-mobile');

const downloadPlatformWindows = document.getElementById('download-platform-windows');
const downloadPlatformMacOS = document.getElementById('download-platform-macos');
const downloadPlatformLinux = document.getElementById('download-platform-linux');

downloadBtn.addEventListener('click', () => {
    window.open('https://canvas-hw-reminder.s3.us-west-1.amazonaws.com/Canvas-HW-Reminder-Setup.exe', "__blank");
})

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

const operatingSystem = getOS();

switch (operatingSystem) {
    case 'Windows':
        downloadContainerWindows.classList.remove('hide');
        downloadPlatformWindows.classList.add('hide');
        
        notVirusContainer.classList.remove('hide');
        separator.classList.remove('hide');
        break;

    case 'MacOS':
        downloadContainerMacOS.classList.remove('hide');
        downloadPlatformMacOS.classList.add('hide');
        break;

    case 'Linux':
        downloadContainerLinux.classList.remove('hide');
        downloadPlatformLinux.classList.add('hide');
        break;

    case 'iOS':
    case 'Android':
        downloadContainerMobile.classList.remove('hide');
        break;

    default:
        break;
}