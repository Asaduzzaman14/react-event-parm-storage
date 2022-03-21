//  use local storage to manage cart data

const addToDb = (id) => {
    const quentity = localStorage.getItem(id)
    if (quentity) {
        const newQuantity = parseInt(quentity) + 1
        localStorage.setItem(id, newQuantity)
    }
    else {
        localStorage.setItem(id, 1)
    }

}

export { addToDb }
