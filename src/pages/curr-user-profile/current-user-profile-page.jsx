import "../../styles/current-user-profile-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import DummyImage2 from "../../assets/milad-fakurian-PGdW_bHDbpI-unsplash.jpg";
import ProfileCardContent from "../../components/profile-card-content.component";
import "../../styles/profile-card-content.component.css";
import GeneralCard from "../../components/general-card.component";

const CurrentUserProfilePage = () => {
  const userType = {
    Admin: "Admin",
    Staff: "Staff",
    Customer: "Customer",
  };

  const UserDetailsImageStyle = {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
  };

  const customerDetails = {
    id: 1,
    dp: <img src={DummyImage2} style={UserDetailsImageStyle}></img>,
    fullName: "Maggie Doe",
    userName: "@gi_doe",
    phoneNumber: "+245 711111111",
    userEmail: "maggie.doe@example.com",
    dateofBirth: "01/01/2001",
    accountCreatedBy: "maggie.doe@example.com",
    accountCreationDate: "20/03/2023",
    totalPurchaseCount: 231,
    totalEarnedPointsByCustomer: 1888,
    userType: userType,
  };

  const handleProfileCardContentMoreVertClick = (userId) => {
    window.alert(`Clicked user with id of ${userId}`);
  };

  return (
    <div className="main-entry-page current-user-page">
      <NavigationRail />
      <div className="main-entry-page__Supporting-Content current-user-page-supporting-content">
        <h1>My Profile</h1>
        <div className="current-user-page-supporting-content-main">
          <div className="profile-card">
            <GeneralCard
              style={{
                border: "0.1px solid white",
                boxShadow: "1px 2px rgb(92, 91, 91)",
                width: "fit-content",
                padding: "8% 16%",
                backgroundColor: 'white',
                boxShadow: '0 0 16px 2px rgba(0, 0, 0, 0.12)',
                borderRadius: '16px'             
               }}
              element={
                <ProfileCardContent
                  userId={customerDetails.id}
                  dp={customerDetails.dp}
                  userName={customerDetails.userName}
                  fullName={customerDetails.fullName}
                  phoneNumber={customerDetails.phoneNumber}
                  userEmail={customerDetails.userEmail}
                  dateofBirth={customerDetails.dateofBirth}
                  accountCreatedBy={customerDetails.accountCreatedBy}
                  accountCreationDate={customerDetails.accountCreationDate}
                  totalPurchaseCount={customerDetails.totalPurchaseCount}
                  totalEarnedPointsByCustomer={
                    customerDetails.totalEarnedPointsByCustomer
                  }
                  userType={userType.Customer}
                  onMoreVertClick={handleProfileCardContentMoreVertClick}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentUserProfilePage;
