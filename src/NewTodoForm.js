import React, { useState } from "react";


function NewTodoForm({propFunc}) {
    const [todo, setTodo] = useState('')

    const handleChange = (evt) => {
        setTodo(() => {
            return evt.target.value;
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        propFunc(todo);
        setTodo('');
    }

    return (
        <form>
           <label htmlFor='task'>Add a todo</label> 
            <input value={todo} onChange={handleChange} placeholder='todo'></input> 
            <button onClick={handleSubmit}>Add Todo</button>
        </form>
  );
}

export default NewTodoForm;
