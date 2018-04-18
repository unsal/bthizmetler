import React, { Component } from 'react';
import BTMenu from './menu';
import { Header, Container, Segment, Image } from "semantic-ui-react";



class App extends Component {
  render() {
    return <Segment basic>
              <Container textAlign="justified">

              <Header as="h1"><Image src='/img/_logo.png' size='huge' /><Header.Content>
                Bilgi Teknolojileri
              </Header.Content></Header>
              <BTMenu />
              </Container>
          </Segment>
  }
}

export default App;
