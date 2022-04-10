import React from 'react';
import { useContext } from 'react';
import { notasProvider } from '../../contexts';
import "./style.css";
import sun from "../../images/icon-sun.svg"


function Input() {
  const { criaNota, texto, setTexto } = useContext(notasProvider);

  return (
    <>
      <div className='container__logo'>
        <h1 className='logo'>T O D O</h1>
        <img className='logo__sol' src={sun} alt="" />
      </div>
      <input
        className="input__criar-nota"
        type="text"
        placeholder="Create a new todo..."
        onChange={(evento) => {
          setTexto(evento.target.value)
        }}
        onKeyDown={criaNota}
        value={texto}
      />
    </>
  );
}

export default Input;