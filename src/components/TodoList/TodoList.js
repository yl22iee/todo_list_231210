import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "1", text: "설거지", status: "active" },
    { id: "2", text: "장보기", status: "active" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  return (
    <div>
      <ul>
        {todos.map((data) => (
          <li key={data.id}>{data.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}
