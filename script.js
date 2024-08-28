const inputBox = document.getElementById("input-box");
const Tasks = document.getElementById("tasks");

function addTask(){
   if(inputBox.value === ''){
    alert(" plese Write Somthing here ");
   }
else{
  let li = document.createElement('li');
  li.innerHTML= inputBox.value;
  Tasks.appendChild(li);
  let Span = document.createElement('span');
  Span.innerHTML ="\u00d7";
  li.appendChild(Span);
}
inputBox.value = '';

}
Tasks.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("cheked");
  }
  else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
  }
},false);