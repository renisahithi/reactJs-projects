import React from "react";
function TaskItem({taskName}){
    return(
   <div>
    <h5>TaskItem component</h5>

<li className="content">
    
    <div>{taskName}</div>
    <div> 
   
        
        <button>delete</button>
    </div>
    </li>

   </div>
    );
}
export default TaskItem;