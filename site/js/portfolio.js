let cartimg = document.querySelector(".cartimg")
let name = document.querySelector("#changename")

cartimg.addEventListener("mouseenter", ()=>{
cartimg.src = "https://ict4kids.files.wordpress.com/2013/05/mrc-2.png"
});
cartimg.addEventListener("mouseleave", ()=>{
    cartimg.src = "https://banner2.cleanpng.com/20180626/fhs/kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg"
    });

name.addEventListener("click", () =>{
    document.getElementById("name") = prompt("What is your name?");

})

