import "../styles/user-details-card.component.css"

const UserDetails = ({dp, fullName, userName, userId,  onClick }) => {

    const handleClick = () => {
        onClick(userId)
    }

    return(
        <div className="user-details" onClick={handleClick}>
            <div className="image-container">
                {dp}
            </div>
            <div className="details-container">
                <h4 className="full-name">{fullName}</h4>
                <p className="user-name">{userName}</p>
            </div>
        </div>
    )
}

export default UserDetails