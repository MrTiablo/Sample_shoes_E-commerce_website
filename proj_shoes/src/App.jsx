import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Navba from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Front from './Component/Front';
import { Econtext } from './Context/Ecartcontext';
import Collection from './Component/Collection';
import { Products } from './Product/Product';
import Men from './Component/men';
import Women from './Component/Women';
import Details from './Details/Details';
import { useState } from 'react';
import { Cart } from './Component/cart';
import Adminuser from './Admin/Adminuser';
import Sidebar from './Admin/Adminsidebar';
import Adminproduct from './Admin/Adminproduct';
import Admineditproduct from './Admin/Admineditproduct';




function App() {
  const [cart,setCart] = useState([])
  const [login,setLogin]= useState([])
  const [profile,setProfile]= useState([]) 
  const [product,setProduct]=useState(Products)
  const [editproduct,setEditproduct]=useState()
  const [search,setSearch]=useState([])
  const [currentuser,setCurrentuser] =useState([])
const [isLogin,isSetLogin]=useState(false)
  return (
    <>
      <div >
        <Econtext.Provider value={{Products,cart,setCart,login,setLogin,profile,setProfile,
          product,setProduct,editproduct,setEditproduct,search,setSearch,currentuser,setCurrentuser,isLogin,isSetLogin}}>
   
        <Routes>
          <Route path='/' element={<Front/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/details/:id' element={<Details/>}/> 
          <Route path='/cart' element={<Cart/>}/> 

          <Route path='/admin' element={<Sidebar/>}>
          <Route index element={<Sidebar/>}/>
          <Route path='adminuser' element={<Adminuser/>}/>
          <Route path='adminproduct' element={<Adminproduct/>}/>
          <Route path='/admin/admineditproduct/:id' element={<Admineditproduct/>}/>
          </Route>
          
       </Routes>
     
       </Econtext.Provider>
      </div>
    
    </>
  )
}

export default App
