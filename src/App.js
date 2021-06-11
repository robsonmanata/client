import React,{useState} from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import { Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';


const App = () => {
  const [formVisibility, setFormVisibility] = useState(true);
  
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar setFormVisibility={setFormVisibility}/>
      <Switch>
      <Route exact path='/' render={() => <Home formVisibility={formVisibility} setFormVisibility={setFormVisibility} />}/>
      <Route exact path="/auth" render={() => <Auth  setFormVisibility={setFormVisibility} />} />
      </Switch>
    </Container>
  </BrowserRouter>
  );
};

export default App;