const button = document.querySelector('.menu-toggle');

if (button) {
	button.addEventListener('click', () => {
		document.body.classList.toggle('menu-opened');
	});
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

const genderCheckboxes = document.querySelectorAll('input[type=checkbox][name=gender]');
const filterOptions = {
	gender: []
};
const searchParams = new URLSearchParams(window.location.search);

for (let param of searchParams.entries()) {
	filterOptions[param[0]] = param[1].split(',');
}

for (let checkbox of genderCheckboxes) {
	if (filterOptions[checkbox.name] && filterOptions[checkbox.name].includes(checkbox.value)) {
		checkbox.checked = true;
	}
}


for (let checkbox of genderCheckboxes) {
	checkbox.addEventListener('click', function (e) {
		if (checkbox.checked && !filterOptions[checkbox.name].includes(checkbox.value)) {
			filterOptions[checkbox.name].push(checkbox.value);
		} else {
			const options = filterOptions[checkbox.name];
			for (var i in options) {
				if (options[i] == checkbox.value) {
					options.splice(i, 1);
					break;
				}
			}
		}

		// products = products.filter(product => {
		/// to do ...
		// });

		searchParams.set(checkbox.name, filterOptions[checkbox.name]);
		window.history.replaceState(null, null, window.location.origin + '?' + searchParams.toString());
	});
}

function filterProducts(filterOptions) {

}