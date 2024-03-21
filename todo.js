function Items()
{
   if( document.getElementById('hlo').value.length == 0)
   {
    alert("enter some value");

   }
   else{

    document.getElementById('tasks').innerHTML += `
    <div class="task">
           <span id="tasking">
           <ul>
           <li>
        
            ${document.getElementById('hlo').value}
            </li>
            </ul>
            </span>
            
            <button class="delete" >
            X
        </button>
        
        
    </div>
   
`;
var current_tasks = document.querySelectorAll(".delete");
for(var i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
        this.parentNode.remove();

}
}
   }
}




