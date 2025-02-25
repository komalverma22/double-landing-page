const mains=document.querySelector(".main")

const left=document.querySelector(".apple");

const right=document.querySelector(".samsung");

// console.log(left);

left.addEventListener("mouseenter",()=>{
    mains.classList.add("active-left");
});

left.addEventListener("mouseleave",()=>{
    mains.classList.remove("active-left");
});

right.addEventListener("mouseenter",()=>{
    mains.classList.add("active-right")
});

right.addEventListener("mouseleave",()=>{
    mains.classList.remove("active-right")
})