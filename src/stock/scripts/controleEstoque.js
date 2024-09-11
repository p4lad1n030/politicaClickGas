//area para variaveis globais do sistema de estoque
const createProduct = document.getElementById('createProduct')
var nameProduct = document.getElementById('nameProduct')
var quantity = document.getElementById('quantity')
var price = document.getElementById('price')
const tableManagement = document.getElementById('tableManagement')
const tbody = document.getElementById('tbody')
const showManagement = document.getElementById('showManagement')
const count = document.getElementById('count')
const products = document.getElementById('products')
const createId = function () {
  return Math.random().toString(36).substr(2, 9)
}
const createProductBtn = document.getElementById('createProductBtn')
const updateProductsForm = document.getElementById('updateProduct')
const updateProductBtn = document.getElementById('updateProductBtn')
const updateNameProduct = document.getElementById('updateNameProduct')
const updateQuantity = document.getElementById('updateQuantity')
const updatePrice = document.getElementById('updatePrice')
const createProductDiv = document.getElementById('createProductDiv')
const updateProductDiv = document.getElementById('updateProductsDiv')


// fim da area para variaveis globais do sistema de estoque

//cria os produtos
createProduct.onsubmit = function (e) {
  e.preventDefault();
show(loading)

  if (nameProduct.value !== '' && quantity.value !== '' && price.value !== ''){
    const userId = auth.currentUser.uid
    var product = {
      id: createId(),
      name: nameProduct.value,
      image: '',
      nameLowerCase: nameProduct.value.toLowerCase(),
      quantity: Number(quantity.value),
      price: Number(price.value)
    }
    if (quantity.value > 0 && price.value > 0) {
      dbFirestore.doc(userId).collection('products').add(product).then(() => {
      console.log(product)
      nameProduct.value = ''
      quantity.value = ''
      price.value = ''
      hide(loading)
    }).catch(err => { 
      showError(err)
      console.log(err)
      hide(loading)
     }).finally(() => {
        hide(loading)
     })
    } else {
      alert('quantidade e preço devem ser maiores que 0')
      hide(loading)
    }
    //abaixo realtime

  }else {
    alert('Preencha todos os campos')
    hide(loading)
  }
}

/*mostrando o conteudo para o usuário que esta manipulando o gerenciador de estoque*/
function showStock(dataSnapshot) {
  
  // console.log(dataSnapshot.val());
  let num = dataSnapshot.size
   let vitrine = ''
   count.innerHTML = num + (num > 1 ? ' itens' : ' item')
   dataSnapshot.forEach((produto) => {
    
    let id = produto.id
    var item = produto.data()
  // console.log(id);

      let productsshow = `
      <tr>
        <td class="text-center">${item.id}</td>
        <td class="text-center">${item.name}</td>
        <td class="text-center">${item.quantity}</td>
        <td class="text-center">R$ ${item.price}</td>
        <td class="text-center">
        <button class="btn btn-outline-danger mb-1" id="${id}" onclick ="deleteProduct('${id}')">
          <i class='far fa-trash-alt'></i>
        </button>
        <a href="#updateProductsDiv" class=" text-success"><button class="btn btn-outline-success mb-1" onclick ="updateProduct('${id}','${item.name}','${item.quantity}','${item.price}')">
        <i class='fas fa-edit'></i>
        </button></a>
        </td>
      </tr>
    `
    vitrine += productsshow
  })
  products.innerHTML = vitrine
  
}

// função para deletar o produto
function deleteProduct(id) {
  show(loading)
  let userId = auth.currentUser.uid
  dbFirestore.doc(userId).collection('products').doc(id).delete().catch(err => { console.log(err) }).finally(() => {
    hide(loading)
})
}
// função para atualizar o produto
function updateProduct(key,arg1, arg2, arg3) {
 
  hide(createProductDiv)
  show(updateProductDiv)
  

  updateNameProduct.value = arg1
  updateQuantity.value = arg2
  updatePrice.value = arg3
  updateProductsForm.onsubmit = function (event) {
    show(loading)
    event.preventDefault()
    var product = {
      name: updateNameProduct.value,
      nameLowerCase: updateNameProduct.value.toLowerCase(),
      quantity: updateQuantity.value,
      price: updatePrice.value
    }
    
    let userId = auth.currentUser.uid
    dbFirestore.doc(userId).collection('products').doc(key).update(product).then(() => {

      hide(loading)
      hide(updateProductDiv)
      show(createProductDiv)
    }).then(()=>{
    }).catch(err => { 
      showError(err)
      console.log(err) 
      hide(loading)
    }).finally(() => {
      hide(loading)
      hide(updateProductDiv)
      show(createProductDiv)
    })

    /*dbRefUsers.child(userId).child(key).update(product).then(() => {
      hide(loading)
      show(createProduct)
      updateProducts.reset()
    }).catch(err => { 
      console.log(err) }).finally(() => {
        hide(loading)
        hide(updateProducts)
        show(createProduct)
    })
  }*/
}}




  














  













// td[3].appendChild(spanTd.cloneNode(true))

/* BACKUP*/
//area para variaveis globais do sistema de estoque
// const createProduct = document.getElementById('createProduct')
// var nameProduct = document.getElementById('nameProduct')
// var quantity = document.getElementById('quantity')
// var price = document.getElementById('price')
// const imgProduct = document.getElementById('imgProduct')
// const tableManagement = document.getElementById('tableManagement')
// const tbody = document.getElementById('tbody')
// const showManagement = document.getElementById('showManagement')
// const count = document.getElementById('count')
// // const products = document.getElementById('products')
// const createId = function () {
//   return Math.random().toString(36).substr(2, 9)
// }
// const createProductBtn = document.getElementById('createProductBtn')
// const updateProducts = document.getElementById('updateProduct')
// const updateProductBtn = document.getElementById('updateProductBtn')
// const updateNameProduct = document.getElementById('updateNameProduct')
// const updateQuantity = document.getElementById('updateQuantity')
// const updatePrice = document.getElementById('updatePrice')


// // fim da area para variaveis globais do sistema de estoque
// //cria os produtos
// createProduct.onsubmit = function (e) {
//   e.preventDefault();


//   if (nameProduct.value !== '' && quantity.value !== '' && price.value !== '') {
//     const userId = auth.currentUser.uid
//     var product = {
//       id: null,
//       name: nameProduct.value,
//       quantity: quantity.value,
//       price: price.value
//     }
//     dbRefUsers.child(userId).push(product).then(() => {
//       console.log(product)
//       // alert(` adicionou o iten ${product.name} cadastrado com sucesso`,)
//       nameProduct.value = ''
//       quantity.value = ''
//       price.value = ''
//     }).catch(err => { console.log(err) })
//   }else {
//     alert('Preencha todos os campos')
//   }
// }

// /*mostrando o conteudo para o usuário que esta manipulando o gerenciador de estoque*/
// function showStock(dataSnapshot) {
  
//   console.log(dataSnapshot.val());
//   let num = dataSnapshot.numChildren()
//    let vitrine = ''
//    count.innerHTML = num + (num > 1 ? ' itens' : ' item')
   
//    let td = document.querySelectorAll('td')
   



//    dataSnapshot.forEach((produto) => {
    
//     let key = produto.key
//     var item = produto.val()
  

//       let productsshow = `
//       <tr>
//       <td>${key.substring( 3,8)}</td>
//       <td>${item.name}</td>
//         <td>${item.quantity}</td>
//         <td>${item.price}</td>
//         <td>
//         <button class="btn btn-outline-danger" onclick ="deleteProduct('${key}')">
//           <i class='far fa-trash-alt'></i>
//         </button>
//         <button class="btn btn-outline-success" onclick ="updateProduct('${key}','${item.name}','${item.quantity}','${item.price}')">
//           <i class='fas fa-edit'></i>
//         </button>
//       </td>
//       </tr>
//     `
//     vitrine += productsshow
//   })
//   document.getElementById('products').innerHTML = vitrine
  
// }

// // função para deletar o produto
// function deleteProduct(key) {
//   show(loading)
//   let userId = auth.currentUser.uid
//   dbRefUsers.child(userId).child(key).remove().catch(err => { console.log(err) }).finally(() => {
//     hide(loading)
// })
// }
// // função para atualizar o produto
// function updateProduct(key,arg1, arg2, arg3) {
//   hide(createProduct)
//   show(updateProducts)
//   updateNameProduct.value = arg1
//   updateQuantity.value = arg2
//   updatePrice.value = arg3
//   updateProducts.onsubmit = function (event) {
//     show(loading)
//     event.preventDefault()
//     var product = {
//       name: updateNameProduct.value,
//       quantity: updateQuantity.value,
//       price: updatePrice.value
//     }
//     console.log(product)
//     let userId = auth.currentUser.uid
//     dbRefUsers.child(userId).child(key).update(product).then(() => {
//       hide(loading)
//       show(createProduct)
//       updateProducts.reset()
//     }).catch(err => { 
//       console.log(err) }).finally(() => {
//       hide(updateProducts)
//       show(createProduct)
//     })
//   }
// }
