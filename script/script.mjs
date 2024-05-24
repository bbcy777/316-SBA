//validate username and save to localStorage
const user = document.getElementById(`username`);
const form = document.getElementById(`user`);
const menuDiv = document.getElementById(`menu`);
const sideDiv = document.getElementById(`cart`);



const buttons = document.querySelectorAll(`.card button`);
let userName = ``;

form.addEventListener('submit',handleUsername)

buttons.forEach(button => {
    button.addEventListener('click', handleMenu);
});

//not working on adding event listener.................
const removeImg = document.querySelectorAll(`.removeBtn`);
console.log(removeImg);
removeImg.forEach(image => {
    image.addEventListener(`click`, removeList);
})
const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener(`click`, (evt)=>{
    evt.preventDefault();
    sideDiv.style.display=`none`
})

//all functions
function handleUsername(evt){
    evt.preventDefault();
    const usernameValue = user.value.trim();
    if(!usernameValue.match(/^[a-zA-Z]+$/)){
        user.focus();
        alert(`Name cannot contain any special characters or numbers`)
        return false;
    } else {
        userName = usernameValue;
        showTemplate();
        form.reset();

        // console.log(userName);
    }
}
//when user submit name on nav bar, show the cart div
function showTemplate() {
    const postTemplate = document.getElementById(`cartUser`);
    const clone = postTemplate.content.cloneNode(`true`);
    const addUser = clone.querySelector(`h4`);
    addUser.textContent = `${userName}'s cart`;

    sideDiv.style.display = `block`;
    sideDiv.appendChild(clone);

    const line = document.createElement(`hr`)
    sideDiv.appendChild(line);

    const submitBtn = document.createElement(`button`);
    submitBtn.textContent = `I'm done!`;
    sideDiv.appendChild(submitBtn);
    submitBtn.classList.toggle(`submitBtn`);
}

//when user add an item in cart, move the h5 element to cart and add a remove button

function handleMenu(evt) {
    evt.preventDefault();
    const menuItem = evt.target;
    const title = menuItem.parentElement.firstElementChild.textContent;


    const menuList = document.createElement(`li`);
    menuList.textContent = title;
    sideDiv.appendChild(menuList);

    const removeBtn = document.createElement(`img`);
    removeBtn.src = `../img/delete.png`
    menuList.appendChild(removeBtn);
    removeBtn.classList.toggle(`removeBtn`);

    
    const line = document.createElement(`hr`)
    menuList.appendChild(line);

    sideDiv.style.position = `sticky`;

    console.log(removeBtn.parentElement)
}

function removeList(el) {
    el.preventDefault();
    console.log(el.target);
}