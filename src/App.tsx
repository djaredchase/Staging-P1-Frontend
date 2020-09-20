import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/home';
import { NavbarComponent } from './components/navbar';
import { CommunityComponent } from './components/community';
import { ProfileComponent } from './components/profile';
import { TrainerComponent } from './components/trainers';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Switch>
        <Route exact path='/'>
          <HomeComponent/>
        </Route>
        <Route exact path='/login'>
          <LoginComponent/>
        </Route>
        <Route exact path='/register'>
          <RegisterComponent/>
        </Route>
        <Route exact path='/community'>
          <CommunityComponent/>
        </Route>
        <Route exact path='/profile'>
          <ProfileComponent/>
        </Route>
        <Route exact path='/trainers'>
          <TrainerComponent/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
