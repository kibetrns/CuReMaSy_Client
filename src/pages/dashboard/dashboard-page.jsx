import "../../styles/dashboard-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import DummyImage from "../../assets/hans-eiskonen-8Pm_A-OHJGg-unsplash.jpg";
import HelperDisplayCard from "../../components/helper-message-card.component";
import HelperDisplayCardContentStyle from "../../components/helper-display-card-content.component";
import UserDetails from "../../components/user-details-card.component";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

const data02 = {
  labels: ["Inactive Accounts", "Active Accounts"],
  datasets: [
    {
      data: [90, 1021],
      backgroundColor: ["#3BE4E9", "#848E0F"],
    },
  ],
  borderWidth: 1,
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  // scales: {
  //   x: {
  //     grid: {
  //       display: false,
  //     },
  //   },

  //   y: {
  //     grid: {
  //       display: false,
  //     },
  //   },
  // },
};
const labels = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const data03 = {
  labels,
  datasets: [
    {
      label: "No. of Customers",
      backgroundColor: "#D9D9D9",
      borderColor: "#848E0F",
      data: [152, 33, 77, 250, 129, 184],
    },
  ],
};

const DashBoardPage = () => {
  const pieChartStyle = {
    width: "19vw",
    height: "19vw",
    maxHeight: "100%",
    maxWidth: "100%",
  };

  const helperDisplayCardContentStyle = {
    padding: "0.5% 2%",
    marginBottom: "10%",
    backgroundColor: "white",
  };

  const helperDisplayCardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const UserDetailsImageStyle = {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
  };

  //TODO("do the styling when a particulat row is clicked")
  const rowStyle = {};

  const listOfComponentsTop = [
    {
      id: 1,
      component: (
        <HelperDisplayCardContentStyle
          title={"New Customers Today"}
          value={7}
          helperDisplayCardContentStyle={helperDisplayCardContentStyle}
        />
      ),
    },

    {
      id: 2,
      component: (
        <HelperDisplayCardContentStyle
          title={"Active Customers"}
          value={3576}
          helperDisplayCardContentStyle={helperDisplayCardContentStyle}
        />
      ),
    },
  ];

  /*TODO("fix the pie chart and its labels to show to the left") */

  const listOfComponentsBottom = [
    {
      id: 1,
      component: (
        <HelperDisplayCardContentStyle
          title={"Total Customers"}
          value={1111}
          component={<Doughnut data={data02} style={pieChartStyle} />}
          helperDisplayCardContentStyle={helperDisplayCardContentStyle}
        />
      ),
    },
  ];

  const listOfTopCustomers = [
    {
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      thirdInput: `Ksh ${8433}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
    {
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 8888,
      thirdInput: `Ksh ${6262}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
    {
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Jane Doe",
      userName: "@janny",
      secondInput: 9999,
      thirdInput: `Ksh ${6262}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
  ];

  const handleMoreVertClick = () => {
    window.alert("clicked");
  };

  return (
    <div className="main-entry-page dashboard-page">
      <NavigationRail />
      <div className="main-entry-page__Supporting-Content dashboard-page-supporting-content">
        <h3 className="supporting-page-title"> Dashboard </h3>
        <div className="supporting-content-top">
          <div className="item-1-top">
            <HelperDisplayCard
              listOfComponents={listOfComponentsTop}
              helperDisplayCardStyle={helperDisplayCardStyle}
            />
          </div>
          <div className="item-2-top">
            <Line data={data03} options={lineChartOptions} />
          </div>
        </div>
        <div className="supporting-content-bottom">
          <div className="item-1-bottom">
            <HelperDisplayCard
              listOfComponents={listOfComponentsBottom}
              helperDisplayCardStyle={helperDisplayCardStyle}
            />
          </div>

          <div className="item-2-bottom">
            <h4 className="header-title">Top Customers</h4>

            <table className="top-customers-table">
              <tbody>
                <tr className="top-customers-table-header-row">
                  <th></th>
                  <th>Name</th>
                  <th>Points</th>
                  <th>Total Amount</th>
                  <th></th>
                </tr>
                {listOfTopCustomers.map((item) => (
                  <tr key={item.fullName} style={rowStyle}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <UserDetails
                        dp={item.dp}
                        fullName={item.fullName}
                        userName={item.userName}
                        UserDetailsImageStyle={UserDetailsImageStyle}
                      />
                    </td>
                    <td>{item.secondInput}</td>
                    <td>{item.thirdInput}</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={handleMoreVertClick}
                    >
                      {item.icon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
