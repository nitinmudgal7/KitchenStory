const product = [
    {
        id: 0,
        image: 'img/product4/PT.png',
        title: 'Paneer Tikka',
        price: 280,
    },
    {
        id: 1,
        image: 'img/product4/BN.png',
        title: 'Butter Naan',
        price: 80,
    },
    {
        id: 2,
        image: 'img/product4/TP.png',
        title: 'Tandoori Paneer',
        price: 250,
    },
    {
        id: 3,
        image: 'img/product4/dosa.png',
        title: 'Masala Dosa',
        price: 120,
    },
    {
        id: 4,
        image: 'img/product4/idli.png',
        title: 'Idli & Vada Combo',
        price: 210,
    },
    {
        id: 5,
        image: 'img/product4/idiyappam.png',
        title: 'Idiyappam',
        price: 230,
    },
    {
        id: 6,
        image: 'img/product4/burger.png',
        title: 'Cheese Burger',
        price: 150,
    },
    {
        id: 7,
        image: 'img/product4/sub.png',
        title: 'Veggie Delite Sub',
        price: 150,
    },
    {
        id: 8,
        image: 'img/product4/pizza1.png',
        title: 'Farm Fresh Pizza',
        price: 230,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>₹ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "₹ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "₹ "+total+".00";
            /* Pass Value to next Page */
            window.localStorage.setItem("total",total);
            /* Pass Value to next Page */

            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>₹ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}