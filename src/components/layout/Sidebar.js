import React from "react";
import {
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
  FaChevronDown
} from "react-icons/fa";

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li className="inbox" data-testid="inbox">
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li className="today" data-testid="today">
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li className="next-7" data-testid="next-7">
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>
    <ul className="sidebar__projects">Projects is going to be here!</ul>
    Add Project component here!!!
  </div>
);
