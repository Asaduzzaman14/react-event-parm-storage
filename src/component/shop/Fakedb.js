//  use local storage to manage cart data

const addToDb = (id) => {
    let shopingCart;
    // get the shoping cart
    const storedCart = localStorage.getItem('shoping-cart');
    if (storedCart) {
        shopingCart = JSON.parse(storedCart)
    }
    else {
        shopingCart = {}
    }



    //  add quentity
    const quantity = shopingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        shopingCart[id] = newQuantity
        // localStorage.setItem(id, newQuantity)
    }
    else {
        shopingCart[id] = 1
    }
    localStorage.setItem('shoping-cart', JSON.stringify(shopingCart))

}

export { addToDb }
