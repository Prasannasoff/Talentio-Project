import React, { useEffect } from 'react'
import Sidebar from '../../Components/Sidebar';

function ManagerReport() {

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar role='manager' />
            <div style={{ display: 'flex', color: 'black' }}>
                Manager Report
            </div>
        </div>
    )
}
export default ManagerReport;