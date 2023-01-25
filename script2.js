let products = {
    data: [
      {
        productName: "Paneer Tikka",
        category: "NorthIndian",
        price: "280",
        image: "img/product4/PT.png",
      },
      {
        productName: "Masala Dosa",
        category: "SouthIndian",
        price: "120",
        image: "img/product4/dosa.png",
      },
      {
        productName: "Butter Naan",
        category: "NorthIndian",
        price: "80",
        image: "img/product4/BN.png",
      },
      {
        productName: "Tandoori Paneer",
        category: "NorthIndian",
        price: "250",
        image: "img/product4/TP.png",
      },
      {
        productName: "Cheese Burger",
        category: "Contemporary",
        price: "150",
        image: "img/product4/burger.png",
      },
      {
        productName: "Idli & Vada Combo",
        category: "SouthIndian",
        price: "210",
        image: "img/product4/idli.png",
      },
      {
        productName: "Idiyappam",
        category: "SouthIndian",
        price: "230",
        image: "img/product4/idiyappam.png",
      },
      {
        productName: "Veggie Delite Sub",
        category: "Contemporary",
        price: "150",
        image: "img/product4/sub.png",
      },
      {
        productName: "Farm Fresh Pizza",
        category: "Contemporary",
        price: "230",
        image: "img/product4/pizza1.png",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "INR " + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };