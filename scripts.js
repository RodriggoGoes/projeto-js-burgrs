const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi = `
                <li>
                    <img src="${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price}</p>
                </li>
            `
    })
    console.log(myLi)
    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        name: product.name,
        price: product.price * 0.9,
        vegan: product.vegan,
        src: product.src
    }))
   

}
buttonShowAll.addEventListener('click', showAll)
buttonMapAll.addEventListener('click', mapAllItems)



