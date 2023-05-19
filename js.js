Let allTotal = 0;
function addToCart(element) {
	Let mainE1 = element.closest('.single-item');
	Let price = mainE1.querySelector('.price').innerText;
	Let name = mainE1.querySelector('h').innerText;
	Let quantity = mainE1.querySelector('input').value;
	Let cartItems = document.querySelector('.cart-items');
	
	if(parseInt(quantity) > 0) {
		price = price.substring(1);
		price = parseInt(price);
		Let total = price * parseInt(quantity);
	
		allTotal += total;
		
		cartItems.innerHTML +=  'div class="cart-single-item">
									<h3>${name}</h3>
									<p>$${price} x ${quantity} = $${total}</p>
									<button>Ukloni</button>
								</div>'; 
		document.querySelector('.total').innerText = 'Total: ${total}';
		
		element.innerText = 'Dodato'; 
		element.setAtrribute('disabled', 'true');
	} else {
		alert('Odaberi kolicinu');
	}
}
	
	
	
}
Let mainE1 = element.closest('.cart-single-item');
Let price = mainE1.querySelector('p span').innerText;
Let name = mainE1.querySelector('h3').innerText;
Let vegetables = document.querySelectorAll('.single-item');

price = parseInt(price);

allTotal = price;

document.querySelector('.total').innerText = 'Total: $${allTotal}';
mainE1.remove();

vegetables.forEach(function(vege) {
	Let itemName = vege.querySelector('.si-content h3').innerText;
	
	if(itemName === name) {
		vege.querySelector('.actions input').value = 0;
		vege.querySelector('.actions button').removeAttribute('disabled');
		vege.querySelector('.actions button').InnerText = 'Dodaj' ;
}

}};

}