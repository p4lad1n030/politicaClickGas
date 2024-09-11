const firebaseConfig = {
  apiKey: "AIzaSyCjhLUAD3amEgXbc9xWg0X6MBykjz1tBFQ",
  authDomain: "gerenciador-de-estoque-17012.firebaseapp.com",
  projectId: "gerenciador-de-estoque-17012",
  storageBucket: "gerenciador-de-estoque-17012.appspot.com",
  messagingSenderId: "432612750377",
  appId: "1:432612750377:web:ca2a39d381aec33f171838"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
const dbRefUsers = database.ref('users')
//referencia para o nó users do firestore
const dbFirestore = firebase.firestore().collection('users')

