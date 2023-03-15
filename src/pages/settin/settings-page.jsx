import "../../styles/settings-page.css"
import NavigationRail from "../../components/navigation-rail.component"

const SettingsPage = () => {

    return(
        <div className="main-entry-page settings-page" >
        
            <NavigationRail />
            <div className="main-entry-page__Supporting-Content settings-page">
                <h1>Settings</h1>
            </div> 
        </div>
    )

}

export default SettingsPage