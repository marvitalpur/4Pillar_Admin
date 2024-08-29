import React, { useState } from 'react';
import SideBar from '../../../components/sideBar';
import CardGrid from './cardGrid';
import { Grid } from '@mui/material';
import User from '../../../assets/images/profile.png';
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';

function Settings() {
  const { user } = useSelector((state) => state.authReducer);
  const [showChangeName, setShowChangeName] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  
  return (
    <SideBar>
      <div className="settings-container">
       

        {/* Conditional rendering for profile-update section */}
        {!showChangeName && !showChangePassword && (
          <> 
           <div className="profile-info">
           <img
             src={`https://kokoranch-development.s3.ap-south-1.amazonaws.com/${user?.photo}`}
             className="trader-profile-navbar_right_user-wrapper_image"
             alt="profile_pic"
           />
           <h1>{user?.firstName}</h1>
           <h2>{user?.email}</h2>
         </div>
          <div className='profile-update'>
            <button className="action-item" onClick={() => setShowChangeName(true)}>
              <FaRegCircleUser color='#bfbfbf' size={20} />
              <h1>Change Name</h1>
            </button>
            <hr style={{width: "70%", height: "2px", marginLeft: "20px"}} />
            <button className="action-item" onClick={() => setShowChangePassword(true)}>
              <CiLock color='#bfbfbf' size={20} />
              <h1>Change Password</h1>
            </button>
          </div>
          </>
        )}

        {showChangeName && (
          <div className='updateInputsMain'>
            {/* Input fields for changing name */}
            <h1> Change Name </h1>
            <hr />
            <label htmlFor="firstName"> First Name </label>
            <input type="text" />
            <label htmlFor="firstName"> Last Name </label>
            <input type="text" />
            <div style={{display: "flex"}}> 
            <button onClick={() => setShowChangeName(false)}>Change Name</button>
            <button onClick={() => setShowChangeName(false)} id='cancelBtn'>Cancel</button>
            </div>
          </div>
        )}

        {showChangePassword && (
          <div className='updateInputsMain'>
          {/* Input fields for changing name */}
          <h1> Change Password </h1>
          <hr />
          <label htmlFor="firstName"> Enter New password </label>
          <input type="password" />
          <label htmlFor="firstName"> Re-enter New password </label>
          <input type="password" />
          <div style={{display: "flex"}}> 
          <button onClick={() => setShowChangeName(false)}>Change</button>
          <button onClick={() => setShowChangeName(false)} id='cancelBtn'>Cancel</button>
          </div>
        </div>
        )}
      </div>
    </SideBar>
  );
}

export default Settings;
