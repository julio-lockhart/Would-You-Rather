import React from "react";

// React-Bootstrap Components
import Container from "react-bootstrap/lib/Container";
import Card from "react-bootstrap/lib/Card";
import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import Badge from "react-bootstrap/lib/Badge";
import Table from "react-bootstrap/lib/Table";

import { topRankLeaderHeaderStyle } from "./style";

const LeaderBoardItem = ({ rank, leader }) => {
  const { name, avatarURL } = leader;
  const answeredQuestionsCount = Object.keys(leader.answers).length;
  const createdQuestionsCount = Object.keys(leader.questions).length;
  const score = answeredQuestionsCount + createdQuestionsCount;

  return (
    <Card>
      <Card.Header style={rank === 1 ? topRankLeaderHeaderStyle : null}>
        <h5>
          <Badge variant="dark">{rank}</Badge> {name}
        </h5>
      </Card.Header>

      <Card.Body>
        <Container>
          <Row>
            <Col xs={2}>
              <img
                src={avatarURL}
                alt="avatar"
                className="rounded-circle"
                width="120"
                height="120"
              />
            </Col>

            <Col xs={5}>
              <Table striped bordered>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <strong>{answeredQuestionsCount}</strong>
                    </td>
                    <td>Answered Questions</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <strong>{createdQuestionsCount}</strong>
                    </td>
                    <td>Created Questions</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            <Col xs={5}>
              <Card className="text-center">
                <Card.Header>Total Points:</Card.Header>
                <Card.Body>{score}</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default LeaderBoardItem;
