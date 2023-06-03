import { Nav, NavbarBrand, NavDropdown } from "react-bootstrap";
import Logo from "../assets/images/bottle-perfume-business-company-logo_23-2148462313.jpg";
import { Person, Cart } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
function HeaderPage() {
  return (
    <>
      <Nav
        variant="pills"
        activeKey="1"
        className="d-flex justify-content-between align-items-center p"
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={Logo}
            style={{
              height: 180,
              width: 200,
            }}
          />
        </NavbarBrand>

        <Nav.Item className="d-flex align-items-center">
          <NavDropdown title="Categories" id="nav-dropdown">
            <NavDropdown.Item>male</NavDropdown.Item>
            <NavDropdown.Item>female</NavDropdown.Item>

          </NavDropdown>
          <Nav.Link to="/Deals" as={NavLink}>
            {" "}
            Deals{" "}
          </Nav.Link>
          <Nav.Link to="/New" as={NavLink}>
            {" "}
            What's New
          </Nav.Link>
          <Nav.Link to="/Delivery" as={NavLink}>
            Delivery
          </Nav.Link>
        </Nav.Item>

        <Nav.Item className="d-flex align-items-center ">
          <Nav.Link className="d-flex align-items-center" href="">
            <Person className="p-2" size={36} />
            Account
          </Nav.Link>
          <Nav.Link className="d-flex align-items-center px-0" href="">
            <Cart className="p-2" size={36} />
            Cart
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default HeaderPage;
