import './App.css';
import Home from './component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import SignIn from './component/SignIn/SignIn';
import LogIn from './component/LogIn/LogIn';
import Destination from './component/Destination/Destination';
import { createContext, useState } from 'react';
import PrivetRoute from './component/PrivateRoute/PrivateRoute'



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path='/home'>
          <Home />
          </Route>
          <Route path='/signIn'>
            <SignIn />
          </Route>
          <Route path='/logIn'>
            <LogIn />
          </Route>
          <PrivetRoute path='/destination/:id'>
            <Destination />
          </PrivetRoute>
          <Route>
            
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>

  );
}

export default App;
