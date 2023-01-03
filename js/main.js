// let link=document.getElementById("link")
// link.addEventListener("click",e=>{
// e.preventDefault();})

let form=document.getElementById("form")
let input=document.getElementById("input")
let posts=document.getElementById("posts")
console.log( posts.parentNode);

form.addEventListener("submit",e=>{
    e.preventDefault();
    readpost();
})
let data={};
function readpost(){
    data["text"]=input.value;
    console.log(data);
    createpost();
}
function createpost(){
    posts.innerHTML +=`<div>
        <p>${data.text}</p>
        <span class="option">
            <i onclick="update(this)" class="fa fa-edit">Edit</i><br>
            <i onclick="deletepost(this);" class="fa fa-trash">Delete</i>
        </span>
    </div>`
    input.value="";
}
function deletepost(e){
    e.parentNode.parentNode.remove();
};
function update(e){
    input.value=e.parentNode.previousElementSibling.innerText;
    e.parentNode.parentNode.remove();
};