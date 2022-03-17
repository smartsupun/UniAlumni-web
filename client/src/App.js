import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Mainpost from './components/Main/Mainpost';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Groupauth from './components/Groupcreate/Auth';
import Grouphome from './components/Grouphome/Grouphome';
import Joingroup from './components/Joingroup/Joingroup';


const App = () => (
  <BrowserRouter>
       <Navbar />
    <Container >
       <Routes>
        <Route  path="/" exact element={<Home />}/>
        <Route  path="/Main"  element={<Main />}/>
        <Route  path="/Mainpost"  element={<Mainpost />}/>
        <Route  path="/groupauth"  element={<Groupauth />}/>
        <Route  path="/grouphome"  element={<Grouphome />}/>
        <Route  path="/joingroup"  element={<Joingroup />}/>
        <Route path="/auth"  element={<Auth />} />
          
      </Routes>
    </Container>
      <Footer />
  </BrowserRouter>
);

export default App;
