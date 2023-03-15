
import "../../styles/customers-page.css"
import NavigationRail from "../../components/navigation-rail.component"

const CustomersPage = () => {

    return(
        <div className="main-entry-page customers-page" >
        
            <NavigationRail />
            <div className="main-entry-page__Supporting-Content customers-page">
                <h1>Customers</h1>
            </div> 
        </div>
    )

}

export default CustomersPage
