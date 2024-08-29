import React from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaRegUser,
  FaTradeFederation,
  FaRegFile,
  FaRegSun,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiLineChartLine } from "react-icons/ri";
import { MdOutlineFeedback } from "react-icons/md";
import Header from "../header";
import toast from "react-toastify";


function SideBar({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const [vendor] = useState("Vendor");
  const [trader] = useState("Trader");
  const [popupOpenLogin, setPopupOpenLogin] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();
  const storageToken = localStorage.getItem("token");

  const logOut = () => {
toast.success('logout successfull');
navigate("/")
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setSidebar, sidebar });
    }
    return child;
  });
  return (
    <>
<Header />
      <div className="trader-board-wrapper">
      <div id="trader-board-container">
        <aside className={`side-navbar ${sidebar && "active-nav"}`}>
          <div className="logo-div">
            {/* <img
              src={Images.Pictures.logo}
              style={{ margin: "0 auto", width: "7rem" }}
              alt="sunset"
            /> */}
          
          </div>   <h4 className="fs-4">
            <NavLink to="/dashboard" className="trader-link">
              <div className="flex">
                <FaRegUser />
                &nbsp; Dashboard
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-4">
            <NavLink to="/users" className="trader-link">
              <div className="flex">
                <FaTradeFederation />
                &nbsp; Users
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-4">
            <NavLink to="/transactions" className="trader-link">
              <div className="flex">
                <FaRegFile />
                &nbsp; Transactions
              </div>
            </NavLink>
          </h4>
          <h4 className="fs-4">
            <NavLink to="/feedbacks" className="trader-link">
              <div className="trader-inbox-link flex">
                <MdOutlineFeedback />
                &nbsp; Feedbacks
                {/* <span className="count">3</span> */}
              </div>
            </NavLink>
          </h4>

          <h4>
            <NavLink to="/analytics" className="trader-link">
              <div className="flex">
                <RiLineChartLine />
                &nbsp; Analytics
              </div>
            </NavLink>
          </h4>
          <h4>
            <NavLink to="/settings" className="trader-link">
              <div className="flex">
                <FaRegSun />
                &nbsp; Settings
              </div>
            </NavLink>
          </h4>
          <h4>
            <NavLink to="/notify" className="trader-link">
              <div className="flex">
                <IoIosNotificationsOutline />
                &nbsp; Notify users
              </div>
            </NavLink>
          </h4>
          <h4>
            <NavLink to="/chat" className="trader-link">
              <div className="flex">
                <IoChatbubbleOutline />
                &nbsp; Messages
              </div>
            </NavLink>
          </h4>
          <div style={{ marginTop: "5rem" }}>
            <h4 className="fs-4 text-bold" style={{color: "#000", fontWeight: 800}}>
              <Link
                to={"/"}
              onClick={logOut}
                className="flex"
              >
                <FaSignOutAlt />
                &nbsp;Sign Out
              </Link>
            </h4>
          </div>

          {/* <button
                onClick={() => {
                  setPopupOpen(true);
                  setPopupOpenLogin(true);
              }}
                className="product-wrapper_image-desc-wrapper_product-description_bottom_seller-details-wrapper_vendor-btn"
              >
                <h4 className="fs-4 title-color" style={{marginLeft: 0}}>Switch To {vendor} </h4>
              </button> */}
              {/* <button
                onClick={() => {
                  setPopupOpen(true);
                  setPopupOpenLogin(true);}}
                className="product-wrapper_image-desc-wrapper_product-description_bottom_seller-details-wrapper_vendor-btn"
              >
                <h4 className="fs-4 title-color" style={{marginLeft: 0}}>Switch To {trader} </h4>
              </button> */}
        </aside>
        <main>{childrenWithProps}</main>
      </div>
    </div>
    </>
    
  );
}

export default SideBar;
