import "../../styles/products-page.css";
import NavigationRail from "../../components/navigation-rail.component";
import CustomGeneralBtn from "../../components/custom-general-btn.component";
import PaginationNav from "../../components/pagination-nav.component";
import MoreOptionsModal from "../../components/more-options-modal";
import { useState } from "react";
const ProductsPage = () => {



  const btnStyleCateg = {
    backgroundColor: "black",
    transitionDuration: "0.4s",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "8px 16px",
    color: "white",
    display: "flex",
    alignItems: "center",
    marginRight: "16px"
  };
  
  const btnStyleProd = {
    backgroundColor: "black",
    transitionDuration: "0.4s",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "8px 16px",
    color: "white",
    display: "flex",
    alignItems: "center",
  }

    //TODO("do the styling when a particulat row is clicked")
    const rowStyle = {};

  const listOfProducts = [
    {
      productId: "20230313112547-c0cbcfa33da5",
      dateUploaded: "13/02/2023",
      productName: "Benzo Battery",
      productCategories: "Auto Mobile, Car Parts",
      productDescription: "odio pellentesque diam volutpat commodo .....",
      productPrice: "Ksh 19022",
    },
    {
      productId: "20230313112547-c0cbcfa33da4",
      dateUploaded: "13/02/2023",
      productName: "Riri youghurt",
      productCategories: "Dairy",
      productDescription: "odio pellentesque diam volutpat commodo .....",
      productPrice: "Ksh 89",
    },
    {
      productId: "20230313112547-c0cbcfa33da3",
      dateUploaded: "13/02/2023",
      productName: "Benzo Battery",
      productCategories: "Auto Mobile, Car Parts",
      productDescription: "odio pellentesque diam volutpat commodo .....",
      productPrice: "Ksh 19022",
    },
    {
      productId: "20230313112547-c0cbcfa33da2",
      dateUploaded: "13/02/2023",
      productName: "Bima chaser",
      productCategories: "Auto Mobile, Car Parts",
      productDescription: "odio pellentesque diam volutpat commodo .....",
      productPrice: "Ksh 19022",
    },
    {
      productId: "20230313112547-c0cbcfa33da3",
      dateUploaded: "13/02/2023",
      productName: "NOYS OLED ",
      productCategories: "Electronics, Home Appliances",
      productDescription: "odio pellentesque diam volutpat commodo .....",
      productPrice: "Ksh 11022",
    },

  ]

  const [showMoreOptionsModal, setMoreOptionsModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);


  /*TODO("complete the actions to be taken by these functions ")*/
  const handleAddCategory = () => {};

  const handleAddProduct = () => {};

    
  const handleMoreVertClick = (productId) => {
    setSelectedProductId(productId);
    setMoreOptionsModal(!showMoreOptionsModal);
  };

  const handleOnDeleteClick =  (itemId) => {
    window.alert(itemId)
  }

  const handleOnEditClick =  (itemId) => {
    window.alert(itemId)
  }

  return (
   
   <div className="main-entry-page products-page">
      <NavigationRail />
      <div className="main-entry-page__Supporting-Content products-page-supporting-content">
        <div className="products-page-header">
          <h1>Products</h1>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <CustomGeneralBtn
                btnTitle={"Add Category"}
                btnIcon={<span class="material-symbols-outlined">add</span>}
                style={btnStyleCateg}
                onClick={handleAddCategory}
              />
              <CustomGeneralBtn
                btnTitle={"Add Product"}
                btnIcon={<span class="material-symbols-outlined">add</span>}
                style={btnStyleProd}
                onClick={handleAddProduct}
              />
            </div>
          </div>
        </div>
        <div className="products-page-main">
          <table className="products-table">
              <tbody>
                <tr className="products-table-header-row">
                  <th style={{padding:"0% 0% 0% 1%"}} >Product id</th>
                  <th>Date Updated</th>
                  <th>Product Name</th>
                  <th>Product Categories</th>
                  <th>Product Description</th>
                  <th>Product Price</th>
                  <th></th>
                  <th></th>
                </tr>
                {listOfProducts.map((item) => (
                  <tr key={item.productId} style={rowStyle}>
                    <td style={{padding:"0% 0% 0% 1%"}}>{item.productId}</td>
                    <td>{item.dateUploaded}</td>
                    <td>{item.productName}</td>
                    <td>{item.productCategories}</td>
                    <td>{item.productDescription}</td>
                    <td style={{fontWeight: "bold"}}>{item.productPrice}</td>

                    <td
                      style={{ cursor: "pointer", color:"gray"}}
                      onClick={() => handleMoreVertClick(item.productId)}
                    >
                      <span class="material-symbols-outlined">more_vert</span>
                    </td>
                    { selectedProductId === item.productId && showMoreOptionsModal && <MoreOptionsModal itemId={item.productId} onDeleteClick={handleOnDeleteClick} onEditClick={handleOnEditClick}/>}

                  </tr>
                ))}
              </tbody>
            </table>
        </div>
        <PaginationNav />
      </div>
    </div>
  );
};

export default ProductsPage;
