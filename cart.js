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
let cart2=document.getElementById('cart2');
let generateCartItems=()=>{
    
    if(basket.length!==0){
        basket.forEach((x)=>{
            let {id,item}=x;
            let shopitem=shopItemsData.find((x)=>x.id===id);
            if(shopitem){
                let {name,price,img,desc}=shopitem;
                let newDiv=document.createElement('div');
                newDiv.innerHTML=`<div class="item" id="item-${id}">
                                        <img src="${img}" alt="" height="120rem" width="auto">
                                            <div class="side" id="side-${id}">
                                                <h3>${name}</h3>
                                                <h3>${item*price}</h3>
                                            </div>
                                    </div>`
                cart2.appendChild(newDiv);
            }           
            })
    }
    else{
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <button class="btn1">Home Page</button>`
        
    }
}
generateCartItems();