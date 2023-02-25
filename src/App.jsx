import React from 'react'
import './App.css'
import { Movielist } from './Movielist';
import { TicTacToe } from './TicTacToe';
import { Colorgame } from './Colorgame';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Notfound } from './Notfound';
import { Home } from './Home';
import { useState } from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Addmovie } from './Addmovie';
import { Movieldetails } from './Movieldetails';
import { BasicForm } from './BasicForm';
import { EditMovie } from './EditMovie';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//redirect reqiures Navigate
const queryClient = new QueryClient();

function App() {
  

  const navigate = useNavigate();
const [mode, setMode]=useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgStyles={
    borderRadius:'0px',
    minHeight:'100vh',
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
    <ThemeProvider theme={darkTheme}>
      <Paper sx={bgStyles} elevation={3}>
        <div className="App">

          <AppBar position="static">
            <Toolbar>
              <Button onClick={() => navigate('/')} color="inherit">Home</Button>
              <Button onClick={() => navigate('/movies')} color="inherit">Movies</Button>
              <Button onClick={() => navigate('/movies/addmovie')} color="inherit">Add movies</Button>
              <Button onClick={() => navigate('/addcolor')} color="inherit">Add-color</Button>
              <Button onClick={() => navigate('/tic-tac-toe')} color="inherit">TicTacToe</Button>

              <Button  sx={{marginLeft:'auto'}} onClick={()=>{setMode(mode === 'light' ? 'dark':'light')}} color="inherit" startIcon={mode === 'dark'? <Brightness7Icon/>:<Brightness4Icon/>}>{mode === 'light' ? 'dark':'light'} mode</Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/movies' element={<Movielist />} />
            <Route path='/movies/addmovie' element={<Addmovie />} />
            <Route path='/films' element={<Navigate replace to='/movies' />} />

            <Route path='/movies/:id' element={<Movieldetails />} />
            <Route path='/addcolor' element={<Colorgame />} />
            <Route path='/tic-tac-toe' element={<TicTacToe />} />
            <Route path='/form' element={<BasicForm />} />
            <Route path='/movies/edit/:id' element={<EditMovie />} />
            <Route path='*' element={<Notfound />} />
          </Routes>

        </div>
      </Paper>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;


