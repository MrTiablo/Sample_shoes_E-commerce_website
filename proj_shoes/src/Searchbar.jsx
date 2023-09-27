import { useContext } from "react"
import { Econtext } from "./Context/Ecartcontext"
import { Dropdown,Form,Image} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Searchbar() {
    const nav=useNavigate()
    const {Products,search,setSearch}=useContext(Econtext)
     
    const searchProduct = (event) => {
      const typingvalue = event.target.value.toLowerCase();
  
      var value = Products.filter(
        (prd) => prd.name.toLowerCase().slice(0, typingvalue.length) == typingvalue
      );
     setSearch(value);
    };
  return (
    <>
    <div>
       <Dropdown>
      <Dropdown.Toggle className="border-0" style={{background:'transparent'}} >
      <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={searchProduct}
          />
         
        </Form>
        
      </Dropdown.Toggle>

   
        
     
              <Dropdown.Menu>
        {search.map((x) => {
          return (
                <Dropdown.Item  onClick={()=>nav(`/details/${x.id}`)} key={x.id }> <Image src={x.Image} rounded  className="w-25"/>{x.name}</Dropdown.Item>
               
                );
              })}
              </Dropdown.Menu>

            
        </Dropdown>
      </div>
   </>
    
  )
}

export default Searchbar