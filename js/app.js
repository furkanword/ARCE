const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const productos = [
    {
        id: 1,
        nombre: "brownie",
        precio: 30,
        img:"https://eurogrow.es/img/cms/0000/brownie-vegano-cannabico/brownie-vegano-cannabico.jpg",
    },
    {
        id:2,
        nombre: "barquillo",
        precio: 10,
        img:"http://4.bp.blogspot.com/-tD2zdzSJGvc/TchER2ZNPLI/AAAAAAAAADA/KOpLWU7LphY/s1600/Producto-87+%25281%2529.jpg",
    },
    {
        id:3,
        nombre: "galletas",
        precio: 20,
        img:"https://cannabisactualidad.com/wp-content/uploads/2021/07/Como-hacer-galletas-de-marihuana.jpg",
    },
    {
        id:4,
        nombre: "limonada",
        precio: 30,
        img:"https://greensiderec.com/wp-content/uploads/2020/05/cannabis-lemonade-facebook.jpg",
    }
];
let carrito = []
productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img src ="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click",() => {
        carrito.push({
            id : product.id,
            img : product.img,
            nombre : product.nombre,
            precio : product.precio,
        });
        
    });
});
verCarrito.addEventListener("click",() => {
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);
    
    carrito.forEach((product) => {
        let carritoContainer = document.createElement("div");
        carritoContainer.className = "carrito-container";
        carritoContainer.innerHTML = `
        <img class ="img-producto" src="${product.img}"/>
        <h3>${product.nombre}</h3>
        <p> Valor: ${product.precio}</p>
    `;
    modalContainer.append(carritoContainer);


    });
    const total = carrito.reduce((acc,el) => acc +el.precio,0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total}$`;
    modalContainer.append(totalBuying);
});


