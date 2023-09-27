import { Button } from 'react-bootstrap';
import './Front.css';
import { useNavigate } from 'react-router-dom';
import Navba from '../Navbar';
import Footer from '../Footer/Footer';

const Front = () => {
  const nav = useNavigate();

  return (
    <>
    <Navba/>
    <div className="front-container">
      <div className="hero-section">
        <h1 className="hero-title">LOVE THE PLANET WE WALK ON</h1>
        <p className="hero-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolores id voluptates, aliquam ipsa ratione explicabo
        </p>
        <div className="cta-buttons">
          <Button
            variant="outline-light"
            size="lg"
            className="cta-button"
            onClick={() => nav('/men')}
          >
            Shop Men
          </Button>
          <Button
            variant="outline-light"
            size="lg"
            className="cta-button"
            onClick={() => nav('/women')}
          >
            Shop Women
          </Button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Front;
