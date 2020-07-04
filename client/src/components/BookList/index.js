import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";
// import { PromiseProvider } from "mongoose";

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({author, thumbnail, title, description, href, onclick, buttonName, className}) {

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="lg-9">
            <h3 className='["title"]'>{title}</h3>
            <p>By {author}</p>
          </Col>
          <Col size="lg-2">
            <Row>
              <Col size="xs-5">
                <a
                  className="btn btn-success ml-3 mr-2 mb-2"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={href}
                >
                      View
                </a>
              </Col>
              <Col size="xs-5">
                <Button className={className}type="success" onClick={onclick}>
                  {buttonName}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col size="lg-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="lg-10">

            <p>Description: {description}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
