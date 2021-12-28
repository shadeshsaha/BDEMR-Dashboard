// used for making the prop types of this component
import PropTypes from "prop-types";
import React from "react";
import { Container, Row } from "reactstrap";

function Footer(props) {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="*" target="_blank" rel="noreferrer">
                  BDEMR Dev Team
                </a>
              </li>
              <li>
                <a href="*" target="_blank" rel="noreferrer">
                  Blog
                </a>
              </li>
              <li>
                <a href="*" target="_blank" rel="noreferrer">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <div className="copyright">
              &copy; {1900 + new Date().getYear()} made with by BDEMR Dev Team
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
