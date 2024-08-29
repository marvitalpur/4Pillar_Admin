import React from 'react';
import LineChart from './lineChart';
import SideBar from '../../../components/sideBar';
import Cards from './cards';
// import RecordButton

function Analytics() {
  return (
    <SideBar> 
      <Cards />
      <div style={{backgroundColor: "#fff", width: "100%", height: "75vh", padding: "30px", marginTop: "100px", marginBottom: "50px"}}> 
      <h1 style={{fontFamily: "SpaceGrotesk", color: "#000", fontWeight: 900, fontSize: "2.0rem"}}> Recent Report </h1>
      <button> Daily </button>
    <LineChart />
    </div>
    </SideBar>
  )
}

export default Analytics