import React from "react"

const SideBarNavItem = (props) => {
    const { title, isSelected, onSelect } = props

    return (
        <>
            <div 
                className="sidebar-nav-item"
                onClick={onSelect}
                >
                <span className="sidebar-nav-item-title">{title}</span>
            </div>
        </>
    )
}

export default SideBarNavItem;