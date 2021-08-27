import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import { useState } from 'react';


const App = () => {
  const [Response,SetResponse] = useState('');

  return (
    <div className="App">
      {console.log("Rendering App")}
      <Nav />
      <Main Response={Response} SetResponse={SetResponse}/>
    </div>
  );
}

export default App;
