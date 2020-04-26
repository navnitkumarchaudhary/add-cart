import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { Container, Cart } from './styles';
import star from '../../assets/images/star.png';
import { useSelector } from 'react-redux';

const Header = () => {

  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/add-cart">
        <img style={{ width: "50px", height: "50px" }} src={star} alt="Add Cart" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;