import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import create from "zustand";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './pages/Menu'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
