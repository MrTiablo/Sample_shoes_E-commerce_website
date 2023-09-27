import { Link } from 'react-router-dom';
import './Footer.css';

function Footer_dis() {
  return (
    <div className="footer">
      <div className="footer_all">
        <div className="footer_description">
          <h3>VISHOE</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            iusto commodi ea numquam qui sapiente sequi corrupti.
          </p>
        </div>
        <div className="footer_description">
          <h3>Shop</h3>
          <ul className="footer_links">
            <li>
              <Link to={'/Shopmen'}>Shop Men</Link>
            </li>
            <li>
              <Link to={'/Shopwomen'}>Shop Women</Link>
            </li>
            <li>
              <Link to={'/lookbook'}>Look Book</Link>
            </li>
            <li>
              <Link to={'/giftcard'}>Gift Card</Link>
            </li>
            <li>
              <Link to={'/Sale'}>Sale</Link>
            </li>
          </ul>
        </div>
        <div className="footer_description">
          <h3>About</h3>
          <ul className="footer_links">
            <li>
              <Link to={'/Ourstory'}>Our story</Link>
            </li>
            <li>
              <Link to={'/Ourmaterials'}>Our materials</Link>
            </li>
            <li>
              <Link to={'/Value'}>Value</Link>
            </li>
            <li>
              <Link to={'/Sustainability'}>Sustainability</Link>
            </li>
            <li>
              <Link to={'/Maunfacture'}>Manufacture</Link>
            </li>
          </ul>
        </div>
        <div className="footer_description">
          <h3>Need help?</h3>
          <ul className="footer_links">
            <li>
              <Link to={'/Faqs'}>FAQs</Link>
            </li>
            <li>
              <Link to={'/Shipping'}>Shipping & Return</Link>
            </li>
            <li>
              <Link to={'/Shoecare'}>Shoe care</Link>
            </li>
            <li>
              <Link to={'/Sizechart'}>Size chart</Link>
            </li>
            <li>
              <Link to={'/Contact'}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer_dis;
