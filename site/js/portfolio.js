const changeAvatar = document.querySelector("#changableAvatar")
changeAvatar.addEventListener("click", function(){
    changeAvatar.src="image/avatar.svg"
})

const name = document.querySelector("#nameChange")
name.addEventListener("click", function(){
    let newColour = prompt("Please enter a colour")
    let newName = prompt("Please enter your name")
    document.querySelector("#name").textContent = newName
    document.querySelector("#name").style.color = "white"
    document.querySelector(".pink-bg").style.backgroundColor = newColour
    document.querySelector("#pink-bg2").style.backgroundColor = newColour
    document.querySelector("#pink-1").style.color = newColour
    document.querySelector("#pink-2").style.color = newColour
    document.querySelector("#pink-3").style.color = newColour
    document.querySelector("#pink-4").style.color = newColour

})