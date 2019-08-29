

fetch('/api/promise').then(function(response) {
    return response.text().then(function(text) {
        console.log('first:', text)
        fetch(`https://jsonplaceholder.typicode.com/users/${text}`)
            .then(response => response.json())
            .then(json => {
                console.log('second', json)
                let half = json.id / 2
                fetch(`https://jsonplaceholder.typicode.com/users/${half}`)
                    .then(response => response.json())
                    .then(json => {
                        console.log('third', json)
                        let nameId = json.name + '-' + half
                        alertFunc(nameId)
                    })
            })
    });
});

function alertFunc(nameId){
    alert(nameId)
}
