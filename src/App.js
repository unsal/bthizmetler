import React, { Component } from 'react';
import Hizmetler from './menu/Hizmetler';
import SSS from './menu/SSS';
import Ekibimiz from './menu/Ekibimiz';
import Prosedurler from './menu/Prosedurler';
import Projeler from './menu/Projeler';
import Home from './menu/Home';
import { Header, Container, Segment, Image, Tab, Popup } from "semantic-ui-react";
import { connect } from 'react-redux';

//redux

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
        { menuItem: 'Ana Sayfa', render: () => <Tab.Pane><Home /></Tab.Pane> },
        { menuItem: 'Hizmet Kataloğu', render: () => <Tab.Pane><Hizmetler /></Tab.Pane> },
        { menuItem: 'Projelerimiz', render: () => <Tab.Pane><Projeler /></Tab.Pane> },
        { menuItem: 'Envanter', render: () => <Tab.Pane>Envanter</Tab.Pane> },
        { menuItem: 'Prosedürler', render: () => <Tab.Pane><Prosedurler /></Tab.Pane> },
        { menuItem: 'Göstergeler', render: () => <Tab.Pane>Göstergeler</Tab.Pane> },
        { menuItem: 'BT', render: () => <Tab.Pane><Ekibimiz /></Tab.Pane> },
        { menuItem: 'SSS', render: () => <Tab.Pane><SSS /></Tab.Pane> }
        ]
})

}

myPopup = () => {
 return <Popup
    trigger={<Image src='/img/_logo.png' size='huge'/>}
    content={this.props.yil+' '+this.props.grup+' '+this.props.url}
    inverted
    />
}

  render() {
    return <Segment tertiary basic>
              <Container textAlign="justified">
                  <Header as="h1"><this.myPopup />
                      <Header.Content>
                         Bilgi Teknolojileri
                     </Header.Content>
                  </Header>

                  <Tab panes={this.state.panes} defaultActiveIndex='0' />

              </Container>
          </Segment>
  }
}

const mapStateToProps = (state) => ({ yil: state.yil, grup: state.grup, url: state.url });
export default connect(mapStateToProps)(App);
