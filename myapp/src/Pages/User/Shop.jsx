import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar';
import axios from 'axios';
function Shop() {

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={'employee'} />
      <div style={{ display: 'flex', color: 'black' }}>
        Shop
      </div>
    </div>
  )
}

export default Shop;