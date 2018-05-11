import React, { Component } from 'react';
import Hizmetler from './menu/Hizmetler';
import SSS from './menu/SSS';
import Ekibimiz from './menu/Ekibimiz';
import Prosedurler from './menu/Prosedurler';
import Projeler from './menu/Projeler';
import { Header, Container, Segment, Image, Tab, Label } from "semantic-ui-react";

//redux
import { connect } from 'react-redux';


class App extends Component {
constructor(props) {
    super(props);
    this.state = {
         panes: [],
         activeIndex: 0
    }
}

componentDidMount() {
this.setState({
    panes : [
        { menuItem: 'Hizmet Kataloğu', render: () => <Tab.Pane><Hizmetler /></Tab.Pane> },
        { menuItem: 'Projeler', render: () => <Tab.Pane><Projeler /></Tab.Pane> },
        { menuItem: 'Envanter', render: () => <Tab.Pane>Envanter</Tab.Pane> },
        { menuItem: 'Prosedürler', render: () => <Tab.Pane><Prosedurler /></Tab.Pane> },
        { menuItem: 'Göstergeler', render: () => <Tab.Pane>Göstergeler</Tab.Pane> },
        { menuItem: 'BT', render: () => <Tab.Pane><Ekibimiz /></Tab.Pane> },
        { menuItem: 'SSS', render: () => <Tab.Pane><SSS /></Tab.Pane> }
        ]
})

}

  render() {
    const {yil, grup, url} = this.props;
    return <Segment tertiary basic>
              <Container textAlign="justified">
                  <Header as="h1"><Image src='/img/_logo.png' size='huge' />
                      <Header.Content>
                          Bilgi Teknolojileri
                          <Label size='mini' basic>{yil}</Label>
                          <Label size='mini' basic>{grup}</Label>
                          <Label size='mini' basic><a href={url} target='_blank'>{url}</a></Label>

                     </Header.Content>
                  </Header>

                  <Tab panes={this.state.panes} defaultActiveIndex='0' />

              </Container>
          </Segment>
  }
}

const mapStateToProps = state => ({ yil: state.yil, grup: state.grup, url: state.url });
export default connect(mapStateToProps)(App);

// export default App;
