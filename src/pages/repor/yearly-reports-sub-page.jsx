import "../../styles/yearly-reports-sub-page.css";
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

const YearlyReportsSubPage = () => {

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

  
        const labels = ["2020", "2021", "2022", "2023" ]

        const dataYearly = { 
          labels,
          datasets: [
            {
              label: "Declined",
              backgroundColor: "#3BE4E9",
              data: [342, 543, 123, 141],
            },
            {
              label: "Approved",
              backgroundColor: "#848E0F",
              data: [1046, 424, 234, 621],
            },
          ],
      
        }

   
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
        <div className="Monthly-reports-sub-page-main">
               
        <div className="supporting-content-top-reports supporting-content-top-reports-monthly" >
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
          className="supporting-content-bottom-reports supporting-content-bottom-reports-monthly"
          style={{ backgroundColor: "white" }}
        >
          <Bar options={options} data={dataYearly} />
        </div>
        </div>
    )
}

export default YearlyReportsSubPage