import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/reports-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import HelperDisplayCard from "../../components/helper-message-card.component";
import HelperDisplayCardContent from "../../components/helper-display-card-content.component";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import TabItemRail from "../../components/tab-item-rail.component";
import TabItem from "../../components/tab-item.component";
import { Outlet } from "react-router-dom";


/*TODO("some components of the sub-page that are displayed on this page are repeated.
 Find a way to create a componenet to increase reusability") */
const ReportsPage = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const tabItemRailStyle = {
    display: "flex",
    borderBottom: "1px solid rgba(0, 0, 0, 0.19)",
    width: "100%",
    padding: "0%",
    margin: "0%",
    cursor: "pointer",
    height: "fit-content",
  };

  const itemStyle = {
    marginRight: "4%",
    marginBottom: "-2%",
  };

  /*TODO("find a better way to do this") */

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/reports/weekly");
  }, []);

  return (
    <div className="main-entry-page reports-page">
      <NavigationRail />
      <div className="main-entry-page__Supporting-Content reports-page-supporting-content">
        <h2 className="supporting-page-title-reports"> Reports </h2>
        <div className="tab-item-rail-reports">
          <TabItemRail
            tabItemRailStyle={tabItemRailStyle}
            itemStyle={itemStyle}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ReportsPage;
