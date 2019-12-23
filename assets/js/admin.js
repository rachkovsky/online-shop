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
//             console.log(data);
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

const params = {
    name: {
        required: {
            value: true,
            errorMessage: 'Field is required'
        },
        minLength: {
            value: 2,
            errorMessage: 'Value is too shoort'
        }
    },
    price: {
        required: {
            value: true,
            errorMessage: 'Price is required'
        },
    }
};


const form = document.querySelector('.add-product');
const addProductButton = document.getElementById('add-product');


if (form) {
    addProductButton.addEventListener('click', function (e) {
        e.preventDefault();
        let isValid = validateForm(params, form);

        if (isValid) {
        // let data = new URLSearchParams(new FormData(form)).toString();
    
        // fetch('/add-product', {
        //     method: 'POST',
        //     body: data,
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }).then((res) => {
        //     console.log('Success: ', res);
        // }).catch((err) => {
        //     console.log('Error: ', err);
        // });
    
        }
        
    });

}




function validateForm(params, form) {

    if (form) {
        [...form.elements].forEach(function(el, i){
            // console.log(el.name);
            if (el.name && el.name in params) {
                for (rule in params[el.name]) {
                    switch (rule) {
                        case 'required' :
                            console.log(rule);
                            if (params[el.name][rule].value === true) {
                                if  (el.value === '') {
                                    // console.log('empty');
                                    var a = document.createElement("div");
                                    a.className = "error";
                                    a.innerText = params[el.name][rule].errorMessage;
                                    el.parentElement.appendChild(a);
                                } else {
                                    console.log('not empty');
                                }
                            }
                        case 'minLength' : 
                            // console.log('');
                    }
                }
            }
        });
    }


}

// validateForm({}, form);
