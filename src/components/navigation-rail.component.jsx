import NavigationItem from "./navigation-item.component";
import "../styles/navigation-rail.component.css"
import CompanyLogo from "../assets/pngtree-tree-logo.jpg"
import { Link , useNavigate } from "react-router-dom"


const NavigationRail = () => {

  const navigate = useNavigate()

  const handleNavItemClick = (title) => {
      console.log(`${title.toLowerCase()}`)
      navigate(`/${title.toLowerCase()}`)

  }


  const topRailItems = [
    {
        icon:<span class="material-symbols-outlined">dashboard</span>,
        title: "Dashboard",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    },
    {
        icon:<span class="material-symbols-outlined">sell</span>,
        title: "Sales",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    },
    {
        icon:<span class="material-symbols-outlined">inventory_2</span>,
        title: "Products",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    },
    {
        icon:<span class="material-symbols-outlined">groups</span>,
        title: "Customers",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    },
    {
        icon:<span class="material-symbols-outlined">show_chart</span>,
        title: "Reports",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    },
    {
        icon:<span class="material-symbols-outlined">group</span>,
        title: "Staffs",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    }
]

/*TODO("The last element of the bottomRailItems is to be replaced with a
 custom component that fits its design")
 */

const bottomRailItems = [
    {
        icon:<span class="material-symbols-outlined">notifications</span>,
        title: "Notifications",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    },
    {
        icon:<span class="material-symbols-outlined">settings</span>,
        title: "Settings",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    },
    {
        icon:<span class="material-symbols-outlined">dashboard</span>,
        title: "Maggie Doe",
        subtittle: "@gi_doe",
        navItemAlertCount: 9,
        onClick: handleNavItemClick
    }
]
    
  return (
    <div className="navigation-rail">

      <div className="navigation-rail__Top">
      

        <ol>
        <Link to = '/dashboard'><div className="navigation-rail__Top company-details">
          <img src={CompanyLogo} alt="" className="navigation-item-icon " /> 
          <h2>Pekee Group Ventures</h2>
        </div>
        </Link>
        <hr />
          {
        topRailItems.map((item) => {
            return (
                <NavigationItem {...item} />
            ) 
        })}
        </ol>
      </div>

      <div className="navigation-rail__Bottom">
        <ol>{
          bottomRailItems.map((item) => {
            return (
              <NavigationItem {...item} />
            )
          })
    
          }
        </ol>
      </div>

    </div>
  );
};

export default NavigationRail