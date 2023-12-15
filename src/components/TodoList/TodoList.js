import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoDelete from "../TodoDelete/TodoDelete";
// import { v4 as uuidv4 } from "uuid";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    { id: "1", text: "설거지", status: "active" },
    { id: "2", text: "청소", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);

  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems({ todos, filter });

  return (
    <div>
      <ul>
        {todos.map((item) => (
          <TodoDelete
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  // 아.. 몰겠다 상태값을 반환하는거 모르낟.
}
