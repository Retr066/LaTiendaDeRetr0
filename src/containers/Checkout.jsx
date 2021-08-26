import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Lista de Pedidos - Tienda de Retr0</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          <h3>{cart.length > 0 ? 'Lista de Pedidos:' : 'Sin pedidos...'}</h3>
          {cart.map((item, i) => (
            <div key={i} className="Checkout-item">
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>{item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item, i)}>
                <i className="fas fa-trash-alt" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
