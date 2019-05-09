import React from "react";
import { Header } from "../components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login, Register } from "./";
const App = props => {
  let re = /(login|register)/;
  let isAuth = re.test(props.location.pathname);
  console.log(isAuth);
  return (
    <div>
      {isAuth ? undefined : <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default App;
