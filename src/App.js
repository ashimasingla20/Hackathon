import React from 'react';
import './App.scss';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router,
  Redirect,
  Route,
  Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import Header from './Components/LoggedInBar/Header';
const FeedView = loadable(() => import('./Containers/Feed'));
const LoginView = loadable(() => import('./Containers/Auth/Login'));
const RegisterView = loadable(() => import('./Containers/Auth/Register'));
const ProfileView = loadable(() => import('./Containers/Profiles/Profile'))
const MatchView = loadable(() => import('./Containers/Match/Match'))
function App() {
  return (
    <>
      <Router>
        <div className="App">
        <Switch>
          <PrivateRoute exact path="/profile" component={ProfileView} />
          <PrivateRoute exact path="/" component={FeedView} />
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <PrivateRoute path="/match" component={MatchView} />
        </Switch>
        </div>
      </Router>
    </>
  );
}
const PrivateRoute = ({ component: Component,
  hideTopBar,
  withFooter, ...rest }) => (
  <Route {...rest} render={props => (
    //localStorage.getItem('authToken')
    <>
      { !hideTopBar && <Header/> }
      <Component {...props} />
      </>
    // ? (<>
    //   { !hideTopBar && <Header/> }
    //   <Component {...props} />
    //   </>)
    // : (<Redirect to={{
    //     pathname: '/login',
    //     state: { from: props.location } }} />)
  )}/>
)

export default App;
