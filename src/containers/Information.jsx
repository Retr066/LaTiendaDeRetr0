import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

function Information() {
  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const onSubmit = (data) => {
    addToBuyer(data);
    history.push('/checkout/payment');
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de Contacto:</h2>
        </div>
        <div className="Information-form">
          <form>
            <input
              type="text"
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 70,
              })}
              placeholder="Nombre Completo(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {(errors.name?.type === 'required' &&
                'El campo nombre es requerido') ||
                (errors.name?.type === 'minLength' &&
                  'El campo nombre tiene un minino de 2 caracteres') ||
                (errors.name?.type === 'maxLength' &&
                  'El campo tiene un maximo de 70 caracteres')}
            </p>
            <input
              type="text"
              {...register('email', { required: true })}
              placeholder="Correo Electronico(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {errors.email?.type === 'required' &&
                'El campo Correo es requerido'}
            </p>
            <input
              type="text"
              {...register('address', { required: true })}
              placeholder="Dirreccion(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {errors.address?.type === 'required' &&
                'El campo dirreccion es requerido'}
            </p>
            <input
              type="text"
              {...register('apto', { required: true })}
              placeholder="Distrito(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {errors.apto?.type === 'required' && 'El campo Apto es requerido'}
            </p>
            <input
              type="text"
              {...register('city', { required: true })}
              placeholder="Ciudad(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {errors.city?.type === 'required' &&
                'El campo Ciudad es requerido'}
            </p>
            <input
              type="text"
              {...register('state', { required: true })}
              placeholder="Estado(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {errors.state?.type === 'required' &&
                'El campo Estado es requerido'}
            </p>
            <input
              type="text"
              {...register('cp', { required: true })}
              placeholder="Codigo Postal(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {errors.cp?.type === 'required' && 'El campo Postal es requerido'}
            </p>
            <input
              type="text"
              {...register('phone', { required: true, maxLength: 9 })}
              placeholder="Telefono(*)"
              autoComplete="off"
            />
            <p className="form-error">
              {(errors.phone?.type === 'required' &&
                'El campo Telefono es requerido') ||
                (errors.name?.type === 'maxLength' &&
                  'El campo celular debe tener 9 digitos')}
            </p>
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit(onSubmit)}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item, index) => (
          <div className="Information-item" key={index}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
