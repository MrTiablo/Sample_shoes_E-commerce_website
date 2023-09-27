import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Econtext } from "../Context/Ecartcontext";
import { Button, Card } from "react-bootstrap";
import Navba from "../Navbar";
import Footer from "../Footer/Footer";

const Details = () => {
  const nav = useNavigate();
  const { Products, cart, setCart } = useContext(Econtext);

  const { id } = useParams();

  const filterid = Products.filter((item) => item.id == id);
  console.log(id);
  const addtocart = () => {
    setCart([...cart, id ]);
    alert("Item added to cart, Go to cart");
    nav("/cart");
  };
  console.log(cart);

  return (
    <>
    <Navba/>
    <div>
      {filterid.map((x) => {
        return (
          <div key={x.id}>
            <Card style={{ maxWidth: "24rem" }} className="hovereffect">
              <Card.Img
                variant="top"
                src={x.Image}
                style={{ maxWidth: "150px", height: "auto" }} // Adjust the image size here
              />
              <Card.Body>
                <Card.Title>{x.name}</Card.Title>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen
                  Shoes.
                </p>
                <Card.Text>${x.price}</Card.Text>
              </Card.Body>
              <Button onClick={addtocart}> Add to cart</Button> <br />
            </Card>
          </div>
        );
      })}
    </div>
    <Footer/>
    </>
  );
};

export default Details;
