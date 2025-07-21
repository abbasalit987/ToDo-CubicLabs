import SideBarNavItem from "../SideBarNavItem/SideBarNavItem.jsx";
import { SIDE_NAV_OPTIONS } from "../../reducer/reducer";
import './SideBarNav.css';
import CubicLabsLogo from '../../assets/cubiclabs.svg';

const SideBarNav = (props) => {
    const { sideNavSelected, onSelect } = props;

    return (
        <>
            <div className="side-bar-nav">
                <div className="side-bar-nav-header">
                    <img src={CubicLabsLogo} alt="Cubic Labs Logo" className="cubic-labs-logo" />
                </div>
                <div className="side-bar-nav-items">
                    < SideBarNavItem 
                        title="☀️ My Day"
                        isSelected={sideNavSelected === SIDE_NAV_OPTIONS.MY_DAY}
                        onSelect={() => onSelect(SIDE_NAV_OPTIONS.MY_DAY)}
                    />
                    < SideBarNavItem 
                        title="⭐ Important"
                        isSelected={sideNavSelected === SIDE_NAV_OPTIONS.IMPORTANT}
                        onSelect={() => onSelect(SIDE_NAV_OPTIONS.IMPORTANT)}
                    />
                    < SideBarNavItem 
                        title="✅ Completed"
                        isSelected={sideNavSelected === SIDE_NAV_OPTIONS.COMPLETED}
                        onSelect={() => onSelect(SIDE_NAV_OPTIONS.COMPLETED)}
                    />
                    < SideBarNavItem 
                        title="📜 All Tasks"
                        isSelected={sideNavSelected === SIDE_NAV_OPTIONS.ALL}
                        onSelect={() => onSelect(SIDE_NAV_OPTIONS.ALL)}
                    />
                </div>
            </div>
        </>
    )
}

export default SideBarNav;