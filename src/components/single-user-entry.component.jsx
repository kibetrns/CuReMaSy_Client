import "../styles/single-user-entry.component.css"
import UserDetails from "./user-details-card.component"

const SingleUserEntry = ({dp, fullName, userName, secondInput, thirdInput,  icon})  => {

    return (
        <div className="single-user-entry">
            <div className="single-user-entry-content">
                <input type="checkbox" />
                <UserDetails 
                dp={dp}
                fullName={fullName}
                userName={userName}
                />
            <h4>{secondInput}</h4>
            <h4>{thirdInput}</h4>
            <div className="icon-holder">
                {icon}
          </div>
          </div>
          <hr className="line"/>

          
        </div>
        
    )
}
export default SingleUserEntry