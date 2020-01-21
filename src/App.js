import React, {useState, useEffect} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [github_username, setGithubusername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      },
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubusername(e.target.value)}
              />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
              />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                />
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
