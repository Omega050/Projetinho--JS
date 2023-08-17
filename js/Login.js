var defaultUsers = [
  { name: "Admin User", email: "admin@example.com", username: "admin", password: "admin123" }
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(defaultUsers));
}

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var users = JSON.parse(localStorage.getItem('users')) || [];

  var user = users.find(user => user.username === username);

  if (user && user.password === password) {
    if (user.username === "admin") {
      window.location.href = "admPage.html"; 
    } else {
      window.location.href = "userPage.html"; 
    }
  } else {
    alert("Usuário ou senha incorretos.");
  }
}
function register(event) {
  event.preventDefault(); // Impede o comportamento padrão do formulário
  
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const name = `${firstName} ${lastName}`;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
      alert("As senhas não correspondem. Por favor, verifique novamente.");
      return;
  }

  var users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.some(user => user.username === username)) {
      alert("Nome de usuário já existe. Por favor, escolha outro.");
      return;
  }

  if (users.some(user => user.email === email)) {
      alert("Email já existe. Por favor, escolha outro.");
      return;
  }

  var newUser = { name, email, username, password };
  users.push(newUser);

  localStorage.setItem('users', JSON.stringify(users));

  alert("Conta criada com sucesso. Você pode fazer o login agora.");
  window.location.href = "login.html";
}