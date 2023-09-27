import { Link, Outlet, useNavigate} from "react-router-dom"
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import { Econtext } from "../Context/Ecartcontext";


function Sidebar() {
  const {isLogin,isSetLogin}=useContext(Econtext)
  const nav=useNavigate()
  const Logout=()=>{
    isSetLogin(false)
    nav('/')
    alert('logged out successfully')}
   
  return (
    <>
    <div className="Dropdown">
    <Dropdown style={{textAlign:'end'}}>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      <FontAwesomeIcon icon={faSignOutAlt } />
      </Dropdown.Toggle>

      <Dropdown.Menu>
       { (isLogin==false) ? 
       <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item> :
        <Dropdown.Item onClick={()=>{nav('/register')}}>signup</Dropdown.Item> 
         }
      </Dropdown.Menu>
    </Dropdown>

    <div className="sidebar">
        <h2>ADMIN</h2> <br />
        {/* <button onClick={}>ff</button> */}
    <Link className="sidebar1" to='/admin/adminuser'>Users</Link>
    <Link className="sidebar1" to='/admin/adminproduct'>Products</Link>
    <Link className="sidebar1" to={'admin/revenue'}>Revenue</Link>
      
    </div>
    <div className="h-75 w-75" style={{float:'right'}}>
     
      <Outlet/>
      
    </div>
    </div>
    </>
  )
}

export default Sidebar 