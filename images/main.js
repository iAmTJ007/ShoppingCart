let shop=document.getElementById('shop');

let basket=JSON.parse(localStorage.getItem("data")) || [];
//let basket=[];
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
        let {id,name,price,desc,img}=x; //extract all properties from current x iterating shopItemsData array
        let search=basket.find((x)=>x.id===id) || [] //find in basket if we find id that is our shopitemsdata id
        return `<div class="items" id=product-id-${x.id}>
        <img src=${x.img} width="221rem" alt="">
        <div class="details">
            <h2>${x.name}</h2>
            <p>${x.desc}</p>
        </div>
        <div class="price-quantity">
            <h2>$ ${x.price}</h2>
            <div class="buttons">
                <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
                <div id=${x.id} class="quantity">${search.item}</div>
                <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>`
    }).join(""))
}
generateShop();

let increment=(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>{
        return x.id===selectedItem.id;
    })
    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1
        })
    }
    else{
        search.item+=1;
    }
   update(id);
};
let decrement=(id)=>{
    let selectedItem=id;
    let search=basket.find((x)=>{
        return x.id===selectedItem.id;
    })
    if(search===undefined || search.item<=0){
        return;
    }
    else{
        search.item-=1;
    }
    update(id);
};
let update=(id)=>{
    localStorage.setItem("data",JSON.stringify(basket));
    let search=basket.find((x)=>x.id===id.id);
    document.getElementById(id.id).innerHTML=search.item;
    calculation();
};
let calculation=()=>{
    let count=0;
    basket.map((x)=>{
        count=count+x.item;
    })
    let cartAmount=document.getElementById('cartAmount');
    cartAmount.innerHTML=count;
}
calculation();

