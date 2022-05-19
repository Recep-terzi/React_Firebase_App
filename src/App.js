import { Switch,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";
import { Redirect } from "react-router-dom";
function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      {authIsReady && (
        <Switch>
          <Route exact path="/" >{user && <Home />}{ !user && <Redirect to='/login' />}</Route>
          <Route exact path="/signup" >{!user && <Signup />}{user && <Redirect to='/' />}</Route>
          <Route exact path="/login">{!user && <Login />}{user && <Redirect to='/' />}</Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
