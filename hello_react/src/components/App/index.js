import React from 'react';
/* import logo from './logo.svg'; */
import './index.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

/* function App() {
  //funciones propias
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer text='Este es mi Footer horrendo' />
    </div>
  );
} */

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('Se ejecutó el constructor');
    //INICIALIZAR STATE
    this.state = {
      date: new Date(),
      nameAlumno: "Diego"
    };
  }

  componentDidMount() {
    console.log('Se ejecutó ComponentDidMount');
    //FETCH DE DATA
    this.setState({ nameAlumno: "Robert" });
  }
  render() {
    //MOSTRAR DATA EN HTML (SOLO JSX)
    //SE EJECUTA AL INICIO Y CADA VEZ QUE CAMBIA EL STATE
    console.log('Se ejecutó el render');
    return <div className="App">
      <Header name={this.state.nameAlumno} />
      <Main />
      <Footer text="Este es mi footer" fecha={this.state.date}></Footer>
    </div>;
  }
}

export default App;
