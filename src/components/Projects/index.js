import React from 'react';
import './style.css';
import { Github, BrowserChrome } from 'react-bootstrap-icons';
import { Card, Col, Row, Container } from 'react-bootstrap';
import Works from './utils/projects.json'

function Projects() {
    return (
        <Container className='projects'>
            <Row xs={1} md={3} className="g-4">
                {Works.map(({title, image, desc, repoLink, liveLink}) => (
                    <Col>
                    <Card>
                    <Card.Img variant="top" src={require(`./assets/${image }.png`)} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{desc}</Card.Text>
                            <Card.Link href={repoLink} target="blank"><Github size={36}/> </Card.Link>
                            <Card.Link href={liveLink} target="blank"><BrowserChrome size={36}/> </Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;










// export default function Projects(){
//     return(
// <div id="portfolio">
//             <div class="container-fluid p-0">
//                 <div class="projects">
//                 <div class="row g-0">
//                     <div class="col-lg-4 col-sm-6">
//                         <a class="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
//                             <img class="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
//                             <div class="portfolio-box-caption">
//                                 <div class="project-category">Category</div>
//                                 <div class="project-name">Project Name</div>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="col-lg-4 col-sm-6">
//                         <a class="portfolio-box" title="Project Name">
//                         <img class="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
//                             <div class="portfolio-box-caption">
//                                 <div class="project-category text-black-50">Category</div>
//                                 <div class="project-name">Project Name</div>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="col-lg-4 col-sm-6">
//                         <a class="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
//                             <img class="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="..." />
//                             <div class="portfolio-box-caption">
//                                 <div class="project-category text-black-50">Category</div>
//                                 <div class="project-name">Project Name</div>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="col-lg-4 col-sm-6">
//                         <a class="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
//                             <img class="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="..." />
//                             <div class="portfolio-box-caption">
//                                 <div class="project-category text-black-50">Category</div>
//                                 <div class="project-name">Project Name</div>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="col-lg-4 col-sm-6">
//                         <a class="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
//                             <img class="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="..." />
//                             <div class="portfolio-box-caption">
//                                 <div class="project-category text-black-50">Category</div>
//                                 <div class="project-name">Project Name</div>
//                             </div>
//                         </a>
//                     </div>
//                     <div class="col-lg-4 col-sm-6">
//                         <a class="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
//                             <img class="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="..." />
//                             <div class="portfolio-box-caption">
//                                 <div class="project-category text-black-50">Category</div>
//                                 <div class="project-name">Project Name</div>
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </div>
// )}
