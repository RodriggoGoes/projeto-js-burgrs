const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', { 
        style: 'currency',
        currency: 'BRL'
    })
    return newValue
}
function showAll(productsArray) {
    let myLi = ''
    productsArray.forEach((product) => {
        myLi += `
                <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
                </li>
            `
    })

    list.innerHTML = myLi
}

function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //dar 10% de desconto//
        //Spread Operator//
    }))
    showAll(newPrices)
}
function sumAllItens() {
    const valueTotal = menuOptions.reduce( (acc, value) => acc + value.price, 0)
    list.innerHTML = `
              <li>
                 <p>O Valor total dos produtos sem o desconto é R$ ${formatCurrency(valueTotal)}</p>
              </li>
    `
console.log(valueTotal)
}

function FilterAll() {
    const filterItens = menuOptions.filter((product) => product.vegan)

    showAll(filterItens)
    console.log(filterItens)
   }
   
    

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonSumAll.addEventListener('click', sumAllItens)
buttonFilterAll.addEventListener('click', FilterAll)





