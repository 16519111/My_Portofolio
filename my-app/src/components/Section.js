import React from "react"
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Project";
import Experience from "./Experience/Experience";

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
        {/* <Route exact path="/Home" component={Home}/> */}
        <Route exact path="/" component={Profile}/>
        <Route exact path="/Skills" component={Skills}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Experiences" component={Experience}/>
      </Switch>
    </section>
  )
}

export default Section
