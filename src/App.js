import React, { Component } from 'react';
import BTMenu from './menu';
import { Header, Container, Segment } from "semantic-ui-react";



class App extends Component {
  render() {
    return <Segment>
              <Container textAlign="justified">
              <Header as="h1"><Header.Content>Bilgi Teknolojileri</Header.Content></Header>
              <BTMenu />
              </Container>
          </Segment>
  }
}

export default App;
