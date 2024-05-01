var input=document.getElementById("todoInput")
function addTodo(){
    console.log(input.value);
    var list=document.getElementById('list');
    list.innerHTML +=`<li>${input.value}
    <button onclick="editItem(this)">edit</button>
    <button onclick="deleteItem(this)">delete</button></li>`

    input.value=""
}

// Delete all function
function deleteAll(){
        var list=document.getElementById("list")
        list.innerHTML=""
    }

// delete single todo
function deleteItem(e){
    e.parentNode.remove();
}

// edit single todo
function editItem(e){
    var update=prompt("Update new todo:");
    e.parentNode.firstChild.nodeValue= update;
}
