// app.js

window.addEventListener('load', function() {

  var webAuth = new auth0.WebAuth({
    domain: 'ronin-wmm.auth0.com',
    clientID: 'qq8v3U96zIodPVq-t2yTHecYLuoIJDNg',
    responseType: 'token id_token',
    audience: 'https://ronin-wmm.auth0.com/userinfo',
    scope: 'openid',
    redirectUri: window.location.href
  });

  var loginBtn = document.getElementById('btn-login');

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    webAuth.authorize();
  });

});
