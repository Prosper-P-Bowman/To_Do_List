let ofAll = [];

function btn_delete(){
    let cancel = document.getElementById('todo_list');
    cancel.remove(cancel.addEventListener("click", function(e){
        if(e.target.tagName === "BUTTON"){
            e.target.parentElement.remove();
        }
    }
));
}


function btn_Add(){
    let inputBox = document.getElementById("input_search");
    let inputList = document.getElementById("input_search").value;
    let container = document.getElementById("top_up");
    let div = document.createElement("div");
    
    
    if(inputList === ''){
        alert("You should types something")
    }else{
       
        let add_Listdocument = `<div id="todo_list" class="todo_list">
                <input class="input" type="radio" name="fav_language"">
                <p>${inputList}</p> 
                <div class="delete_it" onclick="btn_delete()"><button class="delete">X</button></div>
            </div>`
        div.innerHTML = add_Listdocument;
        container.append(div);
        ofAll.push(inputList);
        console.log(ofAll);
    }
    inputBox.value = "";
}





// function btn_Add() {
//     document.getElementById("top_up")
//         .innerHTML +=
//         `<div class="todo_list">
//                 <input class="input" type="radio" name="fav_language" id="input_tasks">
//                 <p>Todo Tasks</p> 
//                 <button class="delete">X</button>
//             </div>`;
// }