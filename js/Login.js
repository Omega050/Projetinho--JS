function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
  }
  
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simulação de validação de usuário e senha
    if (username === "admin" && password === "admin123") {
      alert("Bem-vindo, administrador!");
      setCookie("userType", "admin");
      window.location.href = "admPage.html";
    } else if (username === "usuario" && password === "usuario123") {
      alert("Login bem-sucedido como usuário!");
      setCookie("userType", "user");
      window.location.href = "userPage.html";
    } else {
      alert("Usuário ou senha incorretos.");
    }
  }
  
  function logout() {
    setCookie("userType", "");
    window.location.href = "index.html";
  }
  
  // Verificar o cookie para manter o usuário logado
  document.addEventListener("DOMContentLoaded", function () {
    var userType = getCookie("userType");
    if (userType === "admin") {
      window.location.href = "./admPage.html";
    } else if (userType === "user") {
      window.location.href = "./userPage.html";
    }
  });