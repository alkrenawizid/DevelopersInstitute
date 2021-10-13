let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

//Create a function called checkBasket()
function checkBasket() {
    //prompt the user for an item
    let item = prompt('Enter an item:')

    //let the user know if the item is in the basket
    if (item in amazonBasket) {
        alert('The item exist in the basket')
    } else {
        alert('The item does not exist in the basket')
    }
}

checkBasket()