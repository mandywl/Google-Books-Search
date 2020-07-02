import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button";

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({ thumbnail, title, description, href }) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="lg-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="lg-10">
            <Row>
              <Col size="lg-8">
                <h3>{title}</h3>
              </Col>
              <Col size="lg-3">
                <Row>
                  <Col size="xs-5">
                    <a
                      className="btn btn-success ml-3 mr-2"
                      rel="noreferrer noopener"
                      target="_blank"
                      href={href}
                    >
                      View
                    </a>
                  </Col>
                  <Col size="xs-5">
                    <Button type="success">Save</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <p>Description: {description}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
