import React from 'react';
import SideBar from '../../../components/sideBar';
import Table from "../../../components/table"

function Transactions() {
  return (
    <SideBar> 
       <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: '50px'}}> 
      <p style={{color: "#000", fontWeight: "900", fontSize: "5rem"}} > Transctions Screen </p>
      </div>
    </SideBar>
  )
}

export default Transactions;