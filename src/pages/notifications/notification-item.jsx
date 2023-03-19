import "../../styles/notification-item.css";

const NotificationItem = ({
  messageId,
  message,
  messageType,
  onApproveClicked,
  onDeclineClicked,
  onViewClicked,
}) => {
  const handleOnApproveClicked = () => {
    window.alert(`Approve clicked with message ${message} and id ${messageId}`);
    onApproveClicked(messageId);
  };

  const handleOnDeclineClicked = () => {
    window.alert(`Decline clicked with message ${message} and id ${messageId}`);
    onDeclineClicked(messageId);
  };

  const handleOnViewClicked = () => {
    window.alert(`View clicked with message ${message} and id ${messageId}`);
    onViewClicked(messageId);
  };

  return (
    <div className="notificaions-item-container">
      <p>{message}</p>
      <div className="notificaion-action">
        {messageType === "Report" && (
          <h4
            className="view-title"
            style={{ cursor: "pointer" }}
            onClick={handleOnViewClicked}
          >
            View
          </h4>
        )}
        {messageType === "Category" && (
          <div className="notification-action__Categories">
            <h4
              className="approve-title"
              style={{ color: "#0EFC50", cursor: "pointer" }}
              onClick={handleOnApproveClicked}
            >
              Approve
            </h4>
            <h4
              className="decline-title"
              style={{ color: "#FC0E1C", cursor: "pointer" }}
              onClick={handleOnDeclineClicked}
            >
              Decline
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationItem;
