import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import BusinessTrans from "./business-transparency";
import BusinessInfo from "./business-information";

export default function DropdownSection ({ profile, user }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <Card className="borderBottom py-4 pt-2 dropdownCard">
      <Card.Body className="px-4 align-items-center pb-2">
        <Row>
          <Col md={10} sm={10} xs={10} className="d-flex align-items-center">
            <h4 className="mb-1">Business Information</h4>
            {/* <hr className="mx-2" /> */}
          </Col>
          
          <Col
            md={2}
            xs={2}
            sm={2}
            onClick={() => setShowCard(!showCard)}
            className="d-flex align-items-center justify-content-end"
          >
            <FontAwesomeIcon icon={showCard ? faChevronUp : faChevronDown} />
          </Col>
        </Row>
        
      </Card.Body>
      <hr className="my-0" />

      {showCard && 
      <>
        <BusinessInfo profile={profile} user={user} />
        <BusinessTrans profile={profile} user={user} />
        
        </>
      }
    </Card>
  );
}
