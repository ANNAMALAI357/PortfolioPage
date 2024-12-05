import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import nms from "../../Assets/Projects/nms.jpg"
import saas from "../../Assets/Projects/saas.jpg"
import vendor from "../../Assets/Projects/vendor.webp"
import teleco from "../../Assets/Projects/teleco.png"

const projects = [
  {
    imgPath: teleco,
    title: "How to Streamline Telecom Network Management with GenAI",
    category: "Telecom",
  },
  {
    imgPath: vendor,
    title: "Importance of Vendor Management for Telecom",
    category: "Telecom",
  },
  {
    imgPath: nms,
    title: "How to Pick the Perfect Remote Monitoring and Management Software for Your Network",
    category: "NMS",
  },
  {
    imgPath: nms,
    title: "Best Practices for Remote Monitoring and Management",
    category: "RMM",
  },
  {
    imgPath: saas,
    title: "20 Best Helpdesk Ticketing Systems & Tools in 2024",
    category: "ITSM",
  },
  {
    imgPath: chatify,
    title: "Six Signs You Must Leverage a New RMM Tool as an MSP",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Meesho Audit: Facebook & YouTube",
    category: "SAAS",
  },
  {
    imgPath: chatify,
    title: "Use Qualitative and Quantitative Data Together to Build Better Products",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Thinking Beyond Features: Building Emotional Connections Through Product Design",
    category: "SAAS",
  },
  {
    imgPath: chatify,
    title: "Understanding Product Localization Challenges in the Indian Market",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Waging a War on Documents with LLM-Powered Data Extraction",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Gamification in EdTech – Lessons from Duolingo, Khan Academy, IXL, and Kahoot!",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "The Art of Strategic Feature Adoption and Avoiding Copycat Pitfalls",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "To Share, or Not to Share – OTT Industry’s Password Sharing Dilemma",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Fueler.io – Brewing Opportunities for Job Seekers Through Proof of Work",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "The Rising Necessity of Cyber Insurance for SMEs",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "What Is India Stack, and How Is It Evolving in 2023?",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Frameworks for Product Management",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "The 4-Step Process Behind Google Maps’ Successful Redesign and What Startups Can Learn from It",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "How is coto Decentralizing Social Media to Make it Safer for Women?",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Why Meta Threads Is Opting For A Chronological Feed Over An Algorithmic Feed",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "India is Leading the AI Revolution in Asia-Pacific – Equinix 2023 Global Tech Trends Survey",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "A Practical Guide to Startup Bootstrapping with The 2C2P Model by Karan Desai",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Organizations Still Optimistic About AI Despite High Failure Rate",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Personal Brand Content for Founders in Accounting Niche",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "How SaaS companies can mitigate challenges posed by accounting",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Does Your SaaS Business Need to be Globalized?",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "The Rise of Subscription Business Model",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "How SaaS is Revolutionizing the SMBs",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "Seed vs Series A vs Angel: An initial funding of your startup",
    category: "E-commerce",
  },
  {
    imgPath: chatify,
    title: "12 Different Ways to Measure SaaS Financial Metrics",
    category: "E-commerce",
  }

];


function Projects() {
  return (
    <Container
      fluid
      className="project-section"
    >
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <>
            {projects.map((project, index) => (
              <Col
                key={index}
                md={4}
                className="project-card"
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  title={project.title}
                  category={project.category}
                />
              </Col>
            ))}
          </>
          {/* <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={chatify}
              title="How to Streamline Telecom Network Management with GenAI"
              category="SAAS"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={bitsOfCode}
              title="Bits-0f-C0de"
              category="B2B"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={editor}
              title="Editor.io"
              category="SAAS"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={leaf}
              title="Plant AI"
              category="Misc"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={suicide}
              title="Ai For Social Good"
              category="Misc"
            />
          </Col>

          <Col
            md={4}
            className="project-card"
          >
            <ProjectCard
              imgPath={emotion}
              title="Ai For Social Good"
              category="Misc"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
