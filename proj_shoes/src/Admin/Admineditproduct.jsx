import { useContext } from "react";
import { Econtext } from "../Context/Ecartcontext";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Admineditproduct = () => {
  const { product, setProduct } = useContext(Econtext);
  const { id } = useParams();
  const handlefilter = product.find((pro) => pro.id === parseInt(id));
  console.log(handlefilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: handlefilter.id,
      name: e.target.name.value,
      type: e.target.type.value,
      Image: e.target.image.value,
      price: e.target.prize.value,
      size: e.target.size.value,
    };

    const updatedProducts = product.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );

    setProduct(updatedProducts);
      // Show an alert when the form is submitted
  alert("Product updated successfully!");

    // Redirect back to the product details page or another appropriate page
    // Use the router or navigate based on your routing library (e.g., React Router)
  };

  return (
    <div>
      <h3>Edit Product</h3>
      {handlefilter && (
        <div key={handlefilter.id}>
          <div className="container d-flex justify-content-center align-items-center vh-10 ">
            <div style={{ width: "50%" }}>
              <img width={500} src={handlefilter.Image} alt="shoe" />
            </div>
            <div style={{ width: "50%" }}>
              <h3>Product Details</h3>
              <h1>{handlefilter.name}</h1>
              <h2>{handlefilter.type}</h2>
              <h2>{handlefilter.Image}</h2>
              <h2>{handlefilter.price}</h2>
              <h2>{handlefilter.size}</h2>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center vh-50 ">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.name}
                  name="name"
                  style={{ width: "500px" }}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.type}
                  name="type"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.Image}
                  name="image"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.price}
                  name="prize"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={handlefilter.size}
                  name="size"
                />
              </Form.Group>

              <Button variant="primary" type="submit" block >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admineditproduct;
