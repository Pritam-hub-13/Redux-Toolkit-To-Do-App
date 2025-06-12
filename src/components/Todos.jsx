import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todo/todoSlice';
const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    return (
        <>
            <div>Todos</div>
            {todos.map((value) => {
                return (
                    <>
                        <li key={value.id}>
                            {value.text}
                        </li>
                        <button onClick={() => {
                            dispatch(removeTodo(value.id))
                        }}>Delete</button>
                    </>
                )
            })}
        </>
    )
}

export default Todos