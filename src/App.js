import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./pages/Menu";
import useStore from "./store";
import { useEffect } from "react";
import OrderPage from "./pages/OrderPage";
import ReciptPage from "./pages/ReciptPage";

function App() {
  const fetchMenu = useStore((store) => store.fetchMenu);
  const fetchDes = useStore((store) => store.fetchDes);

  useEffect(() => {
    fetchDes();
  }, []);
  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route exact path="/order">
          <OrderPage />
        </Route>
        <Route exact path="/recipt">
          <ReciptPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
