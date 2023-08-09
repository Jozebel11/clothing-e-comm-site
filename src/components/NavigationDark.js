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
import { Link, animateScroll as scroll } from "react-scroll";
import MenuIcon from '@mui/icons-material/Menu';
import { motion as m } from "framer-motion";
import  {container, item, scrollContainer}  from "../../animation";



export default function NavigationDark() {

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
    let backgroundTransparacyVar = clientWindowHeight / 1000;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  




  return (
    <m.nav
    variants={container}
    initial="hidden"
    animate="show"
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        background: `rgba(250, 250, 250, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 0px 0px`,
      }}
    >
      <div className="container">
        <div className="navbar-brand cursor-pointer">
          <Image 
            className="lg:mt-[-30px]"
            onClick={() => router.push('/')}
            src="/caro-high-resolution-logo-black-on-transparent-background-2.png"
            width={150}
            height={150}

          />
        </div>
        <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="transparent" expand={expand} variant="light" className="mb-1" id='nav-3'>
          <Container className='header-container' fluid>
            <Navbar.Toggle className='header-toggle  scale-[1.2]' aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{
                color:'black',
                border:'none'
              }} ><MenuIcon/>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              backdrop={false}
              placement="top"
              scroll='true'
              style={{
                background:'rgba(250, 250, 250,1)',
              }}
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end font-thin  relative uppercase flex-grow-1 pe-3">
                  <h2 className="text-sm absolute top-[-25px] font-thin text-white right-0 pr-6 pt-2">{session ? `Welcome, ${session.user.name.split(' ')[0]}` : false}</h2>
                  <Nav.Link className="text-black mr-4" onClick={() => router.push('/about')}>About</Nav.Link>
                  <Nav.Link className="text-black mr-4"  onClick={() => router.push('/')}>Clothing</Nav.Link>
                  {session ? <Nav.Link className="text-black mr-4" onClick={() => router.push('/orders')}>Orders</Nav.Link> : ''}
                  <Nav.Link className="text-black mr-4" onClick={!session ? signIn : signOut}>{session ? `Sign out` : 'Sign in'}</Nav.Link>
                  <Nav.Link className="flex text-black" onClick={() => router.push('/checkout')}><ShoppingBagOutlinedIcon/><span className="ml-0.5 mt-0.5">{items.length}</span></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
      </div>
    </m.nav>
  );
}