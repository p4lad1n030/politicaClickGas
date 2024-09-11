const formLogin = document.getElementById("management");
const btnLogin = document.getElementById("login");
const btnRegister = document.getElementById("register");
const access = document.getElementById("access");
const Title = document.getElementById("Title");
const loading = document.getElementById("loading");
const userEmail = document.getElementById("userEmail");
const userName = document.getElementById("userName");
const sendEmailVerificationDiv = document.getElementById(
  "sendEmailVerificationDiv"
);
const emailVerified = document.getElementById("emailVerified");
const actionCodeSettings = {
  url: "https://p4lad1n030.github.io/Gerenciador-de-estoque/",
};
const passwordReset = document.getElementById("passwordReset");
const fileImg = document.getElementById("file");
const userImage = document.getElementById("userImage");
const unknowName = document.getElementById("unknowName");
const searchProductInput = document.getElementById("searchProductInput");
const loading1 = document.getElementById("loading1");
const progress = document.getElementById("progress");
const playPauseBtn = document.getElementById("playPauseBtn");
const stopBtn = document.getElementById("stopBtn");

function registerAction() {
  btnLogin.innerHTML = "Cadastrar Conta";
  hide(btnRegister);
  showInLine(access);
  hide(passwordReset);
}
function LoginAction() {
  btnLogin.innerHTML = "Acessar";
  showInLine(btnRegister);
  hide(access);
  show(passwordReset);
}

function show(element) {
  element.style.display = "block";
}
function showInLine(element) {
  element.style.display = "inline-block";
}
function hide(element) {
  element.style.display = "none";
}

/*função que ira mostrar o conteudo para usuarios autenticados */
function showUserContent(user) {
  fileImg.onchange = function (e) {
    arquive = e.target.files[0];

    console.log(user);
    if (arquive) {
      if (arquive.type.includes("image")) {
        let userId = auth.currentUser.uid;
        let imgName = database.ref().push().key + "-" + arquive.name;
        let imgPath = `usersImage/${userId}/${imgName}`;
        // console.log(storageRef)
        const storageRef = firebase.storage().ref(imgPath);
        let upload = storageRef.put(arquive); //aqui manda a foto pro storage

        // função pra setar a foto do usuário
        trackUpload(upload).then(function () {
          show(loading);
          storageRef
            .getDownloadURL()
            .then(function (url) {
              changePicture(url,user);
              
            })
            .catch(function (error) {
              hide(loading);
             showError('Erro ao setar a foto do usuário', error)
            })
            .finally(function () {
              hide(loading);
            });
        });
      }
    } else {
      alert("O arquivo precisa ser uma imagem, ou foi cancelado pelo usuário");
    }
  };

  if (user.emailVerified) {
    emailVerified.innerHTML = "Email verificado";
    hide(sendEmailVerificationDiv);
  } else {
    emailVerified.innerHTML = "Email não verificado";
    show(sendEmailVerificationDiv);
  }
  /*abaixo codigo pra prgara url vinda do user */
  userImage.src = user.photoURL
    ? user.photoURL
    : ".././assets/img/unknownUser.png";
  userImage.style.marginTop = "30px";
  userImage.style.height = "100px";
  userName.innerHTML = user.displayName;
  userEmail.innerHTML = user.email;
}

function trackUpload(upload) {
  return new Promise((resolve, reject) => {
    upload.on(
      "state_changed",
      function (snapshot) {
        show(loading1);
        progress.value =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      function (error) {
        hide(loading1);
        reject(error);
        showError('Erro ao enviar a foto', error)
      },
      function () {
        hide(loading1);
        console.log("Upload complete");
        resolve();
      }
    );
    let playPauseUpLoad = true;
    playPauseBtn.onclick = function () {
      if (playPauseUpLoad) {
        upload.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        playPauseUpLoad = false;
      } else {
        upload.resume();
        playPauseUpLoad = true;
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }
    };
    stopBtn.onclick = function () {
      upload.cancel();
      hide(loading1);
      playPauseUpLoad = false;
    };
  }); //promise
}

function changePicture(url, user) {
  user.updateProfile({
    photoURL: url,
  });
  userImage.src = url;
  
}


// tratamento de erros
function showError(prefix, error) {
    console.log(error.code)
    
  
    switch (error.code) {
      case 'auth/invalid-email': alert(prefix + ' ' + 'E-mail inválido!')
        break;
      case 'auth/wrong-password': alert(prefix + ' ' + 'Senha inválida!')
        break;
      case 'auth/weak-password': alert(prefix + ' ' + 'Senha deve ter ao menos 6 caracteres!')
        break;
      case 'auth/email-already-in-use': alert(prefix + ' ' + 'E-mail já está em uso por outra conta!')
        break;
      case 'auth/popup-closed-by-user': alert(prefix + ' ' + 'O popup de autenticação foi fechado antes da operação ser concluída!')
        break;
      case 'storage/canceled':
        break;
      case 'storage/unauthorized': alert(prefix + ' ' + 'Falha ao acessar o Cloud Storage!')
        break;
      case 'auth/user-not-found': alert(prefix + ' ' + 'Usuário não encontrado!')
        break;
      
  
      default: alert(prefix + ' ' + error.message)
    }
  }

// const formLogin = document.getElementById('management')
// const btnLogin = document.getElementById('login')
// const btnRegister = document.getElementById('register')
// const access = document.getElementById('access')
// const Title = document.getElementById('Title')
// const loading = document.getElementById('loading')
// const userEmail = document.getElementById('userEmail')
// const userName = document.getElementById('userName')
// const sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv')
// const emailVerified = document.getElementById('emailVerified')
// const actionCodeSettings = {
//   url: 'http://127.0.0.1:5500/index.html',
// }
// const passwordReset = document.getElementById('passwordReset')
// const fileImg = document.getElementById('file')
// const userImage = document.getElementById('userImage')
// const unknowName = document.getElementById('unknowName')
// const searchProductInput = document.getElementById('searchProductInput')
// const loading1 = document.getElementById('loading1')
// const progress = document.getElementById('progress')
// const playPauseBtn = document.getElementById('playPauseBtn')
// const stopBtn = document.getElementById('stopBtn')

// function registerAction() {
//   btnLogin.innerHTML = 'Cadastrar Conta'
//   hide(btnRegister)
//   showInLine(access)
//   hide(passwordReset)

// }
// function LoginAction() {
//   btnLogin.innerHTML = 'Acessar'
//   showInLine(btnRegister)
//   hide(access)
//   show(passwordReset)
// }

// function show(element) {
//   element.style.display = 'block';
// }
// function showInLine(element) {
//   element.style.display = 'inline-block';
// }
// function hide(element) {
//   element.style.display = 'none';
// }

// /*função que ira mostrar o conteudo para usuarios autenticados */
// function showUserContent(user) {
//   userImage.src = user.photoURL ? user.photoURL : '.././assets/img/unknownUser.png'
//   userImage.style.marginTop = '30px'
//   userName.innerHTML = user.displayName
//   userEmail.innerHTML = user.email
//   // console.log(auth.currentUser)
//   fileImg.onchange = function(e,user) {
//     arquive = e.target.files[0]
// // console.log(user);
//   if (arquive) {
//     if (arquive.type.includes('image') ) {
//       let userId = auth.currentUser.uid
//       let imgName = database.ref().push().key + '-' + arquive.name
//       let imgPath = `usersImage/${userId}/${imgName}`
//       // console.log(storageRef)
//       const storageRef = firebase.storage().ref(imgPath)
//       let upload = storageRef.put(arquive)
//       trackUpload(upload)

//     }

//   } else {
//   alert('O arquivo precisa ser uma imagem, ou foi cancelado pelo usuário')
//   }
// }

//   if (user.emailVerified) {
//     emailVerified.innerHTML = 'Email verificado'
//     hide(sendEmailVerificationDiv)

//   } else {
//     emailVerified.innerHTML = 'Email não verificado'
//     show(sendEmailVerificationDiv)

//   }
// }

// // exibe o progresso do upload para o usuário
// function trackUpload(upload) {
//   upload.on('state_changed'
//   , function(snapshot) {
//     show(loading1)
//     progress.value = snapshot.bytesTransferred / snapshot.totalBytes * 100
//   }, function(error) {
//     console.log(error)
//     hide(loading1)
//   }, function() {
//     hide(loading1)
//     console.log('Upload complete')
//   })
//   let playPauseUpLoad = true;
//   playPauseBtn.onclick = function() {
//     if (playPauseUpLoad) {
//       upload.pause()
//       playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
//       playPauseUpLoad = false
//     } else {
//       upload.resume()
//       playPauseUpLoad = true
//      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
//     }
//   }
//   stopBtn.onclick = function() {
//     upload.cancel()
//     hide(loading1)
//     playPauseUpLoad = false
//   }
// }
