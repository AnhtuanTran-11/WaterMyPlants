import "./index.css";
import MyPlants from "./components/MyPlants";
import NavBar from './components/navBar/NavBar';
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/UserLogin";
import SignUp from "./components/Login/Signup"


function App() {



  return (
    <div className="App"> 
      <h1>Water my plants</h1>
      <NavBar />
      <Login />
      <SignUp />
      <Switch>
        <Route path="/myplants">
          <MyPlants />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
