import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

import Card from "../components/Card";

function Favorites() {
  return (
    <div>
      <Container>
        <Jumbotron />
        <Row>
          <Col size="xs-3 sm-12">
            <Card title="Saved Books"></Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
