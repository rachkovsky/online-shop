const button = document.querySelector('.menu-toggle');

button.addEventListener('click', () => {
    document.body.classList.toggle('menu-opened');
});

const products = [
    {
        name: 'T-shirt',
        size: 'M',
        color: 'green',
        image: './images/product.png',
        price: '15'
    },
    {
        name: 'Pants',
        size: 'S',
        color: 'yellow',
        image: './images/product.png',
        price: '25'
    },
    {
        name: 'Pants',
        size: 'L',
        color: 'black',
        image: './images/product2.png',
        price: '45'
    },
    {
        name: 'Pants',
        size: 'L',
        color: 'black',
        image: './images/product2.png',
        price: '45'
    },
    {
        name: 'Pants',
        size: 'L',
        color: 'black',
        image: './images/product.png',
        price: '45'
    },
];

function showProducts(products) {

    let view = '';

    for (product of products) {
        console.log(product);
        view += `
        <li class="product">
            <a class="product-link" href="#">
                <div class="product-header">
                    <div class="product-size">size: ${product.size}</div>
                    <div class="product-color">color: ${product.color}</div>
                </div>
                <div class="product-content">
                    <img src="${product.image}" alt="">
                </div>
                <div class="product-footer">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${product.price}$</div>
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

document.querySelector('#add-product').addEventListener('click', () => {
    addProduct();
});

showProducts(products);