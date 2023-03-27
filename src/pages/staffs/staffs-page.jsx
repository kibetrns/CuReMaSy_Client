import "../../styles/users-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import DummyImage from "../../assets/hans-eiskonen-8Pm_A-OHJGg-unsplash.jpg";
import HelperDisplayCard from "../../components/helper-message-card.component";
import HelperDisplayCardContentStyle from "../../components/helper-display-card-content.component";
import UserDetails from "../../components/user-details-card.component";
import PaginationNav from "../../components/pagination-nav.component";
import CustomGeneralBtn from "../../components/custom-general-btn.component";
import SearchBar from "../../components/search-bar.component";
import MoreOptionsModal from "../../components/more-options-modal";
import { useState } from "react";

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

  const listOfStaff = [
    {
      id: 1,
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      accountCreationDate: "March 10, 2023",
      totalSalesMade: `Ksh ${77}`,
      thirdInput: `Ksh ${8433}`,
    },
    {
      id: 2,

      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 8888,
      accountCreationDate: "March 10, 2023",
      totalSalesMade: `Ksh ${77}`,
      thirdInput: `Ksh ${6262}`,
    },
    {
      id: 3,

      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      accountCreationDate: "March 10, 2023",
      totalSalesMade: `Ksh ${77}`,
      thirdInput: `Ksh ${6262}`,
    },
    {
      id: 4,

      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      accountCreationDate: "March 10, 2023",
      totalSalesMade: `Ksh ${77}`,
      thirdInput: `Ksh ${2241}`,
    },
  ];

  const handleHeaderMoreVerticalClicked = () => {
    window.alert("clicked header more vert ..");
  };

  const handleUserDetailClick = (id) => {
    window.alert(`Clicked user with id of ${id}`);
  };

  const handleAddustomerClick = () => {
    window.alert("clicked");
  };

  const [showMoreOptionsModal, setMoreOptionsModal] = useState(false);
  const [selectedStaffId, setselectedStaffId] = useState(null);

  const handleMakeSaleClicked = () => {
    window.alert("clicked");
  };

  const handleMoreVertClick = (userId) => {
    setselectedStaffId(userId);
    setMoreOptionsModal(!showMoreOptionsModal);
  };

  const handleOnDeleteClick = (itemId) => {
    window.alert(itemId);
  };

  const handleOnEditClick = (itemId) => {
    window.alert(itemId);
  };

  return (
    <div className="main-entry-page users-page">
      <NavigationRail />

      <div className="main-entry-page__Supporting-Content users-page-supporting-content">
        <div className="users-page-header">
          <h1> Staffs </h1>

          <CustomGeneralBtn
            btnTitle={"Add Staff"}
            btnIcon={<span class="material-symbols-outlined">add</span>}
            style={btnStyle}
            onClick={handleAddustomerClick}
          />
        </div>
        <div className="users-refinment-container">
          <div>TODO</div>
          <SearchBar placeholder={"Search By e-mail"} />
        </div>

        <div className="users-page-main">
          <table className="users-table">
            <tbody>
              <tr className="users-table-header-row">
                <th></th>
                <th>Name</th>
                <th>Account Creation</th>
                <th>Total Sale Amount</th>
                <th>
                  <span
                    class="material-symbols-outlined"
                    style={{ cursor: "pointer" }}
                    onClick={handleHeaderMoreVerticalClicked}
                  >
                    more_vert
                  </span>
                </th>
                <th></th>
              </tr>
              {listOfStaff.map((user) => (
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
                  <td>{user.accountCreationDate}</td>
                  <td>{user.totalSalesMade}</td>
                  <td>
                    <span
                      class="material-symbols-outlined"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleMoreVertClick(user.id)}
                    >
                      more_vert
                    </span>
                    ,
                  </td>
                  {selectedStaffId === user.id && showMoreOptionsModal && (
                    <MoreOptionsModal
                      itemId={user.id}
                      onDeleteClick={handleOnDeleteClick}
                      onEditClick={handleOnEditClick}
                    />
                  )}
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
