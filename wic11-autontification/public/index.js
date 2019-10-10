
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const updateBtn = document.getElementById('update-btn');
const deleteBtn = document.getElementById('delete-btn');

loginBtn.addEventListener("click", login)
registerBtn.addEventListener("click", register)
updateBtn.addEventListener("click", update)
deleteBtn.addEventListener("click", deleted)

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

function update () {
  const data = {
    login: document.querySelector("#login-upd").value,
    email: document.querySelector("#email-upd").value,
  };
  axios.post('/api/update', data).then(res => {
    console.log(res);
    if(res.status === 200){
      console.log('res', res)
    }
  })
    .catch(error => console.error('error', error));
}

function deleted () {
  const data = {
    email: document.querySelector("#email-del").value,
  };
  axios.post('/api/delete', data).then(res => {
    console.log(res);
    if(res.status === 200){
      console.log('res', res)
    }
  })
    .catch(error => console.error('error', error));
}
