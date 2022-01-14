import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Mainpost from './components/Main/Mainpost';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';


const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
       <Routes>
        <Route  path="/Main" exact element={<Main />}/>
        <Route  path="/Mainpost" exact element={<Mainpost />}/>
        <Route  path="/" exact element={<Home />}/>
        <Route path="/auth" exact element={<Auth />} />
          
      </Routes>
      {/* <Footer /> */}
    </Container>
  </BrowserRouter>
);

export default App;
