import product from "../database/product.json" assert {type: "json"}


let j = 1;
for (let i = 0; i < product.length; i++) {
    let content = document.querySelector('.content');
    let newCard =   `<div class="card">
                        <div class="up">
                            <img src="./media/${product[i].img}" alt="" srcset="">
                        </div>
                        <div class="down">
                            <input type="button" value="About" class="button-left">
                            <input type="button" value="Buy" class="button-right" data-product-id="${j}">
                        </div>
                    </div>`;
    content.innerHTML += newCard;
    j++;
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

            let remove = document.querySelector('.remove');
            remove = remove[remove.length - 1]
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
