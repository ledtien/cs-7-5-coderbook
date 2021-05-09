import "./App.css";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import { Route, Switch } from "react-router-dom";

import { AuthPage, HomePage, FourOhFourPage } from "./pages";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Switch>
        <Route exact path={`/login`} component={AuthPage} />
        <ProtectedRoute exact path={`/`} component={HomePage} />
        <Route path={`/*`} component={FourOhFourPage} />
      </Switch>
    </div>
  );
}

export default App;
