const shopContent = document.getElementById("shopContent");

const productos = [
    {
        id: "brownie",
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

let carrito = [];
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
        })
        
    });
});
