import './App.css';
import { makeStyles } from '@material-ui/core/styles';
//import IconButton from '@material-ui/core/IconButton';
import { Brands } from './Brands';
import { Users } from './Users';
//import CardMedia from '@material-ui/core/CardMedia';
//import MailIcon from '@material-ui/icons/Mail';
//import classes from '*.module.css';
//import DeleteIcon from '@material-ui/icons/Delete';
import { Switch, Route, Link, useParams, Redirect } from 'react-router-dom';
import { INITIAL_USERS_LIST } from './InitialUserList';
import { AppBar } from '@material-ui/core';


function App(){
  return(
    <div>
      <AppBar position="static">
        <nav className={'nav-bar'}>
    <Link to = "/">Home</Link>
    <Link to = "/brands">Brands</Link>
    <Link to = "/users">Users</Link>
    </nav>
    </AppBar>
    {/* <Link to = "/users/:userid">Users Details</Link> */}
    <Switch>
      <Route path="/brands">
        <Brands/>
      </Route>
      <Route path="/vote">
        <Redirect to="brands"/>

      </Route>
      <Route exact path="/">
        <Home/>

      </Route>
      <Route path="/users/:userid">
        <UserDetails/>

      </Route>
      <Route path="/users">
        <Users />

      </Route>
      <Route path="*">
        <NotFound />

      </Route>
    </Switch>
    </div>
  )
}

function Home(){
  return(
    <div>
      <h2 style={{textAlign: 'center'}}>Welcome to our Kart</h2>
      <h3 style={{textAlign: 'center'}}>One stop for all your smartphone research.</h3>
    </div>
  )
}
function NotFound(){
  return(
    <div>
      <h2>404 Page Not Found</h2>
    </div>
  )
}



function UserDetails(){
  const { userid } = useParams();
  const user = INITIAL_USERS_LIST.find((user) => user.id === +userid);
  return(
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Details: {user.details}</h2>
    </div>
  );
}











export const useStyle = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 400,
  },
});

export default App;
