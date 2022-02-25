import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function DropdownCard({ innerText, dropdownText }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <Card className="profileCard borderBottom">
      <Card.Body className="px-4 d-flex align-items-center pb-2">
        <Row>
          <Col md={11} xs={11} sm={11} className="d-flex align-items-center">
            <h6 className=" px-2">{innerText}</h6>
          </Col>
          <Col
            md={1}
            xs={1}
            sm={1}
            onClick={() => setShowCard(!showCard)}
            className="d-flex align-items-center px-0"
          >
            <FontAwesomeIcon icon={showCard ? faChevronUp : faChevronDown} />
          </Col>
        </Row>
      </Card.Body>

      {showCard && (
        <Card.Body className="px-4 d-flex align-items-center py-2">
          <h6 className="extraSmallTxt px-2">{dropdownText}</h6>
        </Card.Body>
      )}
    </Card>
  );
}
