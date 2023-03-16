import "../styles/helper-display-card-content.component.css"

const HelperDisplayCardContent = ({title, value, component, helperDisplayCardContent,  titleStyle, valueStyle}) => {

    return(
        <div className="helper-display-card" style={helperDisplayCardContent}>
            <div className="helper-display-card__SubContentOne">
                <h6 style={titleStyle} className="title">{title}</h6>
                <h3 style={valueStyle}>{value}</h3>
            </div>
            <div className="helper-display-card__SubContentTwo">
                {component}
            </div>
        </div>
    )
}

export default HelperDisplayCardContent