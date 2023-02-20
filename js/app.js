import product from "../database/newproduct.json" assert {type: "json"}

localStorage.cart = [];

for (let i = 0; i < product.length; i++) {
    let content = document.querySelector('#product');
    let newCard =   `<div class="product-box">
    
    <div class="upside">
        <img src="./media/image/${product[i].img}.webp" alt="image of laptop">
    </div>

        <div class="middleside">
        ${product[i].product_model}
        <span><small>$</small>${product[i].price}</span>
        </div>

    <div class="downside">
        Add to Card
    </div>
</div>`;
    content.innerHTML += newCard;
}

function showTotalPrice() {
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += product[i].id;
    })
}

const magazine = document.querySelector('.right-navbar');

document.querySelectorAll('.button-right').forEach(item => {
    item.addEventListener('click', addToCard)
});
function addToCard(event) {
    let id = event.target.dataset.productId;
    for(let i = 0; i < product.length; i++){
        if (id == product[i].id){
            let card = document.createElement('div');
            card.innerHTML += `<div class="card">
                        <div class="up">
                            <img src="./media/${product[i].img}" alt="" srcset="">
                        </div>
                        <div class="down">
                            <input type="button" value="Remove" class="remove">
                        </div>
                    </div>`;
            magazine.append(card);
            // localStorage.card.push(product[i].id);

            let remove = document.querySelectorAll('.remove');
            remove = remove[remove.length - 1];
            remove.addEventListener('click', (e) => {
                console.log(e);
                e.target.parentNode.parentNode.parentNode.remove();
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
