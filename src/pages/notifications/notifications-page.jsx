import "../../styles/notifications-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import NotificationItem from "./notification-item";
import PaginationNav from "../../components/pagination-nav.component";

const NotificationsPage = () => {
  const MessageType = {
    Category: "Category",
    Report: "Report",
  };

  const listOfNotifications = [
    {
      messageId: 1,
      message: " 'Fruits' category added",
      messageType: MessageType.Category,
    },
    {
      messageId: 2,
      message: "13-19 March 2023 Report",
      messageType: MessageType.Report,
    },
  ];

  return (
    <div className="main-entry-page notifications-page">
      <NavigationRail />
      <div className="main-entry-page__Supporting-Content notifications-page-supporting-content">
        <div className="notifications-page-header">
          <h1>Notifications</h1>
        </div>
        <div>
          {listOfNotifications.map((item) => {
            return (
              <NotificationItem
                messageId={item.messageId}
                message={item.message}
                messageType={item.messageType}
              />
            );
          })}
        </div>
        <PaginationNav />
      </div>
    </div>
  );
};

export default NotificationsPage;
