var sidebarEl = document.querySelector('.sidebar');
var settingPanelEl = document.querySelector('settings-panel');
var hclSdkEl = document.querySelector('hcl-sdk');
// var burgerEl = document.querySelector('.burger');

var specialtyLabelByCode = {
  'SP.WCA.75': 'Dentistry',
  'SP.WCA.08': 'Cardiology',
  'SP.WUS.DIA': 'DIABETES',
  'SP.WUS.CAR': 'Cardiology',
  'SP.WUS.PSC': 'Psychology',
  'SP.WUS.D': 'DERMATOLOGY',
  'SP.WUS.DEN': 'Dentistry',
  'SP.WUS.ALL': 'Allergy',
  'SP.WUS.PUL': 'Pulmonary Disease',
  'SP.WUS.GP': 'GENERAL PRACTICE',
  'SP.WUS.PED': 'Pediatrics',
}

// for (let i = 0; i < 3; i++) {
//   burgerEl.innerHTML += '<div></div>';
// }

// burgerEl.addEventListener('click', function() {
//   document.body.classList.toggle('menu-opened')
// });

function openSettings() {
  sidebarEl.classList.add('settings-opened');
}

settingPanelEl.addEventListener('backPressed', function() {
  sidebarEl.classList.remove('settings-opened');
});

function searchNearMe(specialtyCode) {
//   document.body.classList.remove('menu-opened');
  var specialtyLabel = specialtyLabelByCode[specialtyCode];
  if (specialtyLabel) {
    hclSdkEl.searchNearMe({
      specialtyCode,
      specialtyLabel
    });
  }
}

// Initialize Hcl SDK

function getSettingsFromLocal() {
  const settingsStr = localStorage.getItem(`__hcl-sdk-dev-settings-fields`);
  if (settingsStr) {
    try {
      return JSON.parse(settingsStr);
    } catch (err) { }
  }
  return {
    apiKey: '3001786a6ae30dc8',
    appName: 'Carenity',
    appURL: 'https://hcliqvia.netlify.app/'
  };
}

const config = {
  ...getSettingsFromLocal()
};

var matches = window.location.hash.match(/sp=([A-Z0-9.]+)/);
if (matches) {
  var specialtyCd = matches[1];
  console.log(specialtyCd);
  var specialtyLabel = specialtyLabelByCode[specialtyCd];
  console.log(specialtyLabel);
  // if (specialtyLabel) {
    config.entry = {
      screenName: 'searchNearMe',
      specialtyCode: specialtyCd,
  //  }
  }
}

console.log(config)

customElements.whenDefined('hcl-sdk').then(function() {
  hclSdkEl.init(config);
})