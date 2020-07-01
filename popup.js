
// create storage array called "cartMaster"
let cartMaster = [];

// create function to build new cart items
function cartItem(item, url, price, id) {
  (this.item = item), (this.url = url), (this.price = price);
  this.uniqueID = id;
}

// removes item that contains a specific ID and shifts the rest of the array to fill the space
function removeItem(id) {
  for (let i = 0; i < cartMaster.length; i++) {
    if (cartMaster[i].uniqueID === id) {
      delete cartMaster[i];
      for (i; i < cartMaster.length - 1; i++) {
        cartMaster[i] = cartMaster[i + 1];
      }
      cartMaster.pop();
      // chrome.storage.sync.set(cartMaster, function() {alert('saved!')});
      return;
    }
  }
}
// **** commented out function defintion, was providing weird results on page load
// clear the whole cart
function clearCart (e) {
  e.preventDefault();
  cartMaster = [];
  chrome.storage.sync.set(cartMaster, function() {alert('saved!')});
  alert("clearCart: Cart cleared!")
}

// create a unique id for each list item.
// random number between 0 and 1000
// if same as a current ID, it will create another till it is unique
function uniqueIDGenerator() {
  let output = Math.round(Math.random() * 1000);
  for (let i = 0; i < cartMaster.length; i++) {
    if (cartMaster[i].uniqueID === output) {
      output = uniqueIDGenerator();
    }
  }
  return output;
}

// ------------------Adding Comments-------------------------------------
// eslint-disable-next-line func-names
window.onload = function (event) {
  event.stopPropagation();
  chrome.storage.sync.get(cartMaster, function () {
    // alert(cartMaster);
  });
  cartMaster.forEach((el) => alert(el));

// ------------------------ Add items to list -----------------------------


  document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();

    // if list has anu item in it already, clone one
    // else, use default empty link item, and add class list-strt
    const firstLink = document.querySelector('a');
    let listItem;
    if (!$(firstLink).hasClass('list-start')) {
      listItem = document.querySelector('a');
      listItem.classList.add('list-start');
    } else {
      alert('triggf');
      listItem = firstLink.cloneNode(true);
    }
    // select input values
    const item = document.getElementById('item').value;
    const itemUrl = document.getElementById('itemUrl').value;
    const price = document.getElementById('price').value;
    // add item name, price, and url to new link item
    listItem.innerHTML = `${item} $ ${price}`;
    listItem.setAttribute('href', itemUrl);

    // append the item to list, reset form feilds
    document.querySelector('.list-group').appendChild(listItem);
    document.querySelector('form').reset();

    const nextItem = new cartItem(item, itemUrl, price, uniqueIDGenerator());
    // console.log(nextItem)
    cartMaster.push(nextItem);

    chrome.storage.sync.set(cartMaster, function () {
      alert('saved!');
    });
  });
// ------------------------ Clear Cart -----------------------------

  document.getElementById('clear').addEventListener('click', (e) => {
    e.preventDefault();
    cartMaster = [];
    // chrome.storage.sync.set(cartMaster, function() {alert('saved!')});
    alert('clearCart: Cart cleared!');
  });


// ------------------------ theme pickers -----------------------------

  // changes theme color when 'dark' is clicked
  document.getElementById('darktheme').addEventListener('click', (event) => {
    event.preventDefault();
    $('body').toggleClass('bg-dark');
    $('.container').toggleClass('bg-dark');
    $('text-light').toggleClass('text-light');
    $('h2').toggleClass('text-dark');
    $('form label').toggleClass('text-dark');
    $('body').toggleClass('border-dark');
  });

  document.getElementById('lighttheme').addEventListener('click', (event) => {
    event.preventDefault();
    $('body').toggleClass('bg-dark');
    $('.container').toggleClass('bg-dark');
    $('text-light').toggleClass('text-light');
    $('h2').toggleClass('text-dark');
    $('form label').toggleClass('text-dark');
    $('body').toggleClass('border-dark');
  });
  document.getElementById('rainbow').addEventListener('click', (event) => {
    event.preventDefault();
    // $('body').toggleClass('bg-dark');
    // $('#body').toggleClass('bg-dark');
    $('.container').toggleClass('bg-dark');
    $('text-light').toggleClass('text-light');
    $('h2').toggleClass('text-dark');
    $('form label').toggleClass('text-dark');
    $('body').toggleClass('border-light');
    $('#body').toggleClass('rainbow')
  });


  // ----------------- Window onload bracket ----------------------------
};
