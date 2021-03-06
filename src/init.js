var currentScript = document.currentScript;

window.onload = function() {
  if(window.TextDecoder && document.fonts && document.fonts.ready) {
    document.head.innerHTML +=
      '<link rel="stylesheet" href="css/main.min.css">';
    var mainScript = document.createElement('script');
    mainScript.src = 'js/main.min.js';
    document.head.appendChild(mainScript);
    currentScript.parentNode.removeChild(currentScript);
    return;
  }

  document.body.innerHTML =
    '<div style="width:380px;margin:auto;padding:37px 0 0;text-align:center;' +
    'line-height:1;font-family:Roboto,BlinkMacSystemFont,-apple-system,' +
    '\'Segoe UI\',Oxygen,Ubuntu,Cantarell,\'Fira Sans\',\'Droid Sans\',' +
    '\'Helvetica Neue\',Helvetica,Arial,sans-serif">' +
      '<img src="img/logo.png" height="167" style="margin:0 0 40px">' +
      '<div style="font-size:32px;font-weight:700;' +
      'margin-bottom:18px">Unsupported browser</div>' +
      '<div style="color:#707579;margin:0 0 48px;font-size:16px;' +
      'line-height:20px">' +
        'Please use latest version of Chrome, Firefox, Safari' +
        '<br>or any Chromium-based browser' +
      '</div>' +
    '</div>';
};