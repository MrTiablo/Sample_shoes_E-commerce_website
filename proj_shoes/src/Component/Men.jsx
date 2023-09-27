import { useContext } from "react";
import { Card } from "react-bootstrap";
import { Econtext } from "../Context/Ecartcontext";
import { useNavigate } from "react-router-dom";
import Navba from "../Navbar";
import Footer from "../Footer/Footer";

const Men = () => {
  const {Products} = useContext(Econtext);
  const navigate = useNavigate();
  const filterproduct= Products.filter((item)=>item.type=='men')
console.log(filterproduct);
  return (
    <>
    <Navba/>
    <div>
      <div className="gap-5 container ">
        <div className="row " style={{ background: " rgb(230, 230, 217)" }}>
          <h1>MEN</h1>
          {filterproduct.map((x) => {
            return (
              <div
                onClick={() => {
                  navigate(`/details/${x.id}`); // Changed nav to navigate
                  alert('View details')
                }}
                className="col-lg-4 col-6 mt-3"
                key={x.id} // Don't forget to provide a unique key
              >
                <Card style={{ maxWidth: "48rem",cursor: 'pointer' }} className="hovereffect">
                  <Card.Img variant="top" src={x.Image} />
                  <Card.Body>
                    <Card.Title>{x.name}</Card.Title>
                    <Card.Text>${x.price}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Men;
