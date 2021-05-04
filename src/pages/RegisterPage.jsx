import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';
import fetchApiJsonBody from '../utils/fetchApi';
import funcValidations from '../utils/funcValidations';

// import '../style/LoginRegister.css';

// const logo = require('../images/logo.png');

function RegisterPage() {
  const history = useHistory();
  const {
    setUser,
  } = useContext(AppContext);

  const [valid, setValid] = useState(true);
  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errMessage, setErrMessage] = useState('');

  const isValid = () => {
    const email = funcValidations.validateEmail(inputValues.email);
    const password = funcValidations.validatePassword(inputValues.password);
    const name = funcValidations.validateName(inputValues.name);
    if (email && name && password) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  useEffect(() => isValid(),
    [inputValues.name, inputValues.password, inputValues.email]);

  const handleChange = ({ target }) => {
    setInputValues({ ...inputValues, [target.id]: target.value });
  };

  const handleClick = async () => {
    const returnSignup = await fetchApiJsonBody('/register', inputValues);
    if (returnSignup.err) {
      setErrMessage(returnSignup.err);
      return;
    }
    setUser(returnSignup);
    history.push('/products');
  };

  return (
    <div>
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            value={ inputValues.name }
            onChange={ handleChange }
          />
        </label>
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
          <input
            type="password"
            id="password"
            value={ inputValues.password }
            onChange={ handleChange }
          />
        </label>
        <span>{errMessage}</span>
        <button
          id="sign-up"
          type="button"
          disabled={ valid }
          onClick={ handleClick }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
