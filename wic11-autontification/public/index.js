
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

loginBtn.addEventListener("click", login)
registerBtn.addEventListener("click", register)

function login () {
  const data = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value
  };
  axios.post('/api/login', data).then(res => {
    console.log(res);
    if(res.status === 200){
      console.log('res', res)
    }
  })
    .catch(error => console.error('error', error));
}

function register () {
  const data = {
    login: document.querySelector("#login-reg").value,
    email: document.querySelector("#email-reg").value,
    password: document.querySelector("#password-reg").value
  };
  axios.post('/api/register', data).then(res => {
    console.log(res);
    if(res.status === 200){
      console.log('res', res)
    }
  })
    .catch(error => console.error('error', error));
}
