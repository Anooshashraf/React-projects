import { Container , Row , Col} from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import  logo  from "../assets/images/logo.svg";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer>
            <Container>
                <Row>
                    <MailchimpForm/>
                    
                    <Col sm={6} className="footer-container">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2025. All Rights Reserved</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};