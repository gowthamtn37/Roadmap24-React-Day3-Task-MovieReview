import React from 'react'
import './App.css'
import { Movielist } from './Movielist';
import { TicTacToe } from './TicTacToe';
import { Colorgame } from './Colorgame';
import { Routes, Route, Link } from 'react-router-dom';
import { height } from '@mui/system';
import { Notfound } from './Notfound';
import { Home } from './Home';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to='/addcolor'>Color Game</Link>
          </li>
          <li>
            <Link to='/tic-tac-toe'>Tic Tac Toe</Link>
          </li>
        </ul>
      </nav>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movielist/>}/>
      <Route path='/addcolor' element={<Colorgame/>}/>
      <Route path='/tic-tac-toe' element={<TicTacToe/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>

    </div>
  );
}

export default App;




