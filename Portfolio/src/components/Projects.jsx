import { Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

const projects = [
    {
        title: "Buisness Startup" ,
        description: "Design & development",
        imgUrl: projectImg1
    },
    {
        title: "" ,
        description: "Design & development",
        imgUrl: projectImg1
    },
    {
        title: "Buisness Startup" ,
        description: "Design & development",
        imgUrl: projectImg1
    },
    {
        title: "Buisness Startup" ,
        description: "Design & development",
        imgUrl: projectImg1
    }

];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                        <Tab.container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item eventkey="first">
                                    <Nav.link>Tab one</Nav.link>
                                </Nav.Item>
                                <Nav.Item eventkey="second">
                                    <Nav.link>Second one</Nav.link>
                                </Nav.Item>
                                <Nav.Item eventkey="third">
                                    <Nav.link>Third</Nav.link>
                                </Nav.Item>
                            </Nav>
                            <Tab.content>
                                <Tab.pane eventkey="first">
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
                                </Tab.pane>
                                <Tab.pane eventkey="second">Loren Ipsum</Tab.pane>
                                <Tab.pane eventkey="third">Loren Ipsum</Tab.pane>
                            </Tab.content>
                        </Tab.container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src="" alt="" />
        </section>
    )
}