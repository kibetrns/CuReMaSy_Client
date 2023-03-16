import "../../styles/dashboard-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import NewCustTodayCard from "../../components/helper-display-card-content.component";
import DummyImage from "../../assets/hans-eiskonen-8Pm_A-OHJGg-unsplash.jpg";
import HelperDisplayCard from "../../components/helper-message-card.component";
import HelperDisplayCardContent from "../../components/helper-display-card-content.component";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  PieChart,
  Pie,
} from "recharts";
import UserDetails from "../../components/user-details-card.component";
import SingleUserEntry from "../../components/single-user-entry.component";

const DashBoardPage = () => {
  const pieChartStyle = {
    width: "19vw",
    height: "19vw",
  };

  const helperDisplayCardContent = {
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

  const rowStyle = {
    borderBottom: "1px solid white",
  };

  const data01 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  const listOfComponentsTop = [
    {
      id: 1,
      component: (
        <HelperDisplayCardContent
          title={"New Customers Today"}
          value={7}
          // component={<img src={DummyImage} style={pieChartStyle}></img>}
          helperDisplayCardContent={helperDisplayCardContent}
        />
      ),
    },

    {
      id: 2,
      component: (
        <HelperDisplayCardContent
          title={"Active Customers"}
          value={3576}
          // component={<img src={DummyImage} style={pieChartStyle}></img>}
          helperDisplayCardContent={helperDisplayCardContent}
        />
      ),
    },
  ];

  const listOfComponentsBottom = [
    {
      id: 1,
      component: (
        <HelperDisplayCardContent
          title={"Total Customers"}
          value={1111}
          component={
            <PieChart width={730} height={250} style={pieChartStyle}>
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          }
          helperDisplayCardContent={helperDisplayCardContent}
        />
      ),
    },
  ];

  const data = [
    {
      name: "Sun",
      customerCount: 4000,
    },
    {
      name: "Mon",
      customerCount: 3000,
    },
    {
      name: "Tue",
      customerCount: 2000,
    },
    {
      name: "Wed",
      customerCount: 2780,
    },
    {
      name: "Thur",
      customerCount: 1890,
    },
    {
      name: "Friday",
      customerCount: 2390,
    },
    {
      name: "Sat",
      customerCount: 3490,
    },
  ];

  const listOfTopCustomers = [
    {
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Maggie Doe",
      userName: "@gi_doe",
      secondInput: 9999,
      thirdInput: `Ksh ${8433}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
    {
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Maggie Doe",
      userName: "@gi_doe",
      secondInput: 9999,
      thirdInput: `Ksh ${8433}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
    {
      dp: <img src={DummyImage} style={UserDetailsImageStyle}></img>,
      fullName: "Maggie Doe",
      userName: "@gi_doe",
      secondInput: 9999,
      thirdInput: `Ksh ${8433}`,
      icon: <span class="material-symbols-outlined">more_vert</span>,
    },
  ];

  const handleMoreVertClick = () => {
    window.alert("clicked");
  };

  /*TODO("Add the bottom line to the single entry of customer in the table")
    TODO("Fix the pie chart not showing in its parent div")
  */

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
            <LineChart
              width={700}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="customerCount"
                stroke="#848E0F"
                strokeWidth={3}
              />
            </LineChart>
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
                <tr>
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
