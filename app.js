const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItems");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./imgs/air.png",
            },
            {
                code: "darkblue",
                img: "./imgs/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./imgs/jordan.png",
            },
            {
                code: "green",
                img: "./imgs/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./imgs/blazer.png",
            },
            {
                code: "green",
                img: "./imgs/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./imgs/crater.png",
            },
            {
                code: "lightgray",
                img: "./imgs/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./imgs/hippie.png",
            },
            {
                code: "black",
                img: "./imgs/hippie2.png",
            },
        ],
    }
];

let chosenproduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")


menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the chosen product
        chosenproduct = products[index];

        // change the title of chosen product
        currentProductTitle.textContent = chosenproduct.title;

        // change the price of chosen product
        currentProductPrice.textContent = "$" + chosenproduct.price;

        // change the img of chosen product
        currentProductImg.src = chosenproduct.colors[0].img;

        // change the colors of chosen product
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenproduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = chosenproduct.colors[index].img;
    })
})

currentProductSizes.forEach((size,index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor="rgba(0,0,0,0)";
            size.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white";
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",() => {
    payment.style.display = "flex";
})

close.addEventListener("click",() => {
    payment.style.display = "none";
})