import React, { Component } from 'react'
import {Button} from 'reactstrap'

export default class CustomButton extends Component {
    render() {
        return (
          <div>
            <Button color="danger">{this.props.children}</Button>
          </div>
        );
    }
}
