import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./Header/Header";
import { useState } from "react";

export default function App() {
  const filters = ["All", "Active", "Complete"];
  const [filter, setFilter] = useState(filters[0]);
  const handleChange = (event) => {
    setFilter(event);
  };
  return (
    <div>
      <Header filters={filters} filter={filter} onFilterChange={handleChange} />
      <TodoList filter={filter} />
    </div>
  );
}
