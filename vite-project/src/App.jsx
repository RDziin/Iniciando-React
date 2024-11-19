import { useState } from "react";
import './App.css'

const App = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    setMessage(`Olá, ${name}!! Seja bem-vindo(a)!`);
  };

  return (
    <div id="main">
      <h1>Insira seu nome</h1>
      <div id="box">
      <input  
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Digite seu nome"
      />

      <button
        onClick={handleButtonClick}
      >
        Enviar
      </button>
      </div>
      {message && (
        <p>{message}</p>
      )}
    </div>
  );
};

export default App;
