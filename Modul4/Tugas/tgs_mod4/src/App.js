import "./App.css";
import UserContext from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Effect from "./learn-useEffect";
import { useState } from "react";
import InputComponent from "./learn-useState";
import Context from "./learn-useContext";
import AgeComponent from "./learn-useRef";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  const [name, setName] = useState("Strangers");
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Kelompok 1</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Use State</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/effect">
                <Nav.Link>Use Effect</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/context">
                <Nav.Link>Use Context</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/ref">
                <Nav.Link>Use Ref</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App-header">
        <UserContext.Provider value={{ name, setName }}>
          {console.log(name)}
          <Routes>
            <Route path="/" exact element={<InputComponent />} />
            <Route path="/effect" exact element={<Effect />} />
            <Route path="/context" exact element={<Context />} />
            <Route path="/ref" exact element={<AgeComponent />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
export default App;