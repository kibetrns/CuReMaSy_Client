import { NavLink } from "react-router-dom";
import "../styles/navigation-item.component.css";

const NavigationItem = ({
  icon,
  title,
  subtittle,
  navItemAlertCount,
  onClick,
}) => {

  const handleClick = () => {
    onClick(title)
  }

  return (  
    <NavLink  to={`/${title.toLowerCase()}`} className={({isActive}) => (isActive ? 'activeNavItem': 'inActiveNavItem')}>
      <div className="navigation-item" onClick={handleClick}>
      <div className="navigation-item__main">
        <div className="navigation-item-icon">{icon}</div>

        <div className="navigation-item-details">
          <h3 className="navigation-item-details__Title" >{title}</h3>
          <h5 className="navigation-item-details__Subtitle" >{subtittle}</h5>
        </div>
      </div>



      {navItemAlertCount > 0 && (
          <div className="navigation-item__bubble">
            <div className="nav-item-bubble-container">{navItemAlertCount}</div>
          </div>
        )}
    </div>

    </NavLink>
    
  );
};

export default NavigationItem;
