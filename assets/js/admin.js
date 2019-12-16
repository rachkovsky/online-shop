// let products = JSON.parse(localStorage.getItem('products')) || [];

// function showProducts(products) {

//     let view = '';

//     for (product of products) {
//         view += `
//         <li class="product">
//             <a class="product-link" href="#">
//                 <div class="product-header">
//                     <div class="product-size">size: ${product.size}</div>
//                     <div class="product-color">color: ${product.color}</div>
//                 </div>
//                 <div class="product-content">
//                     <img src="${product.imageUrl || './images/product.png'}" alt="">
//                 </div>
//                 <div class="product-footer">
//                     <div class="product-name">${product.name}</div>
//                     <div class="product-price">${product.price}$</div>
//                 </div>
//             </a>
//             <button class="remove-product" data-id="${product.id}">Remove</button>  
//         </li>`
//     }

//     document.querySelector('.products-container').innerHTML = view;

// }

// function handleForm() {

//     const inputs = document.querySelectorAll('form.add-product input[name]');
//     const addProduct = document.getElementById('add-product');
//     let data = {
//         id: '',
//         name: '',
//         price: '',
//         size: '',
//         color: '',
//         gender: '',
//         imageUrl: '',
//     }
//     if (addProduct) {
//         document.getElementById('add-product').addEventListener('click', (e) => {
//             e.preventDefault();

//             if (data.name.length >= 3 && data.price) {
//                 data.id = Date.now();
//                 products.push(data);
//                 localStorage.setItem('products', JSON.stringify(products));
//                 showProducts(products);
//                 data = {
//                     id: '',
//                     name: '',
//                     price: '',
//                     size: '',
//                     color: '',
//                     gender: '',
//                     imageUrl: '',
//                 }
//                 for (input of inputs) {
//                     input.value = '';

//                 }
//             } else {
//                 alert('Incorrect form');
//             }

//         });
//     }


//     for (input of inputs) {
//         input.addEventListener('input', (e) => {
//             data[e.target.attributes.name.value] = e.target.value;
//             // console.log(data);
//         });
//     }
// }

// document.querySelector('.products-container').addEventListener('click', (e) => {
//     if (e.target.nodeName = 'BUTTON' && e.target.dataset.id) {
//         // console.log(e.target.dataset.id);
//         products = products.filter((product) => {
//             return +product.id !== +e.target.dataset.id;
//         });
//         localStorage.setItem('products', JSON.stringify(products));
//         showProducts(products);
//     }
// });

// showProducts(products);
// handleForm();



const form = document.querySelector('.add-product');
const sendButton = document.querySelector('#add-product');
var formData;

sendButton.addEventListener('click', function (e) {
    e.preventDefault();
    formData = new FormData(form);

    for (var value of formData.entries()) {
        formData.set(value[0], value[1]);
        console.log(value);
    }

    const url = 'http://localhost:3000/add-product';

    fetch(url, {
        method: 'POST', // или 'PUT'
        body: JSON.stringify({ ololo: 5 }), // данные могут быть 'строкой' или {объектом}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        console.log('success: ', res);
    }).catch((err) => {
        console.log('error:', err);
    });



});