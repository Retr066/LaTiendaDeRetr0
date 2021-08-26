import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const buyerLocation = useGoogleAddress(
    buyer[0].address,
    buyer[0].apto,
    buyer[0].city,
    buyer[0].state
  );

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name ?? 'Comprador'}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara el 3 dias habiles</span>
        <div className="Success-map">
          {buyerLocation?.lat && <Map data={buyerLocation} />}
        </div>
      </div>
    </div>
  );
}

export default Success;
