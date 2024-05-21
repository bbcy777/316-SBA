//validate username
const user = document.getElementById(`username`);
const form = document.getElementById(`user`);

form.addEventListener('submit',validateUsername)

function validateUsername(){
    const usernameValue = user.value.trim();
    if(!usernameValue.match(/^[a-zA-Z]+$/)){
        user.focus();
        alert(`Name cannot contain any special characters or numbers`)
        return false;
    }
}
//when user submit name on nav bar, show the cart div

//when user add an item in cart, move the h5 element to cart