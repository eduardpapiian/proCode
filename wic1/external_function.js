function name(name){
    console.log('NAME', __filename, name)
}

function calc(a, b){
    return console.log(a + b)
}

module.exports = {
    name: name,
    func2: calc
}
