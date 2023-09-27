import { useContext } from "react";
import { Econtext } from "../Context/Ecartcontext";
import './Adminproduct.css';
import { useNavigate } from "react-router-dom";

function Adminproduct() {
    const {product,setProduct} = useContext(Econtext);
    console.log(product);
    const navigate=useNavigate() 

    // Function to handle the delete button click
    const handleDelete = (productId) => {
      const deleteproduct= product.filter((produ)=>produ.id!==productId)
      setProduct(deleteproduct)
        console.log(`Delete product with ID: ${productId}`);
    };

    // Function to handle the update button click
    const handleUpdate = (productId) => {
    navigate(`/admin/admineditproduct/${productId}`)
    console.log(`Update product with ID: ${productId}`);
    };

    return (
        <div>
            <h1>VIEW PRODUCTS</h1>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Actions</th> {/* Add a column for actions */}
                    </tr>
                </thead>
                <tbody>
                    {product.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.type}</td>
                            <td>{prod.name}</td>
                            <td><img className="product-image" src={prod.Image} alt={prod.name} /></td>
                            <td>${prod.price}</td>
                            <td>
                                <button onClick={() => handleUpdate(prod.id)}>Edit</button> &nbsp;
                                <button onClick={() => handleDelete(prod.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Adminproduct;
