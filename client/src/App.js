import React from "react";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Nav />
      <Container>
        <Jumbotron />
        <Row>
          <Col size="xs-3 sm-12">
            <Card title="Book Search">
              <Input name="RecipeSearch" placeholder="Search For a Book" />
              <Button type="success" className="input-lg">
                Search
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
