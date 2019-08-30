
function handleClick () {
    const data = {
        name: document.querySelector("#name").value,
        content: document.querySelector("#content").value
    }
    fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res)
        if(res.status === 200){
            alert('STATUS 200!')
        }
    })
      .catch(error => console.error('error', error));
}
