import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home"
import { Container } from '@material-ui/core';
import Section from "./components/Section";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>         
      <Navbar/>
      <Container>
        <Section/>
      </Container>
    </Router>
  );
}

export default App;
