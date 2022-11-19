

const productsData = [
    {
        id:1,
        nombre: "camperas",
        category: 'camperas',
        precio: 50,
        img:"./assets/img.vscode/accesorios.PNG"
    },
    {
        id:2,
        nombre: "remeras",
        category:'remeras',
        precio: 50,
        img:"./assets/img.vscode/accesorios2.PNG"
    },
    {
        id:3,
        nombre: "pantalones",
        category:'pantalones',
        precio: 50,
        img:"./assets/img.vscode/accesorios3.PNG"
    },
    {
        id:4,
        nombre: "calzado",
        category:'calzado',
        precio: 50,
        img:"./assets/img.vscode/accesorios4.jpg"
    },
    {
        id:5,
        nombre: "accesorios",
        category:'accesorios',
        precio: 50,
        img:"./assets/img.vscode/accesorios5.jpg"
    },
];


const shopContent = document.getElementById('shopContent');
const products = document.getElementById('products-container');
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");


productsData.forEach((product) => {
    
    let content = document.createElement('div');
    const { nombre, precio, category, img} = product;
    content.innerHTML +=`
    <img src=${img}>
    <h3>${nombre}</h3>
    <p class="precioProducto">${precio}</p>
    <p> ${category}</p>
    `;
    
    
    shopContent.append(content);
    


categoriesList.forEach ((button) => {
    button.addEventListener('click', e => {
        e.preventDefault();
            
        const selectedCategory = e.target.dataset.category 
        const productList = productsData.filter(
            (product) => product.category === category);
            products.innerHTML = productList.join("");
            
            
            console.log(category)
        })
    })
});
/*NO FUNCIONA*/