import React from "react";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, id) => (
          <li key={id}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
