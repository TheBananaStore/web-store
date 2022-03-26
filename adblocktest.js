function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

document.addEventListener('DOMContentLoaded', init, false);

function init(){
  adsBlocked(function(blocked){
    if(blocked){
      if (getCookie("sawnotice") == ""){
        //alert("Hi there! We noticed you're using an adblocker. That's fine with us (many of us use them too!) but just this once, we're asking you nicely, if you're fine, to disable your adblocker on this page. We're not making money off of this, it's because many of our image sources use sites that also host ads. We have none of that here, but your adblock takes no chances. So if you could turn off your adblock, just for this page, we can focus on improving the Banana Store instead of telling users the exact stuff you're reading. If you don't, that's OK! We'll keep helping you! Be warned, the images may be wonky at times...")
        setCookie("sawnotice", "yep", 9999)
      }
    }
  })
}

function adsBlocked(callback){
  var testURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'

  var myInit = {
    method: 'HEAD',
    mode: 'no-cors'
  };

  var myRequest = new Request(testURL, myInit);

  fetch(myRequest).then(function(response) {
    return response;
  }).then(function(response) {
    console.log(response);
    callback(false)
  }).catch(function(e){
    console.log(e)
    callback(true)
  });
}