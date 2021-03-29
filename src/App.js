import "./App.css";
import MyPlants from "./components/MyPlants";
import { Switch, Route } from "react-router-dom";



function App() {



  return (
    <div className="App"> 
      <h1>Water my plants</h1>
      <Switch>
        <Route path="/myplants">
          <MyPlants />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
