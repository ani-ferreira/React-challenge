import { Container, Navbar, Nav, Button } from "react-bootstrap";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.isLoggedIn;
  console.log(loggedIn);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ height: 80, letterSpacing: "2px" }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{ fontSize: "2rem" }}
          className="hero-font"
        >
          hero team
        </Navbar.Brand>
      </Container>

      {loggedIn && <Nav.Link href="/">Home</Nav.Link>}

      {loggedIn && (
        <Button variant="outline-primary" onClick={authCtx.logout}>
          Logout
        </Button>
      )}
    </Navbar>
  );
};

export default Header;
