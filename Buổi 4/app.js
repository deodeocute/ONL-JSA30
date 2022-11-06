localStorage.setItem('test', 'value')

let drink = ['Cafe', 'Nước ép', 'Sinh tố']
let movie = [
    {
        name: 'Batman'
    }, {
        name: 'Wakanda'
    }
]
localStorage.setItem('drink', JSON.stringify(drink))
localStorage.setItem('movie', JSON.stringify(movie))

let get_test = localStorage.getItem('test')
console.log(get_test);
let get_movie = localStorage.getItem('movie')
console.log(JSON.parse(get_movie));

setTimeout(function(){
    console.log('Test setTimeout')
}, 3000)

function Print() {
    console.log("Print something");
}
setTimeout( Print , 3000)

setInterval(function(){
    console.log('setInterval')
},1000)