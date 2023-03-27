import "../../styles/customers-purchase-history-subpage.css";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useNavigate
  useNavigate
} from "react-router-dom";
import React, { useEffect } from "react";



const CustomersPurchaseHistorySubPage = ({
  dp,
  fullName,
  userName,
  userDetailsImageStyle,
  userId,
  onClick

}) => {



   const handleHeaderMoreVerticalClicked = () => {

   }

   const handleOnUserMoreVertClick = () => {

   }

   const handleUserDetailClick = () => {


    const navigate = useNavigate();
    if (userId) {
      navigate(`/customers/sales-history?userId=${userId}`);
    }
  

  useEffect(() => {
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(window.location.search);
    const userId = searchParams.get("userId");
    if (userId) {
      // do something with userId, e.g. fetch sales history
    } else {
      navigate("/customers");
    }
  }, []);
}

   
  



  return (
    <div>
      <div className="users-refinment-container">
        <div>TODO</div>
        <SearchBar placeholder={"Search By Username"} />
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
            {listOfCustomers.map((user) => (
              <tr key={user.id} style={rowStyle}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <UserDetails
                    dp={user.dp}
                    fullName={user.fullName}
                    userName={user.userName}
                    userDetailsImageStyle={userDetailsImageStyle}
                    userId={user.id}
                    onClick={handleUserDetailClick}
                  />
                </td>
                <td>{user.secondInput}</td>
                <td>{user.thirdInput}</td>
                <td style={{ cursor: "pointer" }} onClick={handleOnUserMoreVertClick}>
                  {user.icon}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PaginationNav />
    </div>
  );
};

export default CustomersPurchaseHistorySubPage;
