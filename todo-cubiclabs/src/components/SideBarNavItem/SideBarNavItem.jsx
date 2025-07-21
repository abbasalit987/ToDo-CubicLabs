import React from "react";
import './SideBarNavItem.css';

const SideBarNavItem = (props) => {
  const { title, isSelected, onSelect } = props;

  return (
    <div
      className={`sidebar-nav-item ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <span className="sidebar-nav-item-title">{title}</span>
    </div>
  );
};

export default SideBarNavItem;
