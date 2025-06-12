import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/Todo/todoSlice';
const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const addTooHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("");
    }
    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={addTooHandler}>
                <input type="text" placeholder="Enter todo" value={todo} onChange={(e) => { setTodo(e.target.value) }} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo