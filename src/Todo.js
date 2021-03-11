import React from "react";


function Todo({task, deleteIt}) {
    return (
        <div className='todo'>
            <h3>{task}</h3>
            <button onClick={deleteIt}>X</button>
        </div>
  );
}

export default Todo;
