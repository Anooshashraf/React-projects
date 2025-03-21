import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import projImg1 from "../assets/images/project-img1.png";
import projImg2 from "../assets/images/project-img2.png";
import projImg3 from "../assets/images/project-img3.png";
import {Col,Row,Container,Nav,Tab} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";


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

const projects1= [
  {
      title: "Buisness Startup" ,
      description: "Design & development",
      imgUrl: projImg3
  },
  {
      title: "Buisness Start-up" ,
      description: "Design & development",
      imgUrl: projImg2
  },
  {
    title: "Buisness Startup" ,
    description: "Design & development",
    imgUrl: projImg1
  },
  
  {
      title: "Buisness Startup",
      description: "Design & development",
      imgUrl: projImg2
  }

];

    return (
        <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects1.map((project1,index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project1}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
    )
}