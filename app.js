let arrOfTodoList = []

let listCon = document.querySelector(".listContainer")
let add = document.querySelector(".add")
let inputVal = document.querySelector("input")
let deleteBtn = document.querySelector(".delete") 
let editBtn = document.querySelector(".edit")

add.addEventListener("click", ()=> {
// console.log(inputVal.value);
let list = document.createElement("div")
list.classList.add("list")
arrOfTodoList.push(inputVal.value)

arrOfTodoList.forEach(function (val){
    list.innerHTML = `<div class="text">${val}</div>
<div class="btnContainer">
    <div class="edit" onclick="editHandler(this)">edit</div>
    <div class="delete" onclick="deleteHandler(this)">delete</div>
</div>`
})

document.querySelector(".listContainer").appendChild(list)
inputVal.value = ""
})


function deleteHandler(specItem) {
    // specItem.parentElement.parentElement.children[0].innerHTML
    specItem.parentElement.parentElement.style.display = "none"
}

function editHandler(specItem) {
    document.querySelector(".add").style.display = "none"
    document.querySelector(".update").style.display = "flex"
    // console.log (specItem.parentElement.previousElementSibling.innerHTML)
    inputVal.value = specItem.parentElement.previousElementSibling.innerHTML
    specItem.parentElement.parentElement.style.display = "none"
    }   

function nothing() {
    
}

function updateHandler() {

    console.log ("hello")
    let list = document.createElement("div")
list.classList.add("list")
arrOfTodoList.push(inputVal.value)
    arrOfTodoList.forEach(function (val){
        list.innerHTML = `<div class="text">${val}</div>
    <div class="btnContainer">
        <div class="edit" onclick="editHandler(this)">edit</div>
        <div class="delete" onclick="deleteHandler(this)">delete</div>
    </div>`
    })
    listCon.prepend(list)
     document.querySelector(".add").style.display = "flex"
    document.querySelector(".update").style.display = "none"
    inputVal.value = ""
}

