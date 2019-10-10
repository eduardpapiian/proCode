
const addBtn = document.getElementById('add-btn');


addBtn.addEventListener("click", add)

function add () {
  const data = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value
  };
  axios.post('/api/add', data).then(res => {
    console.log(res);
    if(res.status === 200){
      console.log('res', res)
    }
  })
    .catch(error => console.error('error', error));
}

function deleteCar(id){
  const data = {
    id: id
  }
  axios.post('/api/delete', data).then(res => {
    console.log(res);
    if(res.status === 200){
      console.log('res', res)
    }
  })
    .catch(error => console.error('error', error));
}

