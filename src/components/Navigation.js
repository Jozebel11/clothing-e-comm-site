import { useEffect, useState } from "react";
import Image from "next/image";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

export default function Navigation() {
const router = useRouter()
const items = useSelector(selectItems)

const { data: session } = useSession();


  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        background: `rgba(51, 65, 85, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <div className="container">
        <div className="navbar-brand cursor-pointer">
          <Image 
            onClick={() => router.push('/')}
            src="/caro-high-resolution-logo-color-on-transparent-background (1).png"
            width={170}
            height={30}
          />
        </div>
        <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} variant="dark" className="mb-1" id='nav-3'>
          <Container className='header-container' fluid>
            <Navbar.Toggle className='header-toggle' aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{
                color:'white',
                border:'none'
              }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{
                background:'rgba(51, 65, 85,1)',
                color:'white'
              }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">About</Nav.Link>
                  <Nav.Link href="#action2">New in</Nav.Link>
                  <Nav.Link href="#action3">Clothing</Nav.Link>
                  <Nav.Link onClick={!session ? signIn : signOut}>{session ? `Welcome, ${session.user.name.split(' ')[0]}` : 'Sign in'}</Nav.Link>
                  <Nav.Link className="flex" onClick={() => router.push('/checkout')}><ShoppingBagOutlinedIcon/><span className="ml-0.5 mt-0.5">{items.length}</span></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
      </div>
    </nav>
  );
}