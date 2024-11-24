
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Interactive Coding Platform"
              description="Developed an interactive platform that allows students to explore coding skills and access placement statistics from leading companies, leveraging the MERN stack for a seamless user experience. Integrated a comprehensive quiz system for both technical and core subjects within the practice section, enhancing learning and assessment opportunities for users."
              ghLink="https://github.com/Aishwaryagunjal6/PathWayForge"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Movie Recommender System"
              description="Designed and implemented a movie recommender system using Python, which leverages advanced algorithms to deliver personalized recommendations based on user search queries, showcasing a user-friendly interface for enhanced interaction. Employed techniques such as data preprocessing, feature extraction, and similarity measurement to significantly improve the accuracy of recommendations, ensuring users receive the top five movie suggestions tailored to their preferences."
              ghLink="https://github.com/Aishwaryagunjal6/Movie-recommender-system"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CodeBin"
              description="Developed CodeBin, a collaborative website using AngularJS and Firebase, where users can create, save, and share code snippets. The user-friendly interface allows multiple users to store their coding solutions in one centralized platform, promoting community engagement. Utilizing Firebase’s real-time database, CodeBin ensures instant updates and synchronization across sessions. With features like code categorization and search functionality, it enhances the coding experience by providing easy access to diverse snippets, empowering users to improve their skills and collaborate effectively."
              ghLink="https://github.com/Aishwaryagunjal6/CodeBin"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
