import React from "react";
import { FaPizzaSlice, FaPlus } from "react-icons/fa";

export const Header = props => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add" data-testid="quick-add-task-action">
              <FaPlus />
            </li>
            <li className="settings__darkmode" data-testid="dark-mode-action">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
