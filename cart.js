let basket=JSON.parse(localStorage.getItem("data")) || [];
let calculation=()=>{
    let count=0;
    basket.map((x)=>{
        count=count+x.item;
    })
    let cartAmount=document.getElementById('cartAmount');
    cartAmount.innerHTML=count;
}
calculation();

let label=document.getElementById('label');
let cart=document.getElementById('cart');
let generateCartItems=()=>{
    
    if(basket.length!==0){
        shopItemsData.map((x)=>{
            let id=x.id;
            basket.find((x)=>{
                if(x.id===id){
                    cart.innerHTML=`<div class="items" id=product-id-${x.id}>
                    <img src=${x.img} width="221rem" alt="">
                    <div class="details">
                        <h2>${x.name}</h2>
                        <p>${x.desc}</p>
                    </div>
                    <div class="price-quantity">
                        <h2>$ ${x.price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
                            <div id=${x.id} class="quantity">${search.item || 0}</div>
                            <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>`
                }
            })
        }
        )
    }
    else{
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <button class="btn1">Home Page</button>`
        
    }
}
generateCartItems();