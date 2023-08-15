function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulação de validação de usuário e senha
  if (username === "admin" && password === "admin123") {
    alert("Bem-vindo, administrador!");
    window.location.href = "admPage.html"; // Redirecionar para a página do admin
  } else if (username === "usuario" && password === "usuario123") {
    alert("Login bem-sucedido como usuário!");
    window.location.href = "userPage.html"; // Redirecionar para a página do usuário
  } else {
    alert("Usuário ou senha incorretos.");
  }
}