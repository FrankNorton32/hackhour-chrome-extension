// add popup functionality here

// add items to list

// create storage array called "cartMaster"
const cartMaster = [];

// create function to build new cart items
function cartItems (item, url, price, id) {
  this.item = item,
  this.url = url,
  this.price = price;
  this.uniqueID = id
}
 
// removes item that contains a specific ID and shifts the rest of the array to fill the space
function removeItem (id) {
  for (let i = 0; i < cartMaster.length; i++) {
    if (cartMaster[i].uniqueID === id) {
      delete cartMaster[i];
      for (i; i < cartMaster.length - 1; i++) {
        cartMaster[i] = cartMaster [i + 1];
      }
      cartMaster.pop()
      return;
    }
  }
}

// create a unique id for each list item.
// random number between 0 and 1000
// if same as a current ID, it will create another till it is unique
function uniqueIDGenerator () {
  let output = Math.round(Math.random() * 1000);
  for (let i = 0; i < cartMaster.length; i++) {
    if (cartMaster[i].uniqueID === output) {
      output = uniqueIDGenerator();}
  }
  return output;
}

// ------------------Adding Comments---------------------------
// eslint-disable-next-line func-names
window.onload = function () {
  document.getElementById('submit').addEventListener('click', (e) => {
    const item = document.getElementById('item').value;
    // alert(`item: ${item}`)
    const itemUrl = document.getElementById('itemUrl').value;
    // alert(`item: ${itemUrl}`)
    const price = document.getElementById('price').value;
    // alert(`item: ${price}`)
    const list = document.querySelector('.list-group');
    // create new link element
    const listItem = document.createElement('A');
    listItem.innerHTML = `${item}: ${price}`;
    alert(`item: ${listItem}`);

    listItem.classList.add('list-group-item', 'list-group-item-action');

    // append the item to list
    document.querySelector('.list-group').appendChild(listItem);

    const nextItem = new cartItem(item, itemUrl, price, uniqueIDGenerator());
    // alert(`${nextItem}`)
    cartMaster.push(nextItem);
    // alert(`${cartMaster}`)
  });
};

// ${item}: ${price}
// $('.feed').on('click', '.submit-comment', function (e) {
//   let newComm = $(e.target).prev().val();
//   let currentPost = $(e.target).prev().prev().eq(0);
//       // append comment to corresponding post
//   $(currentPost).append(newComm);
//       $(e.target).prev().val("")
//   })
