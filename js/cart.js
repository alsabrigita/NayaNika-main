if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoad', ready)
} else{
    ready
}

function ready(){
    var removeCartItemButton= document.getElementsByClassName('btn btn-light')
    console.log(removeCartItemButton)
    for (var i=0; i < removeCartItemButton.length; i ++) {
        var button = removeCartItemButton[i]
        button.addEventListener('click', removeCartItem) 
    } 
    var quantityInputs = documment.getElementsByClassName('dlist-align')
    for (var i=0; i < quantityInputs.length; i ++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
}

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1 
    }
    updateCartTotal()
}

var removeCartItemButton= document.getElementsByClassName('btn btn-light')
console.log(removeCartItemButton)
for (var i=0; i < removeCartItemButton.length; i ++) {
    var button = removeCartItemButton[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var itemContainer = document.getElementsByClassName('item-side') [0]
    var aside = aside = itemContainer.getElementsByClassName('aside')
    var total = 0
    for (var i=0; i < removeCartItemButton.length; i ++) {
        var aside = aside[i]
        var priceElement = aside.getElementsByClassName ('price') [0]
        var quantityElement = aside.getElementsByClassName ('custom-select') [0]
        var price = parseFloat(priceElement.innerText.replace('Rp',''))
        var quantity = quantityElement.value
        total = total + (price = quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('dlist-align') [0].innerText = 'Rp' + total
} 