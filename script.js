const theform=document.getElementById("theinputform");
const input1=document.getElementById("theinput");
const thelist=document.getElementById("list-ul");


const storage=JSON.parse(localStorage.getItem("things-in-storage")) || [];

function renderNotes() {
    thelist.innerHTML = "";
    storage.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        thelist.appendChild(li);
    })}


renderNotes();

theform.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (input1.value.trim()===""){
        alert("you submitted an emty note");
        return;
    }
    storage.push(input1.value);
    localStorage.setItem("things-in-storage",JSON.stringify(storage));
    input1.value="";
    renderNotes();
 }

);



