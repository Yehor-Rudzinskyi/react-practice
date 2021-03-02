import React from 'react';
import './Todo.css'

const TodoList = ({ todos, onDeleteTodo }) => {
    return (
        <ul>{todos && todos.map(({ id, text }) => (
            <li key={id} className='Todo__items'>
                <p className='Todo__text'>{text}</p>
                <button onClick={()=> onDeleteTodo(id)} type='button' className='Todo__button'>Delete</button>
            </li>
        ))
        }</ul>
    )
}

export default TodoList;