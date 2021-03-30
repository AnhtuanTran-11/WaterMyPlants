import "./App.css";
import MyPlants from "./components/MyPlants";
import NavBar from "./components/navBar/NavBar";
import { Switch, Route } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <h1>Water my plants</h1>
      <NavBar />
      <Switch>
        <PrivateRoute path="/myplants" component={MyPlants} />
        <PrivateRoute path="/profile" component={UserProfile} />
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
