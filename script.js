const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

//it will create task 
function addTask(){
      if(inputBox.value===''){
            alert("you must write something");
      }
      else{
            let li=document.createElement("li");
            li.innerHTML=inputBox.value;
            listContainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
      }
      inputBox.value="";
      saveData();
}

//it will check or remove the task 
listContainer.addEventListener("click",function(e){
      if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
      }
      else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
      }
},false);

//save the data
function saveData(){
      localStorage.setItem("data",listContainer.innerHTML);
}

//show task 
function showTask(){
      listContainer.innerHTML=localStorage.getItem("data");
}
showTask();