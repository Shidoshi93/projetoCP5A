import './App.css';
import './styles/style.css'
import {useState} from 'react'

function App() {

  /* const [] */
  return (
    <div className="App">
      <header>
        <h1 className="text-center h1">Informações de cada país</h1>

        <form className="space" id="form">
          <label htmlFor="id-pais">Selecione o país</label>
          <select id="id-pais" name="pais" defaultValue="0">
            <option disabled value="0">Selecione</option>
            <option value="australia">Austrália</option>
            <option value="brazil">Brasil</option>
            <option value="United States of America">Estados Unidos</option>
            <option value="mongolia">Mongólia</option>
            <option value="afghanistan">Afeganistão</option>
            <option value="united kingdom">Reino Unido</option>
            <option value="south africa">África do Sul</option>
            <option value="china">China</option>
            <option value="canada">Canada</option>
            <option value="republic of india">Índia</option>
            <option value="argentina">Argentina</option>
            <option value="kkkkkkkkkkkkkk">Melhor país do mundo</option>
          </select>
          <button type="submit">Consultar</button>
        </form>

      </header>

      <main className="space">
        <div>
          <p>Nome: </p><span id="nome">Sem conteúdo</span>
        </div>
        <div>
          <p>Sigla: </p><span id="sigla">Sem conteúdo</span>
        </div>
        <div>
          <p>Capital: </p><span id="capital">Sem conteúdo</span>
        </div>
        <div>
          <p>Região: </p><span id="regiao">Sem conteúdo</span>
        </div>
        <div>
          <p>DDI: </p><span id="ddi">Sem conteúdo</span>
        </div>
        
      </main>

    </div>
  );
}

export default App;
