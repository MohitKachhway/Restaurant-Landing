window.addEventListener("load", ()=>{
    getMenu();
})

async function getMenu(){
    let url = "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
    let responce = await fetch(url);
    let data = await responce.json();
    appendItems(data);
   
    let order = await TakeOrder();
    
    let orderStatus = await orderPrep();

    let orderPaymentStatus = await payOrder(orderStatus);

    let thanksLine = await thankyouFnc(orderPaymentStatus);

    alert(thanksLine);
}
function TakeOrder() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let burgerObj =[{name : "burger1"},{name : "burger2"},{name : "burger3"}];
            resolve(burgerObj);
        }, 2500);
    })
}
function orderPrep(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve( {order_status:true, paid:false});
        },1500);
    })
}
function payOrder(obj){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(obj.order_status){
                resolve( {order_status:true, paid:true});
            }
            else{
                reject();
            }
           
        },1000);
    })
}
function thankyouFnc(obj){
    return new Promise((resolve,reject)=>{
        if(obj.paid){
            resolve("thankyou for eating with us today!")
        }
        else{
            reject();
        }
    })
}
// ------------------------------------------------------------------------------
// DEMO of menu cards

//  <div class="menu-container">
// <div class="menu-cart">
//     <img src="./image/rger 1.png" alt="brg">
//     <h4>Burger</h4>
//     <p>$5.99/-</p>
// </div>
// <div class="menu-cart">
//     <img src="./image/rger 1.png" alt="brg">
//     <h4>Burger</h4>
//     <p>$5.99/-</p>
// </div>
// <div class="menu-cart">
//     <img src="./image/rger 1.png" alt="brg">
//     <h4>Burger</h4>
//     <p>$5.99/-</p>
// </div>
// <div class="menu-cart">
//     <img src="./image/rger 1.png" alt="brg">
//     <h4>Burger</h4>
//     <p>$5.99/-</p>
// </div>
// <div class="menu-cart">
//     <img src="./image/rger 1.png" alt="brg">
//     <h4>Burger</h4>
//     <p>$5.99/-</p>
// </div>
// <div class="menu-cart">
//     <img src="./image/rger 1.png" alt="brg">
//     <h4>Burger</h4>
//     <p>$5.99/-</p>
// </div>  

//  </div>  

function appendItems(obj){
    let mainContainer = document.getElementsByClassName("main-container")[0];
    let menuContainer = document.createElement("div");
    menuContainer.className="menu-container";
    for(let i=0;i<obj.length;++i){
        let menuCart = document.createElement("div");
        menuCart.className = "menu-cart";
        
      let imgSrc = document.createElement("img");
      imgSrc.setAttribute("src",obj[i].imgSrc)

      let itemName = document.createElement("h4");
      itemName.innerText = obj[i].name;

      let price = document.createElement("p");
      price.innerText = obj[i].price;

        menuCart.append(imgSrc,itemName,price)
        
        menuContainer.appendChild(menuCart);

    }
    mainContainer.appendChild(menuContainer);
}

