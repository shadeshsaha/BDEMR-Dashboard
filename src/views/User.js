
import React from "react";
// reactstrap components
import {
  Button,
  Card, CardBody,
  CardFooter, CardHeader, CardTitle, Col, Form, FormGroup, Input,
  Row
} from "reactstrap";


function User() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/cover.jpg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/user.jpg").default}
                    />
                    <h5 className="title">BDEMR Solutions</h5>
                  </a>
                  <p className="description">@bdemr.com</p>
                </div>
                <p className="description text-center">
                BDEMR is a medical software company. Our current services are cloud based . We are providing web based/app based platform to create, save, organize the medical record in one place. It is a onestop service for doctors, patient, and allied health professionals alike. Our endavour is to minimize cost, increase efficiency, ease communication, ensure fairness and easy accesibilty of data by the interested party. We will also help to create medical solutions for hospitals.
                </p>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col className="ml-auto" lg="3" md="6" xs="6">
                      <h5>
                        12K+ <br />
                        <small>Clients</small>
                      </h5>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                      <h5>
                        2K+ <br />
                        <small>Apps</small>
                      </h5>
                    </Col>
                    <Col className="mr-auto" lg="3">
                      <h5>
                        24,6$ <br />
                        <small>Spent</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Team Members</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/user1.jpg")
                                .default
                            }
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        User - 1 <br />
                        <span className="text-muted">
                          <small>Managing Director</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>

                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/user2.jpg")
                                .default
                            }
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        User - 2 <br />
                        <span className="text-muted">
                          <small>Full-Stack Developer</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/user2.jpg")
                                .default
                            }
                          />
                        </div>
                      </Col>
                      
                      <Col className="col-ms-7" xs="7">
                        User - 3 <br />
                        <span className="text-muted">
                          <small>Software Quality Assurance</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                          className="btn-round btn-icon"
                          color="success"
                          outline
                          size="sm"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company</label>
                        <Input
                          defaultValue="BDEMR Inc."
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          type="textarea"
                          placeholder="Type Here"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
