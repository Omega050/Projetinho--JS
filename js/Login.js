function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

 
  if (username === "admin" && password === "admin123") {
    alert("Bem-vindo, administrador!");
    window.location.href = "admPage.html"; 
  } else if (username === "usuario" && password === "usuario123") {
    alert("Login bem-sucedido como usuário!");
    window.location.href = "userPage.html"; 
  } else {
    alert("Usuário ou senha incorretos.");
  }
}