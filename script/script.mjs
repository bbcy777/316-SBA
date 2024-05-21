//validate username and save to localStorage
const user = document.getElementById(`username`);
const form = document.getElementById(`user`);
const userName = ``;

form.addEventListener('submit',handleUsername)

function handleUsername(evt){
    evt.preventDefault();
    const usernameValue = user.value.trim();
    if(!usernameValue.match(/^[a-zA-Z]+$/)){
        user.focus();
        alert(`Name cannot contain any special characters or numbers`)
        return false;
    } else {
        userName = user.value;
        localStorage.setItem(`userName`, userName)
    }
}
//when user submit name on nav bar, show the cart div

function createCart(name, content) {
    const frag = document.createDocumentFragment();


    return frag;
}

//when user add an item in cart, move the h5 element to cart
const menuDiv = document.getElementById(`menu`);

menuDiv.addEventListener('click', handleMenu);

function handleMenu(evt) {
    evt.preventDefault();
    const menuItem = evt.target;
    const title = menuItem.parentElement.firstElementChild.textContent;
}
// //JSON Placeholder API from class example. Not sure what it does
// (async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await res.json();
  
//     posts.forEach((post) => {
//       app.appendChild(createPost(post.title, post.body));
//     });
//   })();