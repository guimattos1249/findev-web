import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50272051?s=460&v=4" alt="Guilherme Mattos"/>
              <div className="user-info">
                <strong>Guilherme Mattos</strong>
                <span>React, Vue, Node</span>
              </div>
            </header>
            <p>Learning ervery day :D</p>
            <a href="https://github.com/guimattos1249">Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50272051?s=460&v=4" alt="Guilherme Mattos"/>
              <div className="user-info">
                <strong>Guilherme MAttos</strong>
                <span>React, Vue, Node</span>
              </div>
            </header>
            <p>Learning ervery day :D</p>
            <a href="https://github.com/guimattos1249">Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50272051?s=460&v=4" alt="Guilherme Mattos"/>
              <div className="user-info">
                <strong>Guilherme MAttos</strong>
                <span>React, Vue, Node</span>
              </div>
            </header>
            <p>Learning ervery day :D</p>
            <a href="https://github.com/guimattos1249">Acessar Perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/50272051?s=460&v=4" alt="Guilherme Mattos"/>
              <div className="user-info">
                <strong>Guilherme MAttos</strong>
                <span>React, Vue, Node</span>
              </div>
            </header>
            <p>Learning ervery day :D</p>
            <a href="https://github.com/guimattos1249">Acessar Perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
