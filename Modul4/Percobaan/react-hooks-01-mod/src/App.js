import './App.css';
import UserContext from './context/UserContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Effect from './learn-useEffect';
import { useState } from 'react';
import InputComponent from './learn-useState';
import Context from './learn-useContext';
function App() {
  const [name, setName] = useState('Strangers');
  return (
    <Router>
      <div className='App-header'>
        <nav className='NavBar'>
          <ul className='ul'>
            <li className='li'>
              <Link to='/'>Use State</Link>
            </li>
            <li className='li'>
              <Link to='/effect'>Use Effect</Link>
            </li>
            <li className='li'>
              <Link to='/context'>Use Context</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{ name, setName }}>
          {console.log(name)}
          <Routes>
            <Route path='/' exact element={<InputComponent />} />
            <Route path='/effect' exact element={<Effect />} />
            <Route path='/context' exact element={<Context />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
export default App;
