const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input")


const generateTemplate = (todo) => {

        const html = ` 
             <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>
             </li> 
           `;
  list.innerHTML += html 

}

addForm.addEventListener("submit", e => {
  e.preventDefault()
  

  const todo = addForm.add.value.trim();

  if (todo.length) {

  generateTemplate(todo)

  } else {}

  addForm.reset()
})

list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
       e.target.parentElement.remove() 
    }
})

const filteredTodos = (term) => {
   const lists = Array.from(list.children)

   for (let i = 0; i < lists.length; i++) {

     let option = lists[i]
     
    if (option.textContent.toLowerCase().includes(term)) {
      option.classList.remove("hide")
    } else {
      option.classList.add("hide") 
    }
    
   }
  
}

search.addEventListener("keyup", ()=>{
  const term = search.value.trim().toLowerCase()
  
  filteredTodos(term)

})