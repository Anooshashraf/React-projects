import {NavBar,Container} from "react-bootstrap";
import {useState , useEffect} from "react";
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const NavBar = () => {
    const {ActiveLink , setActiveLink} = useState('home');
    const {scrolled , setScolled} = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScolled(true);
            }else{
                setScolled(true);
            };
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onscroll);
    },[]);

    const onUpdateActiveLink = () => {
        setActiveLink(value);
    }
    return (
        <NavBar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <NavBar.Brand href="#home">
                    <img src={logo} alt="logo"/>
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </NavBar.Toggle>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={ActiveLink === "home" ? "active NavBar-link" : "NavBar-link"} onClick= {()=> onUpdateActiveLink ('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={ActiveLink === "skills" ? "active NavBar-link" : "NavBar-link"} onClick= {()=> onUpdateActiveLink ('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={ActiveLink === "projects" ? "active NavBar-link" : "NavBar-link"} onClick= {()=> onUpdateActiveLink ('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href = "#"><img src={navIcon1} alt=" "></img></a>
                            <a href = "#"><img src={navIcon2} alt=" "></img></a>
                            <a href = "#"><img src={navIcon3} alt=" "></img></a>
                        </div>
                        <button className="vvd" onClick={()=>console.log("connect")}><span>Let's Connect</span></button>
                    </span>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
};