import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Header className="text-start">
        <b>
          <span className="title-badge">{props.category}</span>
        </b>
      </Card.Header>
      {/* <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="card-img"
      /> */}
      <Card.Body className="min-height-200">
        <b><p class="text-start">{props.title}</p></b>
        <span class="font-size-sm">Loremsadkuhkjasd ayffkhaskgask hakhakjshkas dhkadhkjd  ksahkhsa khkhakjd kashdkashdkusa</span>
      </Card.Body>
      <Card.Footer>
        <div class="d-flex align-tetx">
          <p>Learn More</p>
          <p>
            <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
          </svg>
          </p>
          
        </div>
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
