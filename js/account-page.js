function login() {
    // Mengambil elemen formulir login dan registrasi
    var loginForm = document.getElementById('login');
    var registerForm = document.getElementById('register');
    var btn = document.getElementById('btn');
    
    // Mengatur posisi formulir untuk tampilan login
    loginForm.style.left = '50px';
    registerForm.style.left = '450px';
    btn.style.left = '0';
  }
  
  function register() {
    // Mengambil elemen formulir login dan registrasi
    var loginForm = document.getElementById('login');
    var registerForm = document.getElementById('register');
    var btn = document.getElementById('btn');
    
    // Mengatur posisi formulir untuk tampilan registrasi
    loginForm.style.left = '-400px';
    registerForm.style.left = '50px';
    btn.style.left = '110px';
  }
  
  function togglePassword() {
    var passwordField = document.getElementById('password');
    var toggleIcon = document.getElementById('toggle-icon');

    //Memungkinkan pengguna melihat/menyembunyikan kata sandi
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.classList.add('fa-eye-slash');
      toggleIcon.classList.remove('fa-eye');
    } else {
      passwordField.type = 'password';
      toggleIcon.classList.add('fa-eye');
      toggleIcon.classList.remove('fa-eye-slash');
    }
  }
  
 
  