import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';
import fetchApiJsonBody from '../utils/fetchApi';
import funcValidations from '../utils/funcValidations';

function LoginPage() {
  const history = useHistory();
  const {
    setUser,
  } = useContext(AppContext);

  const [valid, setValid] = useState(true);
  const [inputValues, setInputValues] = useState({ email: '', password: '' });
  const [errMessage, setErrMessage] = useState('');

  const isValid = async () => {
    const email = funcValidations.validateEmail(inputValues.email);
    const password = funcValidations.validatePassword(inputValues.password);
    if (password && email) {
      setValid(false);
      return;
    }
    setValid(true);
  };

  useEffect(() => {
    isValid();
  }, [inputValues.password, inputValues.emai]);

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.id]: target.value });
  };

  const handleClick = async () => {
    const returnLogin = await fetchApiJsonBody('/login', inputValues);
    if (returnLogin.err) {
      setErrMessage(returnLogin.err);
      return;
    }
    setUser(returnLogin);
    history.push('/products');
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={ inputValues.email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <br />
          <input
            type="password"
            id="password"
            value={ inputValues.password }
            onChange={ handleChange }
          />
        </label>
        <span>{ errMessage }</span>
        <button
          id="enter"
          type="button"
          disabled={ valid }
          onClick={ handleClick }
        >
          Entrar
        </button>
        <button
          id="sign-up"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
