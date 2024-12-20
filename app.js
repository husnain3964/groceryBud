let inpval = document.querySelector(".input");
let submitBtn = document.querySelector(".submit");
let main = document.querySelector(".todoOO");
let userList = [];
submitBtn.addEventListener("click", () => {
  userList.push(inpval.value);

  let todoContainer = document.createElement("div");

  userList.forEach((todo, index) => {
    let singleList = `
 <div  class='list' id='${index}'>
    <li  >${todo}</li>
    <button  class='edit' onclick='editVal(this)' >edit</button>
    <button onclick='del(this)' >delete</button> 
    </div>
    `;

    todoContainer.innerHTML = singleList;
    inpval.value = "";
  });
  main.appendChild(todoContainer);
  console.log(userList);
});

let del = (delVal) => {
  //     console.warn('del');
  //    console.log(val.parentElement);

  userList.splice(delVal.parentElement.id, 1);
  //   console.log(userList);
  delVal.parentElement.remove();
};

let editVal = (editValue) => {
  let edVal = editValue.parentElement.childNodes[1];
  // console.log(edVal);
  inpval.value = edVal.innerText;
  // let update= document.querySelector('.edit')
  // let update = document.querySelector(".edit");
  let update = editValue
  update.innerText = "update";
  update.removeAttribute("onclick");
  update.setAttribute("onclick", "updatee(this)");
};
let updatee = (val) => {
  console.log(inpval.value);
  val.parentElement.childNodes[1].innerHTML = inpval.value;
// console.log('update');
  let update = val;
  update.innerText = "edit";
  update.removeAttribute("onclick", );
  update.setAttribute("onclick", "editVal(this)");
};
