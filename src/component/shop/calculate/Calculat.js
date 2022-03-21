

const add = (first, second) => {
    return (first + second)
}
const multiply = (first, second) => {
    return (first * second)

}

// const number = [22, 43, 54, 46, 4, 55, 98]
// const sumReducer = (prev, curent) => prev + curent
// const total = number.reduce(sumReducer, 0)

// const items = [
//     { id: 1, name: 'alta', price: 200 },
//     { id: 1, name: 'alta', price: 200 },
//     { id: 1, name: 'alta', price: 200 },
//     { id: 1, name: 'alta', price: 200 },
//     { id: 1, name: 'alta', price: 200 },
// ]
// const itemsumreducer = (prev, curent) => prev + curent.price

// const itemTotal = items.reduce(itemsumreducer, 0)


const getTotalPrice = (product) => {
    const reducer = (previous, curent) => previous + curent.price;
    const total = product.reduce(reducer, 0)
    return total;

}



export { add, multiply, getTotalPrice as getTotal } 