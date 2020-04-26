import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { Container, ProductTable, Total } from './styles';
import * as CartActions from '../../store/actions';
import { toast } from 'react-toastify';

const Cart = () => {

  const dispatch = useDispatch();

  const cartProducts = useSelector(state => state.cart.map(product => ({
    ...product,
    subtotal: product.price.actual * product.amount
  })));

  const totalAmount = useSelector(state =>
    state.cart.reduce((total, product) => {
      return total + product.price.actual * product.amount;
    }, 0),
  );

  const discount = useSelector(state =>
    state.cart.reduce((discount, product) => {
      return discount + (product.price.display - product.price.actual) * product.amount;
    }, 0),
  );


  // function for increase the product item 
  const increment = (product) => {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  // function for decrease the product item 
  const decrement = (product) => {
    if (product.amount > 1) {
      dispatch(CartActions.updateAmount(product.id, product.amount - 1));
    } else {
      dispatch(CartActions.removeFromCart(product.id));
    }
  }

  // function to show the msg at checkout 
  const handleCheckout = () => {
    toast("Thank you for shoping. Have a good day!!!",
      {
        className: 'foo-bar',
        type: toast.TYPE.SUCCESS
      });
  }

  return (
    <Container>
      <h2>My Cart</h2>
      <ProductTable>
        <tbody>
          {cartProducts.map(product => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </td>
              <td>
                <strong>{product.name}</strong>
                <span>₹ {product.price.actual} <span style={{ color: "#aaa", fontWeight: "normal", margin: "0 5px" }}><del>{product.price.display}</del> </span><span style={{ color: "green", margin: "0 10px" }}>{product.discount}% off</span></span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)} >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)} >
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>₹ {product.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={() => dispatch(CartActions.removeFromCart(product.id))} >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button" onClick={handleCheckout}>Finish your order</button>
        <Total>
          <span>Discount</span>
          <strong>₹ {discount}</strong>
        </Total>
        <Total>
          <span>Total Amount</span>
          <strong>₹ {totalAmount}</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;