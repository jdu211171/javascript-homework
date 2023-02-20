import product from "../database/newproduct.json" assert {type: "json"}

localStorage.cart = {
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0
};

for (let i = 0; i < product.length; i++) {
    let content = document.querySelector('#product');
    let newCard =   `<div class="product-box">
    
    <div class="upside">
        <img src="./media/image/${product[i].img}.webp" alt="${product[i].product_model}">
    </div>

        <div class="middleside">
        ${product[i].product_model}
        <span><small>$</small>${product[i].price}</span>
        </div>

    <div class="downside" id="${product[i].id}">
        カードに追加
    </div>
</div>`;
    content.innerHTML += newCard;
}

// function localStorageManipulator(element, value) {
//     let id = element.target.id;
//     let amount = localStorage.cart[id];
//     localStorage.cart[id] = amount++;
// }

const magazine = document.querySelector('aside');

document.querySelectorAll('.downside').forEach(item => {
    item.addEventListener('click', addToCard)});

function addToCard(event) {
    let id = event.target.id;
    for(let i = 0; i < product.length; i++){
        if (id == product[i].id){
            let card = document.createElement('div');
            card.innerHTML += `<div class="product-item">
    
            <div class="upside">
                <img src="./media/image/${product[i].img}.webp" alt="${product[i].product_model}">
            </div>
        
                <div class="middleside">
                ${product[i].product_model}
                <span><small>$</small>${product[i].price}</span>
                </div>
        
            <div class="remove" id="${product[i].id}">
                カードから外す
            </div>
        </div>`;
            magazine.append(card);

            let remove = document.querySelectorAll('.remove');
            remove = remove[remove.length - 1];
            remove.addEventListener('click', (e) => {
                console.log(e);
                e.target.parentNode.parentNode.remove();
            });
            break;
        }
    }
}

/*
let btnBuy = document.querySelectorAll('.button-right');
for (let i of btnBuy) {
    i.addEventListener('click', function () {
        let sidebar = document.querySelector('.right-navbar');
    });
}
*/

/*
localStorage.setItem(product, [1, 2, 4, 5]);
console.log(product[0])
function addToCard(id) {
    
}
*/
