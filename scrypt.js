// array
// let arr = []

let str = 'Vova'
let favoriteNumber = 34
let isAdmin = true
let login = null
let samsung = undefined
let user = {
  name: 'Sara',
  age: 34
}

let arr = [
  'apple',
  34,
  true,
  null,
  22,
  undefined,
  {
    name: 'Sara',
    age: 25
  },
  function name(params) {
  
  },
  22,
  'sasssd',
  favoriteNumber,
  login,
  45
];

// How to check for an array

let result = Array.isArray([])
console.log('Result =>', result)

// Array length

console.log('arr length - ', arr.length);

let darts = (el) => {
  console.log('start and see the log for the DB mongoos', el, typeof el);
};

darts(44)

let index = arr[arr.length -1] // last index of the array
console.log('Index - ', index)

let value = arr.indexOf(45)
let lastIndex = arr.lastIndexOf(22)
console.log('value - ', value)
console.log('lastIndex - ', lastIndex);

// array changes

let fruits = ['apple', 'pear', 'orange'];
fruits.push('Vova')

function qatar (qwe) {
  console.log(`Func => qatar | Elem => ${qwe}`)
  let numb = 123
  const sdarw = `1233`;
  
}
qatar(`test`)


const dark = (dar) => {
	console.log(`AFN => darts | EL => ${dar}`)
	
}

let nowitis = 3
dark('test')
console.log(`Nowitis =>> `, nowitis);




