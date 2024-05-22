const firebaseConfig = {
    apiKey: "AIzaSyCvxrvp0mP_aYGxtWG5Vqig3EJJWWqa09k",
    authDomain: "projectone-abcd9.firebaseapp.com",
    projectId: "projectone-abcd9",
    databaseURL: "https://projectone-abcd9-default-rtdb.firebaseio.com",
    storageBucket: "projectone-abcd9.appspot.com",
    messagingSenderId: "191169989808",
    appId: "1:191169989808:web:1fbe8b01bed10b9be2ff75"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  
  
  firebase.database().ref("todos/").on("child_added", function(data){
      console.log(data.val().todoValue)
      var list=document.getElementById('list');
      list.innerHTML += `<li>${data.val().todoValue}
  <button onclick="editItem(this)" id=${data.val().key}>edit</button>
  <button onclick="deleteItem(this)" id=${data.val().key}>delete</button></li>`;
  
  
  })
  
  function addTodo(){
      var input=document.getElementById("todoInput");
      var id=Date.now().toString(25);
      var obj={
          key: id,
          todoValue: input.value
      }
    
      firebase.database().ref("todos/" +id).set(obj);
      console.log(obj)
  
  }
  

  
  // Delete all function
  function deleteAll(){
          firebase.database().ref("todos").remove();
          var list=document.getElementById("list");
          list.innerHTML=""
      }
  
  // delete single todo
  function deleteItem(e){
      firebase.database().ref('todos/'+ e.id).remove();
      e.parentNode.remove();
  }
  
  // edit single todo
  function editItem(e){
      var validId=e.id;
      var update=prompt("Update your value:");
      firebase.database().ref('todos/'+validId).set({
          key: e.id,
          todoValue: update,
      })
      e.parentNode.firstChild.nodeValue= update;
  }