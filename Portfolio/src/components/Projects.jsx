import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import {Col,Row,Container,Nav,Tab} from "react-bootstrap";


export const Projects = () => {

const projects = [
    {
        title: "Buisness Startup" ,
        description: "Design & development",
        imgUrl: projImg1
    },
    {
        title: "Buisness Start-up" ,
        description: "Design & development",
        imgUrl: projImg2
    },
    {
        title: "Buisness Startup" ,
        description: "Design & development",
        imgUrl: projImg3
    },
    {
        title: "Buisness Startup" ,
        description: "Design & development",
        imgUrl: projImg1
    }
    ,
    {
        title: "Buisness Startup" ,
        description: "Design & development",
        imgUrl: projImg2
    }

];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item eventkey="first">
                                    <Nav.Link>Tab one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item eventkey="second">
                                    <Nav.Link>Second one</Nav.Link>
                                </Nav.Item>
                                <Nav.Item eventkey="third">
                                    <Nav.Link>Third</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventkey="first">
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventkey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventkey="third">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}