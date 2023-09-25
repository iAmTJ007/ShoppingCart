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
let generateCartItems=()=>{
    
    if(basket.length!==0){
        console.log("sdfjk")
    }
    else{
        label.innerHTML=`
        <h2>Cart is Empty</h2>
        <button class="btn1">Home Page</button>`
        
    }
}
generateCartItems();