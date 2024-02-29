import logo from './logo.svg';
import './App.css';
import './Navbar.js';
import './Card.js';
import Navbar from './Navbar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>CS 230L</h1>
      <h2>Section - 01</h2>
      <p>WVU ID: 800389594</p>
      <p>Hi I am Jeffrey</p>
      <Card></Card>
    </div>
  );
}

export default App;
