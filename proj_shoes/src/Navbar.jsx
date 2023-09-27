import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Searchbar from './Searchbar';
import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Econtext } from './Context/Ecartcontext';

function Navba() {
 const {currentuser,isLogin,isSetLogin,cart}=useContext(Econtext)
console.log( currentuser);
 const myNav=useNavigate()
const Logout=()=>{
  isSetLogin(false)
  alert('logged out successfully')
}
  return (
    <div>
      
      <Navbar bg="light" data-bs-theme="light">
        <Container className='cont_bg'>
          <Link className="navbar-brand brand" to="/">VISHOE</Link>
          <Nav className="me-auto">
            <Link className="nav-link" to={"/men"}>MEN</Link>
            <Link className="nav-link" to={"/women"}>WOMEN</Link>
            <Link className="nav-link" to={"/collection"}>COLLECTION</Link>
            <Link className="nav-link" to={"/lookbook"}>LOOKBOOK</Link>
            <Link className="nav-link" to={"/sale"}>SALE</Link>
          </Nav>
          <div style={{marginTop:'20px'}}>
          <Searchbar/>
          </div>
          
          <div className='loci ml-auto'>
           
            <Link className='nav-link'>
              &nbsp;
              



    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      <FontAwesomeIcon icon={faUser} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
       { (isLogin==false) ?  
    
        <Dropdown.Item onClick={()=>{myNav('/register')}}>signup</Dropdown.Item> :
        <>
        <Dropdown.Item>{currentuser}</Dropdown.Item>
        <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
        </>

       }
      </Dropdown.Menu>
    </Dropdown>
           

            </Link>
            <Link className='nav-link n' to={'/cart'}>
              <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;
              <span className="badge bg-danger">{cart.length}</span>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navba;
 





  


