import "../../styles/users-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import DummyImage from "../../assets/hans-eiskonen-8Pm_A-OHJGg-unsplash.jpg";
import HelperDisplayCard from "../../components/helper-message-card.component";
import HelperDisplayCardContentStyle from "../../components/helper-display-card-content.component";
import UserDetails from "../../components/user-details-card.component";
import PaginationNav from "../../components/pagination-nav.component";
import CustomGeneralBtn from "../../components/custom-general-btn.component";
import SearchBar from "../../components/search-bar.component";


const usersPage = () => {
  const UserDetailsImageStyle = {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
  };
  const btnStyle = {
    backgroundColor: "black",
    transitionDuration: "0.4s",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "8px 16px",
    color: "white",
  };

  //TODO("do the styling when a particulat row is clicked")
  const rowStyle = {};

  const listOfTopusers = [
    {
      id: 1,
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      thirdInput: `Ksh ${8433}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
    {
      id: 2,

      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 8888,
      thirdInput: `Ksh ${6262}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
    {
      id: 3,

      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      thirdInput: `Ksh ${6262}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
    {
      id: 4,

      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      thirdInput: `Ksh ${2241}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
  ];

  const handleMoreVertClick = () => {
    window.alert("clicked");
  };

  const handleHeaderMoreVerticalClicked = () => {
    window.alert("clicked header more vert ..");
  };

  const handleUserDetailClick = (id) => {
    window.alert(`Clicked user with id of ${id}`);
  };

  const handleAddustomerClick =() => {
    window.alert("clicked");


  }

  return (
    <div className="main-entry-page users-page">
      <NavigationRail />
      
      <div className="main-entry-page__Supporting-Content users-page-supporting-content">
        <div className="users-page-header">
        <h1 className="users-page-header"> Staffs </h1>
        
        <CustomGeneralBtn
          btnTitle={"Add Staff"}
          btnIcon={<span class="material-symbols-outlined">add</span>}
          style={btnStyle}
          onClick={handleAddustomerClick}
        />


        </div>
        <div className="users-refinment-container">
            <div>
                TODO
            </div>
  <SearchBar 
  placeholder={"Search By Username"}/>
</div>
   

     

        <div className="users-page-main">
          <table className="users-table">
            <tbody>
              <tr className="users-table-header-row">
                <th></th>
                <th>Name</th>
                <th>Points</th>
                <th>Total Amount</th>
                <th>
                  <span
                    class="material-symbols-outlined"
                    style={{ cursor: "pointer" }}
                    onClick={handleHeaderMoreVerticalClicked}
                  >
                    more_vert
                  </span>
                </th>
              </tr>
              {listOfTopusers.map((user) => (
                <tr key={user.id} style={rowStyle}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <UserDetails
                      dp={user.dp}
                      fullName={user.fullName}
                      userName={user.userName}
                      UserDetailsImageStyle={UserDetailsImageStyle}
                      userId={user.id}
                      onClick={handleUserDetailClick}
                    />
                  </td>
                  <td>{user.secondInput}</td>
                  <td>{user.thirdInput}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    onClick={handleMoreVertClick}
                  >
                    {user.icon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PaginationNav />
      </div>
    </div>
  );
};

export default usersPage;
