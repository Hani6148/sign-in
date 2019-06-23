
$(document).ready(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyAPxmAi2diLQeRonpMHy2aKtqddx-SlUWI",
    authDomain: "giffy-4bbd5.firebaseapp.com",
    databaseURL: "https://giffy-4bbd5.firebaseio.com",
    projectId: "giffy-4bbd5",
    storageBucket: "giffy-4bbd5.appspot.com",
    messagingSenderId: "867110631855",
    appId: "1:867110631855:web:b8dcf84009420f02"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var myauth = firebase.auth();
    $("#add-user").on("click", function (event) {
      event.preventDefault();
      var email = $("#E-mail-up").val().trim();
      var password = $("#password-up").val().trim();
      var full = $("#full").val().trim();
      
     myauth.createUserWithEmailAndPassword(email, password).catch(function(error) {
       
        
        var errorCode = error.code;
        
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak/username not valid');
        } 
        else{
          
          alert("try again please");
        }
          
      

      });
     
      
      

     });


     $("#sign-in").on("click", function (event) {
      event.preventDefault();
      var email = $("#E-mail-in").val().trim();
      var password = $("#password-in").val().trim();
      
      
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        
        var errorCode = error.code;
        var errorMessage = error.message;
        
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
     
      
      

     });


     firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
        password=user.password
        email=user.email;
       $(".sign").css("display","none");
       $(".profile").css("display","block");
       $("#append-name").append(email);

      } else {
        $(".sign").css("display","block");
        $(".profile").css("display","none");
      
      }
    });




  $("#out").on("click",function(){
    firebase.auth().signOut().then(function() {
      console.log("signed out")
    }).catch(function(error) {
      console.log("failed to sign out")
    });
    });
    
  






































































  });