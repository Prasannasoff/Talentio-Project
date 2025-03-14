import { useState } from 'react'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import NewArrival from './Pages/User/NewArrival';
import Register from './Pages/Register';
import Home from './Pages/User/Home';
import Cart from './Pages/User/Cart';
import Shop from './Pages/User/Shop';
import AdminPage from './Pages/Admin/AdminPage';
import ManagerPage from './Pages/Manager/ManagerPage';
import AdminEmployee from './Pages/Admin/AdminEmployee';
import ManagerReport from './Pages/Manager/ManagerReport';
import ProtectedRoute from './Route/ProtectedRoute';
import { AuthProvider } from './Context/AuthContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div style={{ display: "flex", height: "100vh" }}>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/new' element={<NewArrival />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path='/adminEmployee' element={<AdminEmployee />}></Route>
            </Route>
            <Route element={<ProtectedRoute allowedRoles={["manager"]} />}>
              <Route path="/manager" element={<ManagerPage />} />
            </Route>

          </Routes>
        </AuthProvider>
      </div>

    </BrowserRouter>
  )
}

export default App
