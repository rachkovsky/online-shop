let products = JSON.parse(localStorage.getItem('products')) || [];

function showProducts(products) {

	let view = '';

	for (product of products) {
		view += `
        <li class="product">
            <a class="product-link" href="#">
                <div class="product-header">
                    <div class="product-size">size: ${product.size}</div>
                    <div class="product-color">color: ${product.color}</div>
                </div>
                <div class="product-content">
                    <img src="${product.imageUrl || './images/product.png'}" alt="">
                </div>
                <div class="product-footer">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}$</div>
                </div>
            </a>
            <button class="remove-product" data-id="${product.id}">Remove</button>  
        </li>`
	}

	document.querySelector('.products-container').innerHTML = view;

}

function handleForm() {

	const inputs = document.querySelectorAll('form.add-product input[name]');
	let data = {
		id: '',
		name: '',
		price: '',
		size: '',
		color: '',
		gender: '',
		imageUrl: '',
	}

	document.getElementById('add-product').addEventListener('click', (e) => {
		e.preventDefault();

		if (data.name.length >= 3 && data.price) {
			data.id = Date.now();
			products.push(data);
			localStorage.setItem('products', JSON.stringify(products));
			showProducts(products);
			data = {
				id: '',
				name: '',
				price: '',
				size: '',
				color: '',
				gender: '',
				imageUrl: '',
			}
			for (input of inputs) {
				input.value = '';
			}
		} else {
			alert('Incorrect form');
		}

	});

	for (input of inputs) {
		input.addEventListener('input', (e) => {
			data[e.target.attributes.name.value] = e.target.value;
			console.log(data);
		});
	}
}

document.querySelector('.products-container').addEventListener('click', (e) => {
	if (e.target.nodeName = 'BUTTON' && e.target.dataset.id) {
		console.log(e.target.dataset.id);
		products = products.filter((product) => {
			return +product.id !== +e.target.dataset.id;
		});
		localStorage.setItem('products', JSON.stringify(products));
		showProducts(products);
	}
});

showProducts(products);
handleForm();