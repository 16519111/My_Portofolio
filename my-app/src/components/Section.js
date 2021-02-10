import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import Profile from "./Profile/Profile";


const Section = () =>{

  const PrivateRoute = ({user, ...props }) => {
    if (user) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  const LoginRoute = ({user, ...props }) =>
  user ? <Redirect to="/" /> : <Route {...props} />;

  return(    
    <section >
      <Switch>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Profile" component={Profile}/>
      </Switch>
    </section>
  )
}

export default Section
