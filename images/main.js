let shop=document.getElementById('shop');

let shopItemsData=[{
    id: "casualshirt",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img:"images/img-1.jpg"
},{
    id: "officeshirt",
    name: "Office Shirt",
    price: 70,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img:"images/img-2.jpg"
},{
    id: "tshirt",
    name: "T Shirt",
    price: 55,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img:"images/img-3.jpg"
},{
    id: "menssuit",
    name: "Mens Suit",
    price: 120,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img:"images/img-4.jpg"
}];

let generateShop=()=>{
    return (shop.innerHTML=shopItemsData.map((x)=>{
        return ` <div class="items" id:${x.id}>
        <img src=${x.img} width="221rem" alt="">
        <div class="details">
            <h2>${x.name}</h2>
            <p>${x.desc}</p>
        </div>
        <div class="price-quantity">
            <h2>$ ${x.price}</h2>
            <div class="buttons">
                <i class="bi bi-dash-lg"></i>
                <div class="quantity">0</div>
                <i class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>`
    }).join(""))
}
generateShop();