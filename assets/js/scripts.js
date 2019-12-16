document.addEventListener('DOMContentLoaded', (event) => {

	const button = document.querySelector('.menu-toggle');

	if (button) {
		button.addEventListener('click', () => {
			document.body.classList.toggle('menu-opened');
		});
	}

	const filter = {
		gender: ['men'],
		price: {
			min: '0',
			max: '9000'
		}
	}

	let products = JSON.parse(localStorage.getItem('products')) || [];

	function showProducts(products) {

		let view = '';

		for (product of products) {
			view += `
        <li class="product">
            <a class="product-link" href="#">
                <div class="product-header">
                    <div class="product-size">size: ${product.size || ''}</div>
                    <div class="product-color">color: ${product.color || 'unknown'}</div>
                </div>
                <div class="product-content">
                    <img src="${product.imageUrl || './images/product.png'}" alt="">
                </div>
                <div class="product-footer">
                    <div class="product-name">${product.name || ''}</div>
                    <div class="product-price">${product.price || ''}$</div>
                </div>
            </a>
        </li>`
		}

		document.querySelector('.products-container').innerHTML = view;

	}


	function addProduct() {
		products.push({
			name: 'New',
			size: 'XXL',
			color: 'green',
			image: './images/product2.png',
			price: '115'
		});
		showProducts(products);
	}


	showProducts(products);



	// filter
	const menCheckbox = document.getElementById('checkbox-men');
	// const womenCheckbox = document.getElementById('checkbox-women');
	if (menCheckbox) {
		const searchParams = new URLSearchParams(window.location.search);
		for (let param of searchParams) {
			if (param[0] === menCheckbox.value) {
				menCheckbox.checked = true;
				products = products.filter((product) => {
					return product.gender === menCheckbox.value;
				});
				showProducts(products);
			}
		}


		menCheckbox.addEventListener('change', (e) => {

			if (e.target.checked) {
				searchParams.set(e.target.value, 'true');
				window.history.replaceState(null, null, window.location.origin + '?' + searchParams.toString());
				if (menCheckbox.checked === true) {
					products = products.filter((p) => {
						return p.gender === 'men';
					});
				}
				showProducts(products);

			} else {
				searchParams.delete(e.target.value);
				window.history.replaceState(null, null, window.location.origin + '?' + searchParams.toString());
				products = JSON.parse(localStorage.getItem('products'));
				showProducts(products);
			}
		});

		if (menCheckbox.checked === true) {
			products = products.filter((p) => {
				return p.gender === 'men';
			});
		}

	}

});