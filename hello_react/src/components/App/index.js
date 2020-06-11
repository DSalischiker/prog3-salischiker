import React from 'react';
/* import logo from './logo.svg'; */
import './index.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Date from '../Date';
function App() {
  //funciones propias
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer text='Este es mi Footer horrendo' />
    </div>
  );
}

export default App;
