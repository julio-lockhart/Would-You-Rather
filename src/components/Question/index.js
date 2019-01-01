import React from "react";

// React-Bootstrap Components
import Container from "react-bootstrap/lib/Container";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import ToggleButton from "react-bootstrap/lib/ToggleButton";
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar";
import ToggleButtonGroup from "react-bootstrap/lib/ToggleButtonGroup";

// Inline styles
import { cardHeaderStyle } from "./styles";

const Question = ({ data }) => {
  const { author, question, timeAgo } = data;
  const { name, avatarURL } = author;
  const { optionOne, optionTwo } = question;

  return (
    <Card>
      <Card.Header style={cardHeaderStyle}>{`${name} asks:`}</Card.Header>

      <Card.Body>
        <Container>
          <Row>
            <Col xs={"auto"}>
              <img
                src={avatarURL}
                alt="avatar"
                className="rounded-circle"
                width="120"
                height="120"
              />
            </Col>

            <Col>
              <Card.Title>Would you rather...</Card.Title>

              <ButtonToolbar>
                <ToggleButtonGroup
                  className="w-100"
                  type="radio"
                  name="options"
                  vertical
                >
                  <ToggleButton
                    className="text-left"
                    variant="outline-secondary"
                    value={0}
                  >
                    {optionOne.text}
                  </ToggleButton>

                  <ToggleButton
                    className="text-left"
                    variant="outline-secondary"
                    value={1}
                  >
                    {optionTwo.text}
                  </ToggleButton>
                </ToggleButtonGroup>

                <Button className="mt-3 mb-3" variant="primary">
                  Answer This Question
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </Card.Body>

      <Card.Footer className="text-muted">{timeAgo}</Card.Footer>
    </Card>
  );
};

export default Question;
