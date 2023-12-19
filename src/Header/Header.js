import React from "react";
import "./Header.css";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header className="header">
      <ul className="filters">
        {filters.map((value, id) => (
          <li key={id}>
            <button className="filter" onClick={() => onFilterChange(value)}>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
