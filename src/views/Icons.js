import React from "react";
// reactstrap components
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="demo-icons">
              <CardHeader>
                <CardTitle tag="h5">BDEMR Library</CardTitle>
                <p className="card-category">
                  See Our Works{" "}
                  <a href="https://bdemr.com/">BDEMR</a>
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <div id="icons-wrapper">
                  <section>
                    <ul>
                      <li>
                        <i className="nc-icon nc-air-baloon" />
                        <p>nc-air-baloon</p>
                        <em>Hello World</em>
                      </li>
                    </ul>
                  </section>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
