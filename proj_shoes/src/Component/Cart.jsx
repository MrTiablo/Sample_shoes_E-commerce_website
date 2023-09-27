import { useContext } from "react"
import { Econtext } from "../Context/Ecartcontext"
import { Button, Card } from "react-bootstrap"
import './Cart.css'
import Navba from "../Navbar"
import Footer from "../Footer/Footer"

export const Cart = () => {
    const { Products, cart,setCart } = useContext(Econtext)
    console.log(cart);

    const cartid = cart.map((item) => parseInt(item))


    const filterproduct = Products.filter((item) => cartid.includes(item.id))
    console.log(filterproduct);
    console.log(cartid);
    const removeFromCart = (productId) => {
        const updatedCart = cartid.filter(item => item !== productId);
        setCart(updatedCart);
    }

    return (
        <>
        <Navba/>
        <div>
            <div className="gap-5 container">
                <div className="row" style={{ background: "rgb(230, 230, 217)" }}>
                    <h1>CART</h1>
                    {filterproduct.map((x) => {
                        return (
                            <div
                                key={x.id} // Don't forget to provide a unique key
                                className="col-lg-4 col-6 mt-3"
                            >
                                <Card style={{ maxWidth: "18rem", cursor: 'pointer' }} className="hovereffect">
                                    <Card.Img variant="top" src={x.Image} style={{ maxWidth: "100%", height: "auto" }} /> {/* Adjust image dimensions */}
                                    <Card.Body>
                                        <Card.Title>{x.name}</Card.Title>
                                        <Card.Text>${x.price}</Card.Text>
                                        <Button variant="danger" onClick={() => removeFromCart(x.id)}>Remove</Button>
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
    )
}
