import React, { Component } from "react";
import { Segment, Image } from "semantic-ui-react";

class Home extends Component {

  render() {
    return <Segment basic>
      <Image src={require('../images/it2.png')} />
    </Segment>
  }
}

export default Home;
