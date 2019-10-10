
const addBtn = document.getElementById('add-car-btn');


addBtn.addEventListener("click", add)

function deleteCar(id){
  const data = {
    id: id
  }
  axios.post('/api/delete', data).then(res => {
    if(res.status === 200){
      location.reload()
    }
  })
    .catch(error => console.error('error', error));
}
function changePrice(id){
  var newPrice = prompt("Please enter your price", 99999);
  if (newPrice != null || typeof newPrice === 'number') {
    const data = {
      id: id,
      newPrice: newPrice
    }
    axios.post('/api/update', data).then(res => {
      if(res.status === 200){
        location.reload()
      }
    })
      .catch(error => console.error('error', error));
  }else{
    alert('Enter YOR PRICE!')
  }
}

function add () {
  const data = {
    manufacturer: document.querySelector("#manufacturer").value,
    model: document.querySelector("#model").value,
    price: document.querySelector("#price").value
  };
  axios.post('/api/create', data).then(res => {
    console.log(res);
    if(res.status === 200){
      console.log('res', res)
      location.reload()
    }
  })
    .catch(error => console.error('error', error));
}


