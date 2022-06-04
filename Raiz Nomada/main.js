console.log("soy externo");

function HacerAparecer1() {
  let contenedor = document.getElementById("canastos");
 contenedor.innerHTML =
    "Canasto de cuero crudo trenzado <br> Medidas: diametro 40cm, Alto 28cm <br> Materiales nobles que aportan calidez a vos y tus espacios <br> Artesanias Correntinas";
}

function HacerAparecer2() {
  let contenedor = document.getElementById("enlozados");
  contenedor.innerHTML =
    "enlozados <br> Jarra gallo colorado bombé <br> Platos 24cm de diamettro y 3cm de profundidad <br> Materiales nobles que aportan calidez a vos y tus espacios <br> Artesanias Correntinas";
}

function HacerAparecer3() {
  let contenedor = document.getElementById("materas");
  contenedor.innerHTML =
    "Materas de cuero peludas <br> Tamaño ideal <br> Materiales nobles que aportan calidez a vos y tus espacios <br> Artesanias Correntinas";
}

function HacerAparecer4() {
  let contenedor = document.getElementById("mesa");
  contenedor.innerHTML =
    "Descripción de la mesa entera <br> Materiales nobles que aportan calidez a vos y tus espacios <br> Artesanias Correntinas";
}


const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})

function addToCarritoItem(e){
const button = e.target 
const item = button.closet('.card')
const itemTitle = item.queryselector('.card-title').textContent;
const itemPrice = item.queryselector('.precio').textContent;
const itemImg = item.queryselector('card-img-top').src;

const newItem = {
  title: itemTitle,
  precio: itemPrice,
  img: itemImg,
  cantidad: 1
}

addItemCarrito(newItem)
}

function addItemCarrito(newItem){


carrito.push(newItem)
  renderCarrito()
}

function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item =>{
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    
    const Content = `
    
    <th scope="row">1</th>
    <td class="table__productos">
      <img src=${item.img} alt="">
        <h6 class="title">${item.title}</h6>
        </td>
        <td class="table__price"><p>${item.precio}</p></td>
        <td class="table__cantidad">
        <input type="number" min="1" value="${item.cantidad}">
          <button class="delete btn btn-danger">x</button>
          </td>
    `
    tr.innerHTML = Content;
    tbody.append(tr)

  })
}
