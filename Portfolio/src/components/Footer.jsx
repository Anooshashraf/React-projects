import { Container , Row , Col} from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import  logo  from "../assets/images/logo.svg";
import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="flex flex-row item-center ">
                    <MailchimpForm/>
                    <Col sm={3}>
                        <img src={logo} className="footer-logo"></img>
                    </Col>
                    <Col sm={6} className="flex flex-col text-center text-sm-end justify-content: flex-end">
                        <div className="social-icon left-0">
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