import React, { Component } from 'react';
import GlabsContainer from "../../OuterShell/Body/InnerContainer";

export default  class Default extends Component {
  componentWillMount(){}

  render() {
    let App = this.props.App;

    return(
      <GlabsContainer Position="Application">
          <h1>PROJECT APPLICATION IN HERE</h1>
      </GlabsContainer>
    )
  }
}