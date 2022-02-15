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
          <Col md={11} className="d-flex align-items-center">
            <h6 className="">{innerText}</h6>
          </Col>
          <Col
            md={1}
            onClick={() => setShowCard(!showCard)}
            className="d-flex align-items-center px-0"
          >
            <FontAwesomeIcon icon={showCard ? faChevronUp : faChevronDown} />
          </Col>
        </Row>
      </Card.Body>

      {showCard && (
        <Card.Body className="px-4 d-flex align-items-center py-2">
          <h6 className="extraSmallTxt">{dropdownText}</h6>
        </Card.Body>
      )}
    </Card>
  );
}
