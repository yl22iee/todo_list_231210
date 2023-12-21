import React from "react";
import "./Header.css";
// import { VscColorMode } from "react-icons/vsc";

export default function Header({ filter, filters, onFilterChange }) {
  return (
    <header className="header">
      {/* <div className="mode">
        <VscColorMode />
      </div> */}
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
