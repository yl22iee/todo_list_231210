import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// v4를 uuidv4로 변경

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: "active" });
    // uuidv4는 중복되지 않는 id의 값을 자동으로 호출해주는 메서드이다.
    setText("");
    if (text.trim().length === 0) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="write todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
