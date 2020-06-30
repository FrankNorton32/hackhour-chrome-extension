// add popup functionality here

// add items to list

// create storage array called "cartMaster"
const cartMaster = [];
// create function to build new cart items
function cartItems (item, itemUrl, price) {
  this.item = item,
  this.url = itemUrl,
  this.price = price
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

    const nextItem = new cartItem(item, itemUrl, price);
    // alert{`${nextItem}`}
    cartMaster.push(nextItem);
    // alert{`${cartMaster}`}
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
