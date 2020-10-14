import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomeComponent } from './components/home';
import { NavbarComponent } from './components/navbar';
import { CommunityComponent } from './components/community';
import { ProfileComponent } from './components/profile';
import { TrainerComponent } from './components/trainers';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Train } from '@material-ui/icons';

function App() {
  const user = useSelector((state: RootStateOrAny) => state.user);

  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path='/'>
          <HomeComponent />
        </Route>
        <Route exact path='/login'>
          <LoginComponent />
        </Route>
        <Route exact path='/register'>
          <RegisterComponent />
        </Route>
        <Route exact path='/community'>
          {user.authenticated ?
            <CommunityComponent /> :
            <LoginComponent />
          }
        </Route>
        <Route exact path='/profile'>
          {user.authenticated ?
            <ProfileComponent /> :
            <LoginComponent />
          }
        </Route>
        <Route exact path='/trainers'>
          {user.authenticated ?
            <TrainerComponent /> :
            <LoginComponent />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
