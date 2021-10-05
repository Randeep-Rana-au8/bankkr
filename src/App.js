import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer";

import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/singup";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
