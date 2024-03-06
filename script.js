// This is the boilerplate code given for you
// You can modify this code
// Product data
// JavaScript (script.js)
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];
let cartList=document.getElementById('product-list');
function renderCartProducts(){
	document.getElementById('cart-list').innerHTML="";
	let cart=JSON.parse(sessionStorage.getItem("cart")) || [];
	cart.forEach(product=>{
		
		let listItem=document.createElement('li');
		listItem.innerHTML=`${product.name}- ${product.price}`
		let removeButton=document.createElement('button');
		removeButton.textContent='remove item';
		listItem.appendChild(removeButton);
		document.getElementById('cart-list').appendChild(listItem);
	})
	
}
function renderProducts(){
	products.forEach(product=>{
		let listItem=document.createElement('li');
		listItem.innerHTML=`${product.name} - ${product.price}`;
		let button=document.createElement('button');
	
		button.textContent='Add to cart';
		button.addEventListener('click',(e)=>{
			let cart=JSON.parse(sessionStorage.getItem("cart")) || [];
			cart.push(product);
			sessionStorage.setItem("cart",JSON.stringify(cart));
			renderCartProducts();
		})
		listItem.appendChild(button);
		cartList.appendChild(listItem);
	})
}

renderProducts();





