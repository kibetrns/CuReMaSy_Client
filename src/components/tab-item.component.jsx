
const TabItem = ({title, titleStyle, tabItemStyle, onClick}) => {

    const handleClick = () => {
        onClick(title)
    }

    return(
        <div style={tabItemStyle} onClick={handleClick}>
            <h5 stylt={titleStyle}>{title}</h5>
        </div>
    )
}

export default TabItem