import { useState } from 'react';

// Components
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar';

// React Router
import { Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {
        user ? (
          <>
          <Navbar/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage/>}/>
            <Route path="/orders" element={<OrderHistoryPage/>}/>
          </Routes>
          </>
        ):(
          <AuthPage/>
        )
      }
    </div>
  );
}

export default App;
