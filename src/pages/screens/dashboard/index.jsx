import React from 'react';
import SideBar from '../../../components/sideBar';
import Table from "../../../components/table";
import DashboardTable from '../../../components/dashboardTable';
import BlueCircle from "../../../assets/images/blue-circle.svg";
import GreenCircle from "../../../assets/images/green-circle.svg";
import {useSelector} from 'react-redux';

function Dashboard() {
  const {user} = useSelector((state) => state.authReducer)
  console.log("🚀 ~ Dashboard ~ user:", user)
  return (
    <SideBar>
      <div style={{display: "flex", flexDirection: "column"}}>
      <div style={{display: "flex"}}>
      <DashboardTable title="Recent Registered Users" />
      <div style={{backgroundColor: "#fff", width: "25vw", height: "40vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "50px", marginLeft: "40px"}}>
      <h1 style={{color: "#000", fontSize: "1.7rem", fontWeight: "800", marginBottom: "10px"}}> Registered Users Analytics</h1>
    <img
            src={BlueCircle}
            // className="trader-profile-navbar_right_user-wrapper_image"
            alt="profile_pic"
            style={{height: "150px", width: "150px", marginBottom: "-95px"}}
          />
    <h1 style={{color: "#000", fontSize: "1.7rem", fontWeight: "800", textAlign: "center", lineHeight: "1.5"}}> 80% <br/> GROWTH </h1>
    <h1 style={{color: "#bfbfbf",  fontSize: "1.3rem",textTransform: "lowercase", marginTop: "50px"}}> 80% Growth in the users in September 2023 </h1>
    </div>
      </div> 
      <div style={{display: "flex"}}>
      <DashboardTable title="Recent Transactions" />
      <div style={{backgroundColor: "#fff", width: "25vw", height: "40vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "50px", marginLeft: "40px"}}>
      <h1 style={{color: "#000", fontSize: "1.7rem", fontWeight: "800", marginBottom: "10px"}}> Sales Analytics</h1>
    <img
            src={GreenCircle}
            // className="trader-profile-navbar_right_user-wrapper_image"
            alt="profile_pic"
            style={{height: "150px", width: "150px", marginBottom: "-95px"}}
          />
    <h1 style={{color: "#000", fontSize: "1.7rem", fontWeight: "800", textAlign: "center", lineHeight: "1.5"}}> 70% <br/> GROWTH </h1>
    <h1 style={{color: "#bfbfbf",  fontSize: "1.3rem",textTransform: "lowercase", marginTop: "50px"}}> 70% Growth in the users in September 2023 </h1>
    </div>
      </div> 
      </div>
    </SideBar>
  )
}

export default Dashboard;