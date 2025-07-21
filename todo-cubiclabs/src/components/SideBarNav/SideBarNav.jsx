import React from "react";
import SideBarNavItem from "../SideBarNavItem/SideBarNavItem.jsx";
import { SIDE_NAV_OPTIONS } from "../../reducer/reducer";

const SideBarNav = (props) => {
    const { sideNavSelected, onSelect } = props;

    return (
        <>
            < SideBarNavItem 
                title="My Day"
                isSelected={sideNavSelected === SIDE_NAV_OPTIONS.MY_DAY}
                onSelect={() => props.onSelect(SIDE_NAV_OPTIONS.MY_DAY)}
            />
            < SideBarNavItem 
                title="Important"
                isSelected={sideNavSelected === SIDE_NAV_OPTIONS.IMPORTANT}
                onSelect={() => props.onSelect(SIDE_NAV_OPTIONS.IMPORTANT)}
            />
            < SideBarNavItem 
                title="Completed"
                isSelected={sideNavSelected === SIDE_NAV_OPTIONS.COMPLETED}
                onSelect={() => props.onSelect(SIDE_NAV_OPTIONS.COMPLETED)}
            />
            < SideBarNavItem 
                title="All Tasks"
                isSelected={sideNavSelected === SIDE_NAV_OPTIONS.ALL}
                onSelect={() => props.onSelect(SIDE_NAV_OPTIONS.ALL)}
            />
        </>
    )
}

export default SideBarNav;