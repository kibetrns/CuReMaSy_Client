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

const ReportsPage = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Sales",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  const data = {
    labels,
    datasets: [
      {
        label: "Declined",
        backgroundColor: "#3BE4E9",
        data: [90, 7, 84, 120, 30, 111],
      },
      {
        label: "Approved",
        backgroundColor: "#848E0F",
        data: [152, 33, 77, 250, 129, 184],
      },
    ],
  };

  const helperDisplayCardContentStyle = {
    padding: "0.5% 2%",
    marginBottom: "0%",
    backgroundColor: "white",
  };

  const helperDisplayCardStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
  };

  const tabItemRailStyle = {
    display: "flex",
    borderBottom: "1px solid rgba(0, 0, 0, 0.19)",
    width: "100%",
    padding: "0%",
    margin: "0%",
    cursor: "pointer",
  }
  
  const itemStyle = {
    marginRight: "4%",
    marginBottom: "-2%"
  }

  const listOfComponentsTopRight = [
    {
      id: 1,
      component: (
        <HelperDisplayCardContent
          title={"Customers Count"}
          value={17}
          helperDisplayCardContentStyle={helperDisplayCardContentStyle}
        />
      ),
    },

    {
      id: 2,
      component: (
        <HelperDisplayCardContent
          title={"Sales Count"}
          value={17}
          helperDisplayCardContentStyle={helperDisplayCardContentStyle}
        />
      ),
    },
    {
      id: 2,
      component: (
        <HelperDisplayCardContent
          title={"Products Count"}
          value={17}
          helperDisplayCardContentStyle={helperDisplayCardContentStyle}
        />
      ),
    },
  ];
  const listOfComponentsTopLeft = [
    {
      id: 1,
      component: (
        <HelperDisplayCardContent
          title={"Total Amount of Sales"}
          value={`Ksh ${4242}`}
          helperDisplayCardContentStyle={helperDisplayCardContentStyle}
        />
      ),
    },
  ];




  

  return (
    <div className="main-entry-page reports-page">
      <NavigationRail />
      <div className="main-entry-page__Supporting-Content reports-page-supporting-content">
        <h2 className="supporting-page-title-reports"> Reports </h2>
        <TabItemRail 
            tabItemRailStyle={tabItemRailStyle}
             itemStyle={itemStyle}
        />
        <div className="supporting-content-top-reports" >
          <div className="item-1-top-reports">
            <HelperDisplayCard
              listOfComponents={listOfComponentsTopLeft}
              helperDisplayCardStyle={helperDisplayCardStyle}
            />
          </div>
          <div className="item-2-top-reports">
            <HelperDisplayCard
              listOfComponents={listOfComponentsTopRight}
              helperDisplayCardStyle={helperDisplayCardStyle}
            />
          </div>
        </div>
        <div
          className="supporting-content-bottom-reports"
          style={{ backgroundColor: "white" }}
        >
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
