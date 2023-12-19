import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../TodoDelete/Todo";
// import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

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

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className="container">
      <ul className="list">
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo className="Addlist" onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "All") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
