import "../styles/profile-card-content.component.css";
import UserDetails from "./user-details-card.component";

const ProfileCardContent = ({
  userId,
  dp,
  fullName,
  userName,
  phoneNumber,
  userEmail,
  dateofBirth,
  accountCreatedBy,
  accountCreationDate,
  totalPurchaseCount,
  totalSales,
  totalEarnedPointsByCustomer,
  totalEarnedPointsFromSaleByStaff,
  userType,
  onMoreVertClick,
}) => {
  const handleClick = () => {
    console.log(userId);
    onMoreVertClick(userId);
  };

  return (
    <div className="profile-card-content">
      <div className="profile-card-header">
        <UserDetails dp={dp} fullName={fullName} userId={userId} />
        <span
          class="material-symbols-outlined"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          more_vert
        </span>
      </div>
      <div className="personal-info-container">
        <h4 style={{marginBottom: "0"}}>Personal Information</h4>
        <div className="single-personal-info-container">
          <span class="material-symbols-outlined">mail</span>
          <p>{userEmail}</p>
        </div>

        <div className="single-personal-info-container">
          <span class="material-symbols-outlined">call</span>
          <p>{phoneNumber}</p>
        </div>

        <div className="single-personal-info-container">
          <span class="material-symbols-outlined">cake</span>
          <p>{dateofBirth}</p>
        </div>
      </div>

      <div className="personal-info-container">
        <h4>Account Created</h4>
        <div className="single-personal-info-container single-account-info-container">
          <h4>by</h4>
          <p>{accountCreatedBy}</p>
          <h4>on</h4>
          <p>{accountCreationDate}</p>
        </div>
      </div>

      <div className="personal-info-container">
        {/* <div id="Staffs">
          <div className="single-personal-info-container single-other-info-container">
            <h4>Total Sales</h4>
            <p>{totalSales}</p>
          </div>
          <div className="single-personal-info-container single-other-info-container">
            <h4>Total Earnings from Sales</h4>
            <p>{totalEarnedPointsFromSaleByStaff}</p>
          </div>
        </div> */}

        <div id="Customers">
          <div className="single-personal-info-container single-other-info-container">
            <h4>Total Purchases</h4>
            <p>{totalPurchaseCount}</p>
          </div>

          <div className="single-personal-info-container single-other-info-container">
            <h4>Total Purchases</h4>
            <p>{totalEarnedPointsByCustomer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardContent;
