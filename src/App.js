import React, { useState }  from 'react';
import logoWhite from './Image/SS.png';
import logoDark from './Image/SSWhite.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import Profile from './Screens/Profile';
import Education from "./Screens/Education";
import Experience from "./Screens/Experience";
import About from "./Screens/About";
import Skills from "./Screens/Skills";
import Project from "./Screens/Project";
import Contact from "./Screens/Contact";
import {ThemeProvider} from "styled-components";
import { GlobalStyle } from "./Screens/GlobalStyle";
import { lightTheme, darkTheme } from "./Screens/theme";

function App() {
    const [theme, setTheme] = useState('dark');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const logo = (theme==='light')?logoWhite:logoDark;
    function lightLogo(){
        if(theme==='dark'){ 
            return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-up" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="5" x2="12" y2="3" />
                <line x1="17" y1="7" x2="18.4" y2="5.6" />
                <line x1="19" y1="12" x2="21" y2="12" />
                <line x1="17" y1="17" x2="18.4" y2="18.4" />
                <line x1="12" y1="19" x2="12" y2="21" />
                <line x1="7" y1="17" x2="5.6" y2="18.4" />
                <line x1="6" y1="12" x2="4" y2="12" />
                <line x1="7" y1="7" x2="5.6" y2="5.6" />
          </svg>
        }else{
            return <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moon" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        };
    }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyle/>
    <div className="App">
      <Navbar variant={theme}  expand="lg" className='shadow-lg' >
        <Container>
          <Navbar.Brand href="#home">
              <img alt="sennouni sara" className="image" src={logo} width={60} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="mr-auto"/>
            <Nav className="mr-sm-4">
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link onClick={themeToggler}>{lightLogo()}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    <Profile theme={theme}/>
    <About/>
    <Experience theme={theme}/>
    <Project theme={theme}/>
    <Skills/>
    <Contact theme={theme}/>
    </div>
          </>
      </ThemeProvider>
);
}

export default App;
