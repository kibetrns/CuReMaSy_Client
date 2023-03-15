import "../../styles/dashboard-page.css"
import NavigationRail from "../../components/navigation-rail.component"

const DashBoardPage = () => {

  
    return(
        <div className="main-entry-page dashboard-page" >
        
            <NavigationRail />
            <div className="main-entry-page__Supporting-Content dashboard-page">
                <h1>Dashboard</h1>
            </div> 
        </div>
    )
}

export default DashBoardPage
