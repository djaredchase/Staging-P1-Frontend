import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/home';
import { NavbarComponent } from './components/navbar';
import { CommunityComponent } from './components/community';
import { ProfileComponent } from './components/profile';
import { TrainerComponent } from './components/trainers';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Switch>
        <Route exact path='/'>
          <HomeComponent/>
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
