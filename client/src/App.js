import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Mainpost from './components/Main/Mainpost';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Auth from './components/Auth/Auth';
import Groupauth from './components/Groupauth/Auth';
import Grouphome from './components/Grouphome/Grouphome';


const App = () => (
  <BrowserRouter>
      <Navbar />
    <Container maxWidth="lx">
       <Routes>
        <Route  path="/Main" exact element={<Main />}/>
        <Route  path="/Mainpost"  element={<Mainpost />}/>
        <Route  path="/Groupauth"  element={<Groupauth />}/>
        <Route  path="/Grouphome"  element={<Grouphome />}/>
        <Route  path="/" exact element={<Home />}/>
        <Route path="/auth" exact element={<Auth />} />
          
      </Routes>
    </Container>
      <Footer />
  </BrowserRouter>
);

export default App;
