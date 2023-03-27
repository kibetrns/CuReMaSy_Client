import { useState } from "react";
import "../styles/pagination-nav.component.css";


const PaginationNav = ({ onNextIconClick }, { onPrevIconClick }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [totalPageNumber, setTotalPageNumber] = useState(10);

  const handlePrevIconClick = () => {
    setCurrentPageNumber(currentPageNumber - 1);
  };

  const handleNextIconClick = () => {
    if (currentPageNumber < totalPageNumber - 1) {
      setCurrentPageNumber(currentPageNumber + 1);
    }
  };

  return (
    <div className="pagination-nav">
      <div className="pagination-nav__Left">
        <h3>
          Page {currentPageNumber + 1} of {totalPageNumber}
        </h3>
      </div>

      <div className="pagination-nav__Right">
        {currentPageNumber > 0 && (
          <span
            id="back-icon"
            className="material-symbols-outlined"
            onClick={handlePrevIconClick}
          >
            arrow_back_ios
          </span>
        )}
        {currentPageNumber < totalPageNumber - 1 && (
          <span
            id="next-icon"
            className="material-symbols-outlined"
            onClick={handleNextIconClick}
          >
            arrow_forward_ios
          </span>
        )}
      </div>
    </div>
  );
};

export default PaginationNav;
