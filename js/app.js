import product from "../database/product.json" assert {type: "json"}

for (let i = 0; i < product.length; i++) {
    let content = document.querySelector('.content');
    let newCard =   `<div class="card">
                        <div class="up">
                            <img src="./media/${product[i].img}" alt="" srcset="">
                        </div>
                        <div class="down">
                            <input type="button" value="About" class="button-left">
                            <input type="button" value="Buy" class="button-right">
                        </div>
                    </div>`;
    content.innerHTML += newCard;
}