import assembly from './assets/img/C++.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>Linguagem C++</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>A linguagem C++ foi desenvolvida por Bjarne Stroustrup na década de 1980 como uma extensão da linguagem C. O objetivo era adicionar recursos de orientação a objetos (POO) à linguagem C. </li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>A linguagem de programação C++ é uma extensão da linguagem C, que permite criar programas complexos e de alto desempenho. É uma linguagem compilada, ou seja, o código-fonte é traduzido em código objeto para que a máquina possa executá-lo </li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Jonatan / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
