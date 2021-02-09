import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home"
import { Container } from '@material-ui/core';


function App() {
  return (
    <div>
      <Navbar/>
      <Container>
        <Home/>
      </Container>
    </div>
  );
}

export default App;
