import "../../styles/sales-page.css";
import CustomGeneralBtn from "../../components/custom-general-btn.component";
import SearchBar from "../../components/search-bar.component";
import PaginationNav from "../../components/pagination-nav.component";
import { useState } from "react";
import NavigationRail from "../../components/navigation-rail.component";
import MoreOptionsModal from "../../components/more-options-modal";

const SalesPage = () => {
  const btnStyle = {
    backgroundColor: "black",
    transitionDuration: "0.4s",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "8px 16px",
    color: "white",
  };

  const saleStatus = {
    ACCEPTED: "ACCEPTED",
    REFUNDED: "REFUNDED",
  };
  const rowStyle = {};

  const listOfSales = [
    {
      saleId: 1001,
      saleDate: "26/03/2023",
      associatedSeller: "Joe Doe",
      associatedProducts: "Riri yougurt, Meze Shoe Shine, Benzo battery",
      assoociatedCustomer: "Zoretta Doe",
      totalAmount: `Ksh ${4242}`,
      status: saleStatus.ACCEPTED,
    },

    {
      saleId: 1002,
      saleDate: "26/03/2023",
      associatedSeller: "Joe Doe",
      associatedProducts: "Riri yougurt, Meze Shoe Shine, Benzo battery",
      assoociatedCustomer: "Zoretta Doe",
      totalAmount: `Ksh ${4242}`,
      status: saleStatus.ACCEPTED,
    },

    {
      saleId: 1003,
      saleDate: "26/03/2023",
      associatedSeller: "Joe Doe",
      associatedProducts:
        "Riri yougurt, Meze Shoe Shine, Benzo battery 0000000000000000000000000000000000000000000000000",
      assoociatedCustomer: "Zoretta Doe",
      totalAmount: `Ksh ${4242}`,
      status: saleStatus.ACCEPTED,
    },

    {
      saleId: 1004,
      saleDate: "26/03/2023",
      associatedSeller: "Joe Doe",
      associatedProducts: "Riri yougurt, Meze Shoe Shine, Benzo battery",
      assoociatedCustomer: "Zoretta Doe",
      totalAmount: `Ksh ${4242}`,
      status: saleStatus.ACCEPTED,
    },
    {
      saleId: 1005,
      saleDate: "26/03/2023",
      associatedSeller: "Joe Doe",
      associatedProducts: "Riri yougurt, Meze Shoe Shine, Benzo battery",
      assoociatedCustomer: "Zoretta Doe",
      totalAmount: `Ksh ${321}`,
      status: saleStatus.REFUNDED,
    },

    {
      saleId: 1006,
      saleDate: "26/03/2023",
      associatedSeller: "Joe Doe",
      associatedProducts: "Riri yougurt, Meze Shoe Shine, Benzo battery",
      assoociatedCustomer: "Zoretta Doe",
      totalAmount: `Ksh ${321}`,
      status: saleStatus.REFUNDED,
    },
  ];
  const [showMoreOptionsModal, setMoreOptionsModal] = useState(false);
  const [selectedSaleId, setSelectedSaleId] = useState(null);

  const handleMakeSaleClicked = () => {
    window.alert("clicked");
  };
  
  const handleMoreVertClick = (saleId) => {
    setSelectedSaleId(saleId);
    setMoreOptionsModal(!showMoreOptionsModal);
  };

  const handleOnDeleteClick =  (itemId) => {
    window.alert(itemId)
  }

  const handleOnEditClick =  (itemId) => {
    window.alert(itemId)
  }

  return (
    <div className="main-entry-page sales-page">
      <NavigationRail />
      <div className="main-entry-page__Supporting-Content sales-page-supporting-content">
        <div className="sales-page-header">
          <h1> Sales </h1>

          <CustomGeneralBtn
            btnTitle={"Make Sale"}
            btnIcon={<span class="material-symbols-outlined">add</span>}
            style={btnStyle}
            onClick={handleMakeSaleClicked}
          />
        </div>

        <div className="sales-refinment-container">
          <div>TODO</div>
          <SearchBar placeholder={"Search by <todo>"} />
        </div>

        <div className="sales-page-main">
          <table className="sales-table">
            <tbody>
              <tr className="sales-table-header-row">
                <th style={{ padding: "0% 0% 0% 1%" }}>Sale id</th>
                <th>Sale Date</th>
                <th>Associated Seller(s)</th>
                <th>Associated Product(s)</th>
                <th>Associated Customers(s)</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>

              {listOfSales.map((sale) => (
                <tr key={sale.saleId} style={rowStyle}>
                  <td style={{ padding: "0% 0% 0% 1%" }}>{sale.saleId}</td>
                  <td>{sale.saleDate}</td>
                  <td>{sale.associatedSeller}</td>
                  <td
                    style={{
                      maxWidth: "234px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {sale.associatedProducts}
                  </td>
                  <td>{sale.assoociatedCustomer}</td>
                  <td style={{ fontWeight: "bold" }}>{sale.totalAmount}</td>
                  <td
                    style={{
                      color:
                        sale.status === saleStatus.ACCEPTED
                          ? "#0EFC50"
                          : "#FC0E1C",
                    }}
                  >
                    {sale.status}
                  </td>
                  <td
                    style={{ cursor: "pointer", color: "gray" }}
                  >
                      <span class="material-symbols-outlined" onClick={() => handleMoreVertClick(sale.saleId)}>more_vert</span>
                  </td>
                  { selectedSaleId === sale.saleId && showMoreOptionsModal && <MoreOptionsModal itemId={sale.saleId} onDeleteClick={handleOnDeleteClick} onEditClick={handleOnEditClick}/>}
                </tr>
              ))
              
              }
            </tbody>
          </table>
        </div>
        <PaginationNav />
      </div>
    </div>
  );
};

export default SalesPage;
