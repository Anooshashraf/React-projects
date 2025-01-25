import {NavBar,Container} from "react-bootstrap";
import {useState , useEffect} from "react";

export const NavBar = () => {
    const {ActiveLink , setActiveLink} = useState('home');
    const {scrolled , setScolled} = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if(window.crollY > 50){
                setScolled(true);
            }else{
                setScolled(false);
            };
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onscroll);
    },[]);

    const onUpdateActiveLink = () => {
        setActiveLink
    }
    return (
        <NavBar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <NavBar.Brand href="#home">
                    <img src={''} alt="logo"/>
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
                            <a href = "#"><img src={''} alt=" "></img></a>
                            <a href = "#"><img src={''} alt=" "></img></a>
                            <a href = "#"><img src={''} alt=" "></img></a>
                        </div>
                        <button className="vvd" onClick={()=>console.log("connect")}><span>Let's Connect</span></button>
                    </span>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    );
};