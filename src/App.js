import "./index.css";
import MyPlants from "./components/MyPlants";
import NavBar from "./components/navBar/NavBar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/UserLogin";
import SignUp from "./components/Login/Signup"
import UserProfile from "./components/UserProfile";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Water my plants</h1>
      <Switch>
    <Route path="/login">
      <Login />
      <SignUp />
    </Route>
        <PrivateRoute path="/myplants" component={MyPlants} />
        <PrivateRoute path="/profile" component={UserProfile} />
      </Switch>
      <Login />
      <SignUp />
      <Login />
      <SignUp />
      <Login />
      <SignUp />
      <Login />
      <SignUp />
      <Login />
      <SignUp />
      <Login />
      <SignUp />
      <Login />
      <SignUp />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
