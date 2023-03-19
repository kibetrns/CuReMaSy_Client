import { useState } from "react";
import CalendarPicker from "../../components/calendar-picker.component";
import CustomGeneralBtn from "../../components/custom-general-btn.component";
import "../../styles/reports-filter.css";

const ReportsFilter = ({ onClick, reportsFilterStyle }) => {
  const [dateRangeInDays, setDateRangeInDays] = useState(0);

  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value);
    const endDate = new Date(document.getElementById("endDate").value);
    const today = new Date();
    if (startDate > endDate) {
      alert("Start date cannot be later than end date.");
    } else if (startDate > today) {
      alert("Start date cannot be later than today.");
    } else {
      const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
      setDateRangeInDays(days);
      onClick(days);
    }
  };

  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value);
    const startDate = new Date(document.getElementById("startDate").value);
    const today = new Date();
    if (endDate < startDate) {
      alert("End date cannot be earlier than start date.");
    } else if (endDate > today) {
      alert("End date cannot be later than today.");
    } else {
      const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
      setDateRangeInDays(days);
      onClick(days);
    }
  };

  const handleViewReportClick = () => {
    alert("report clicked");
  };

  const btnStyle = {
    backgroundColor: "black",
    transitionDuration: "0.4s",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "8px 16px",
    color: "white",
  };

  return (
    <div className="reports-filter" style={reportsFilterStyle}>
      <p>Last {dateRangeInDays} days: </p>

      <div className="reports-filter-left">
        <div className="reports-filter-left__Dates">
          <div>
            <div className="label-and-picker">
              <label htmlFor="endDate" className="date-labels">
                End Date:
              </label>
              <CalendarPicker
                type={"date"}
                id={"endDate"}
                name={"endDate"}
                onChange={handleEndDateChange}
              />
            </div>
          </div>
          <div>
            <div className="label-and-picker">
              <label htmlFor="startDate" className="date-labels">
                Start Date:
              </label>
              <CalendarPicker
                type={"date"}
                id={"stardDate"}
                name={"startDate"}
                onChange={handleStartDateChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <CustomGeneralBtn
          btnTitle={"View Report"}
          style={btnStyle}
          onClick={handleViewReportClick}
        />
      </div>
    </div>
  );
};

export default ReportsFilter;
