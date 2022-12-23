import { useState } from 'react';
import React from 'react';

/**
 * @todo
 * Lengkapi komponen "Todo" sesuai dengan kriteri berikut:
 *  1. Dapat menambahkan to-do.
 *  2. Dapat menampilkan daftar to-do.
 *  3. Dapat menghapus daftar to-do.
 */

function Todo() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [todoInput, ...todos]);
  };

  const renderTodos = (todos) => {
    return todos.map((todo) => {
      return <p>{todo}</p>;
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button type="submit">add Todo</button>
      </form>
      <div>{renderTodos(todos)}</div>
    </>
  );
}

export default Todo;
