import { NavLink } from "react-router-dom"
import "../styles/tab-item.component.css"

const TabItem = ({title, titleStyle, tabItemStyle, onClick}) => {

    const handleClick = () => {
        onClick(title)
    }

    return(
        <div style={tabItemStyle} onClick={handleClick}>
            <h5 style={titleStyle}>{title}</h5>
        </div>
    )
}

export default TabItem