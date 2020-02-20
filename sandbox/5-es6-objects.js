// Object property shorthand:

const name = 'Andrew'
const userAge = 27

const user = {
    name,      // This syntax is a shorthand of name: name since both are the same
    age: userAge,  // We can't use the shorthand here since both names are different
    location: 'Philadelphia'
}

//console.log(user)

// Object destructuring:

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// The goal of destructuring is to extract object elements to individual variables

const { label, price, stock, salePrice } = product

console.log(label, price, stock, salePrice)

//  Note that the name of the variable must match a property of the object.  If you need to name the variables differently, you can do so:  Also, you can provide a default value of a property, by using =

const { label: productLabel, price: productPrice, stock: productStock, rating = 20 } = product

console.log(productLabel, productPrice, stock, salePrice, rating)


// We can also use a rest parameter to extract multiple elements to an object along with vars:

const { ...data } = product

console.log(data)

// We can also destructure a variable when we call a function if for instance we only want to use a single property inside of an object:

const transaction = (type, { label }) => {
    console.log(label)
}

transaction('order', product)