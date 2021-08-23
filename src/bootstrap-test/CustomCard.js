import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Collapse,
} from "reactstrap";

export default class CustomCard extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <div>
        <div style={{ width: "20%", margin: "2px", float: "left" }}>
          <Card>
            <CardImg
              top
              width="30%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div style={{ width: "20%", float: "left" }}>
          <Card>
            <CardImg
              top
              width="30%"
              src="/assets/318x180.svg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div>

        <div style={{ clear: "left", left:"0" }}>
          <Button
            color="primary"
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            Toggle
          </Button>
          <Collapse isOpen={this.state.isOpen}>
            <Card>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}
