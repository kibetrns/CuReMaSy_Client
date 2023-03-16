import React from "react"
import "../styles/helper-display-card.component.css"

const HelperDisplayCard = ({listOfComponents, helperDisplayCardStyle}) => {

    return(
        <div className="helper-display-card" style={helperDisplayCardStyle}>
            {listOfComponents.map(item => (
                <React.Fragment key={item.id}>
                    {item.component}
                </React.Fragment>
            ))}
        </div>
    )
}

export default HelperDisplayCard