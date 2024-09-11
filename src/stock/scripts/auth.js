auth.languageCode = 'pt-BR' //traduz o email de verificação
/**/
formLogin.onsubmit = function (e) {
  show(loading)
  e.preventDefault();
  if (btnLogin.innerHTML == 'Acessar') {
    /*Acesso de usuários cadastrados*/
    auth.signInWithEmailAndPassword(formLogin.email.value, formLogin.password.value).then((user) => {
      if (user) {
        window.location.href = '../src/Controle.html' 
      } else {
        console.log('Usuário ou senha incorretos', error)
      }
    }).catch((error) => {
      showError('falha no acesso ', error)
    }).finally(() => {
      hide(loading)
    })
  } else {
    /*criação de usuários*/
    show(loading)
    auth.createUserWithEmailAndPassword(formLogin.email.value, formLogin.password.value).then((user) => {
      if (user) {
        window.location.href = '../src/Controle.html'
      }
    }).catch((error) => {
      showError('falha no cadastro ', error)
    }).finally(() => {
      hide(loading)
    })
  }
}

/*controla usuários autenticados ou não*/ 
auth.onAuthStateChanged(function (user) {

  if (user) {
    showUserContent(user)
      /* Apartir daqui é mostrado o conteudo para o usuário que esta manipulando o gerenciador de estoque*/
  let userId = auth.currentUser.uid
  //exibe os produtos cadastrados em ordem alfabética com o orderBy
  dbFirestore.doc(userId).collection('products').orderBy('nameLowerCase').onSnapshot((dataSnapshot) => {
  showStock(dataSnapshot)
  
  
  
  
  
    /*dbRefUsers.child(userId)
  .orderByChild('name')//ordena por ordem alfabética
  .on('value', function (dataSnapshot) {
    showStock(dataSnapshot)*/
    
    /*função para realizar pesquisa no banco de dados */
    searchProductInput.onkeyup = function () {
      
      let searchText = searchProductInput.value.toLowerCase()
      console.log(searchText)
      // console.log(userId)
      if (searchProductInput.value != '') {
        show(loading)
        dbFirestore.doc(userId).collection('products').orderBy('nameLowerCase').startAt(searchText).endAt(searchText + '\uf8ff').get().then((dataSnapshot) => {
          showStock(dataSnapshot)
        }).then(() => {
          hide(loading)
        })

        /*dbFirestore.child(userId)
        .orderByChild('nameLowerCase')//ordena por ordem alfabética
        .startAt(searchText)
        .endAt(searchText + '\uf8ff')
        .once('value', function (dataSnapshot) {
          showStock(dataSnapshot)
        })*/
      }else{
        showStock(dataSnapshot)
      }
    }
   })

    
  }else{
    console.log('Usuário não autenticado')
  }
})
/*função para sair do sistema*/ 
function signOut() {
  auth.signOut().then(() => {
    alert('Saiu do sistema')
    window.location.href = '.././index.html'
    formLogin.email.value = '' 
    formLogin.password.value = ''
  }).catch((error) => {
    console.log('Falha ao sair do sistema')
    
  })
}


/* função para verificar o email*/ 
function sendEmailVerification(){
 
  let user = auth.currentUser
  user.sendEmailVerification(actionCodeSettings).then(() => {
    alert(`Eamil de verificação enviado para ${user.email}` )
  }).catch((error) => {
    showError('Falha ao enviar email de verificação', error)
    console.log(error)
  })
}
/*função para redefinir a senha */ 
function sendPasswordResetEmail() {
  let email = prompt('Digite o email para redefinir a senha',formLogin.email.value)
  if(email){
    show(loading)
    auth.sendPasswordResetEmail(email, actionCodeSettings).then(() => {
  alert(`Email de redefinição de senha enviado para ${email}`)
    }).catch((error) => {
      showError('Falha ao enviar email de redefinição de senha', error)
      
    }).finally(() => {
      hide(loading)
    })
}else {
  alert('Email não informado')
}
}
function signInWithGoogle() {
  show(loading)
  auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()).then((result) => {
    console.log(result)
    window.location.href = '../src/Controle.html'

  }).catch((error) => {
    showError('Falha ao entrar com o Google', error)
    console.log(error)
  }).finally(() => {
    hide(loading)
  })
}
// atualizar nome de usuário logado com email apenas
function updateUserName() {
  let user = auth.currentUser
  let name = prompt('Digite o nome', user.displayName)
  if(name && name != ''){
    userName.innerHTML = name
    
    user.updateProfile({
      displayName: name
    }).catch((error) => {
      showError('Falha ao atualizar nome', error)
      console.log(error)
    })
  }else {
    alert('Nome não informado')
  }
}
// função para excluir usuário
function deleteUserAccount(){
  show(loading)
  let user = auth.currentUser
  if(confirm('Deseja excluir sua conta?')){
    
    user.delete().then(() => {
      alert('Conta excluída')
      window.location.href = '.././index.html'
    }).catch((error) => {
      hide(loading)
     showError('Falha ao excluir conta', error)
      console.log(error)
    }).finally(() => {
      hide(loading)
    })
  }
}






/*backup*/
// auth.languageCode = 'pt-BR' //traduz o email de verificação
// /**/
// formLogin.onsubmit = function (e) {
//   show(loading)
//   e.preventDefault();
//   if (btnLogin.innerHTML == 'Acessar') {
//     /*Acesso de usuários cadastrados*/
//     auth.signInWithEmailAndPassword(formLogin.email.value, formLogin.password.value).then((user) => {
//       if (user) {
//         window.location.href = '../src/Controle.html'
//       } else {
//         showError('Usuário ou senha incorretos', error)
//       }
//     }).catch((error) => {
//       showError('falha no acesso ', error)
//     }).finally(() => {
//       hide(loading)
//     })
//   } else {
//     /*criação de usuários*/
//     show(loading)
//     auth.createUserWithEmailAndPassword(formLogin.email.value, formLogin.password.value).then((user) => {
//       if (user) {
//         window.location.href = '../src/Controle.html'
//       }
//     }).catch((error) => {
//       if (error){
//         alert('Usuário já cadastrado')
//       }
//     }).finally(() => {
//       hide(loading)
//     })
//   }
// }
// /*controla usuários autenticados ou não*/ 
// auth.onAuthStateChanged(function (user) {

//   if (user) {
//     showUserContent(user)
    
//   }else{
//     console.log('Usuário não autenticado')
//   }
// })
// /*função para sair do sistema*/ 
// function signOut() {
//   auth.signOut().then(() => {
//     alert('Saiu do sistema')
//     window.location.href = '.././index.html'
//     formLogin.email.value = '' 
//     formLogin.password.value = ''
//   }).catch((error) => {
//     console.log('Falha ao sair do sistema')
//     console.log(error)
//   })
// }


// /* função para verificar o email*/ 
// function sendEmailVerification(){
 
//   let user = auth.currentUser
//   user.sendEmailVerification(actionCodeSettings).then(() => {
//     alert(`Eamil de verificação enviado para ${user.email}` )
//   }).catch((error) => {
//     alert('Falha ao enviar email de verificação')
//     console.log(error)
//   })
// }
// /*função para redefinir a senha */ 
// function sendPasswordResetEmail() {
//   let email = prompt('Digite o email para redefinir a senha',formLogin.email.value)
//   if(email){
//     show(loading)
//     auth.sendPasswordResetEmail(email, actionCodeSettings).then(() => {
//   alert(`Email de redefinição de senha enviado para ${email}`)
//     }).catch((error) => {
//       alert('Houve um erro ao enviar o email de redefinição de senha, verifique o email e tente novamente')
//       console.log(error)
//     }).finally(() => {
//       hide(loading)
//     })
// }else {
//   alert('Email não informado')
// }
// }
// function signInWithGoogle() {
//   show(loading)
//   auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()).then((result) => {
//     console.log(result)
//     window.location.href = '../src/Controle.html'

//   }).catch((error) => {
//     alert('Falha ao fazer login com o Google')
//     console.log(error)
//   }).finally(() => {
//     hide(loading)
//   })
// }
// // atualizar nome de usuário logado com email apenas
// function updateUserName() {
//   let user = auth.currentUser
//   let name = prompt('Digite o nome', user.displayName)
//   if(name && name != ''){
//     userName.innerHTML = name
    
//     user.updateProfile({
//       displayName: name
//     }).catch((error) => {
//       alert('Falha ao atualizar nome')
//       console.log(error)
//     })
//   }else {
//     alert('Nome não informado')
//   }
// }
// // função para excluir usuário
// function deleteUserAccount(){
//   let user = auth.currentUser
//   if(confirm('Deseja excluir sua conta?')){
    
//     user.delete().then(() => {
//       alert('Conta excluída')
//       window.location.href = '.././index.html'
//     }).catch((error) => {
//       alert('Falha ao excluir conta')
//       console.log(error)
//     }).finally(() => {
      
//     })
//   }
// }
