<template>
    <div class="login-container">
      <div class="login-form">
        <div class="register-link">
        <h2 class="login-title px-4 py-4">Iniciar Sesión</h2>
        <h2 class="login-title px-4 py-4">Registrarse</h2>     
        </div> 
        <p class="my-8">Puedes iniciar sesión con:</p>     
        <div class="social-icons">
          <div class="social-icon">
            <FacebookIconVue />
          </div>
          <div class="social-icon">
            <LkdinIconVue />
          </div>
        </div>
        <div class="form-group">
          <p class="my-8">También puedes iniciar sesión con tu correo</p>
          <input type="text" id="username" v-model="username" placeholder="Correo Electrónico" />
        </div>
        <div class="form-group">
          <div class="password-input">
            <input type="password" id="password" v-model="password" placeholder="Contraseña" />
            <button @click="togglePasswordVisibility" :class="{ 'active': showPassword }">
              <EyeIcon />
            </button>
          </div>
        </div>
        <div class="mt-80">
          <button class="login-button" @click="login">Ingresar</button>
          <div class="forgot-password mt-3">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import EyeIcon from '../Icons/EyeIcon.vue';
  import FacebookIconVue from '../Icons/FacebookIcon.vue';
  import LkdinIconVue from '../Icons/LkdinIcon.vue';
  
  export default {
    components: {
      EyeIcon,
      LkdinIconVue,
      FacebookIconVue
    },
  
    data() {
      return {
        username: '',
        password: '',
        showPassword: false,
        registrationActive: false
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
      login() {
        console.log('Iniciando sesión...');
      },
    }
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
  
  .login-container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100vh;
    background-color: #ffffff;
    padding: 20px;
  }
  
  .login-form {
    width: 100%;
    max-width: 300px;
    background-color: #ffffff;
    padding: 20px;
    max-width: 420px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .login-title {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Poppins',sans-serif;
    box-shadow: 0 5px 0px rgba(0, 0, 0, 1);
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #8B9099;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  p {
    display: block;
    font-size: 12px;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif;
    text-align: center;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #8B9099;
    font-family: 'Roboto',sans-serif;
    font-size: 12px;
  }
  
  .password-input {
    position: relative;
  }
  
  .password-input input[type="password"] {
    padding-right: 40px;
  }
  
  
  .password-input button {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .forgot-password {
    margin-bottom: 20px;
    text-align: center;
    color: #5640FF;
  }
  
  .forgot-password a {
    font-size: 12px;
    color: #5640FF;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    line-height: 45px ;
  }
  
  .login-button {
    width: 100%;
    height: 50px;
    padding: 10px;
    background-color: #5640ff;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Poppings', sans-serif;
    font-size: 14px;
    font-weight: bold;
  }
  
  .register-link {
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }
  
  .register-link:active .border-highlight {
    transform: translateX(50px);
  }
  </style>
  