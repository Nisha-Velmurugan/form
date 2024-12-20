const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const welcomePage = document.getElementById("welcome-page");

let users = [
    { email: "nishavelmurugan7@gmail.com", password: "nisha7" }
  ];
  
  function toggleForms() {
    loginContainer.classList.toggle("hidden");
    signupContainer.classList.toggle("hidden");
  }
  
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      loginContainer.classList.add("hidden");
      welcomePage.classList.remove("hidden");
    } else {
      alert("Invalid email or password.");
    }
  });
  
  document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    if (users.some((u) => u.email === email)) {
      alert("Email is already registered. Please login.");
      return;
    }
  
    users.push({ email, password });
    alert("Signup successful. You can now login.");
    toggleForms();
  });
