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

        // localStorage.setItem(`userName`, JSON.stringify(usernameValue))
        console.log(userName);
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
}

//when user add an item in cart, move the h5 element to cart


function handleMenu(evt) {
    evt.preventDefault();
    const menuItem = evt.target;
    const title = menuItem.parentElement.firstElementChild.textContent;

    const line = document.createElement(`hr`)
    sideDiv.appendChild(line);

    const menuList = document.createElement(`li`);
    menuList.textContent = title;
    sideDiv.appendChild(menuList);

    sideDiv.style.position = `sticky`;
}
