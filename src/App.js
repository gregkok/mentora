import "./App.scss";
import Login from "./pages/login/Login";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <div>
      <Header />

      <Switch>

        <Route path='/' exact>
          <LandingPage />
        </Route>

        <Route path='/Login'>
          <Login />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
