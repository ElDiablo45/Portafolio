import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Discord Bot",
      description: "Clan IX",
      imgUrl: projImg1,
    },
    {
      title: "Discord Bot",
      description: "Central",
      imgUrl: projImg2,
    },
    {
      title: "Discord Bot",
      description: "Agencia",
      imgUrl: projImg3,
    },
  ];

  const diseños = [
    {
      title: "Diseño Grafico",
      description: "SMURLY",
      imgUrl: projImg5,
    },
    {
      title: "Diseño Grafico",
      description: "RUSTYCOT",
      imgUrl: projImg6,
    },
    {
      title: "Diseño Grafico",
      description: "Kioler",
      imgUrl: projImg7,
    },
    
    

  ];

  const webs = [
    {
      title: "Paginas Webs",
      description: "Temas Firefox",
      imgUrl: projImg9,
    },
    {
      title: "Paginas Webs",
      description: "Academia",
      imgUrl: projImg10,
    },
    {
      title: "Paginas Webs",
      description: "Highway Patrol",
      imgUrl: projImg11,
    },
    
    

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Aqui te dejo algunos de mis proyectos mas ambiciosos que he realizado a lo largo de mi experiencia, como creacion de bots de discord, paginas webs y diseños graficos</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">BOTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">PAGINAS WEB</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">DISEÑOS</Nav.Link>
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
                          webs.map((webs, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...webs}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          diseños.map((diseños, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...diseños}
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
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
