function name(name){
    console.log(__filename)
}

function calc(a, b){
    return console.log(a + b)
}

module.exports = {
    func1: name,
    func2: calc
}
