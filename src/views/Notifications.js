import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  Alert,
  Button,
  Card, CardBody, CardHeader, CardTitle, Col, Row, UncontrolledAlert
} from "reactstrap";

function Notifications() {
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    // switch (color) {
    //   case 1:
    //     type = "primary";
    //     break;
    //   case 2:
    //     type = "success";
    //     break;
    //   case 3:
    //     type = "danger";
    //     break;
    //   case 4:
    //     type = "warning";
    //     break;
    //   case 5:
    //     type = "info";
    //     break;
    //   default:
    //     break;
    // }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            {/* text */}
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Notifications</CardTitle>
                <p className="card-category">
                  Made by our team{" "}
                  <a
                    target="_blank"
                    href="https://bdemr.com/" rel="noreferrer"
                  >
                    BDEMR
                  </a>
                  . Please checkout the{" "}
                  <a
                    href="https://bdemr.com/"
                    target="_blank" rel="noreferrer"
                  >
                    Full Documentation.
                  </a>
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Hello World{/* Card Title Here */}</CardTitle>
                        
                      </CardHeader>
                      <CardBody>
                        <Alert color="info">
                          <span> message </span>
                        </Alert>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="6">
                    <Card className="card-plain">
                      <CardHeader>
                        <CardTitle tag="h5">Hello World{/* Card Title Here */}</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <UncontrolledAlert color="primary" fade={false}>
                          <span>
                            <b> card title </b>
                            card text
                          </span>
                        </UncontrolledAlert>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">Hello World</CardTitle>
                      <p className="category"> text </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                          >
                            A
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                          >
                            B
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                          >
                            C
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Row>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                          >
                            D
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                          >
                            E
                          </Button>
                        </Col>
                        <Col md="4">
                          <Button
                            block
                            color="primary"
                          >
                            F
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
