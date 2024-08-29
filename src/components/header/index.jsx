import React from 'react'
import { Link } from 'react-router-dom';
// import Images from '../../constants/images'
import { useSelector } from 'react-redux';
import User from "../../assets/images/profile.png";
import Logo from "../../assets/images/4-pillar.svg";

export default function Header({ setSidebar, sidebar, title }) {
    const { user } = useSelector((state) => state.authReducer)

  return (
    <nav className="trader-profile-navbar">
     
      <div className="trader-profile-navbar_left">
        <div
          className="border-0 "
          // id="menu-btn"
          onClick={() => {
            setSidebar(!sidebar)
          }}
        >
           <img
            src={Logo}
            className=""
            style={{ height: '5.0rem'}}
            alt="profile_pic"
          />
          {/* <FaBars /> */}
        </div>
        {/* <h3>{title}</h3> */}
      </div>
      <Link to={"/settings"} className="trader-profile-navbar_right">
        {/* <div className="trader-profile-navbar_right_notification-wrapper">
          <FaBell className="trader-profile-navbar_right_notification-wrapper_icon" />
          <span className="trader-profile-navbar_right_notification-wrapper_count">
            3
          </span>
        </div> */}
        <div className="trader-profile-navbar_right_user-wrapper">

          <span className="trader-profile-navbar_right_user-wrapper_name">
            {user?.firstName + ' ' + user?.lastName}
           <br /> <span style={{ color: "#bfbfbf", fontWeight: 400 }}> {user?.email}
            </span> </span>
          <img
            src={`https://kokoranch-development.s3.ap-south-1.amazonaws.com/${user?.photo}`}
            className="trader-profile-navbar_right_user-wrapper_image"
            alt="profile_pic"
          />
        </div>
      </Link>
    </nav>
  )
}
