import "./App.css";
import logoBV from "./Imagenes/logoBV.png";
import ListaDeTareas from "./Componentes/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img src={logoBV} className="logo" alt="logoBV" />
        <ul className="links">
          <li>
            <a
              href="https://linkedin.com/in/braianveron"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/braiveron"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

      <div className="pie-pagina">
        <h3>Dev by Braian Veron</h3>
      </div>
    </div>
  );
}

export default App;
