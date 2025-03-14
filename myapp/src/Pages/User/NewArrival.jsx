import React from 'react'
import Sidebar from '../../Components/Sidebar';
function NewArrival() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={'employee'} />
      <div style={{ display: 'flex', color: 'black' }}>
        NewArrivals
      </div>
    </div>
  )
}

export default NewArrival;