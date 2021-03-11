import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { useSelector, useDispatch } from "react-redux";

function TodoList() {
    const todos = useSelector((store) => store);
    const dispatch = useDispatch();

    const addTodo = (formData) => {
        dispatch({ type: "ADD-TODO", form: formData });
    }

    const removeTodo = (i) => {
        dispatch({ type: "DELETE-TODO", id: i });
    }

    return (
        <>
            <NewTodoForm propFunc={addTodo}/>
            {todos.map((t, i) => <Todo key={i} task={t} deleteIt={() => removeTodo(i)}/>)}
        </>
    )
}

export default TodoList;
