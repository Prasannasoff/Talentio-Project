import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar';
import axios from 'axios';
function Cart() {

  return (
    <div style={{ display: 'flex' }}>
            <Sidebar role={'employee'} />

      <div style={{ display: 'flex', color: 'black' }}>
        Cart
      </div>
    </div>
  )
}

export default Cart;