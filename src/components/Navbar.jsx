import { Link }  from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/orders/new">Create New Order</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Order History</Link>
    </nav>
  )
}
