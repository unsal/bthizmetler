import React, { Component } from "react";
import { Card, Icon, Header, Grid, Container, Segment, List } from "semantic-ui-react";
import jsonHizmetler from "./data/hizmetler.json";
import jsonBT from "./data/misyon.json";

class Hizmetler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hizmetler: [],
      kullanici_destek: [],
      yazilim: [],
      sistem_network: [],
      kurumsal_cozumler: [],
      misyon: []
    };
  }

  componentDidMount() {
    this.setState({
      hizmetler: jsonHizmetler.hizmetler,
      kullanici_destek: jsonHizmetler.hizmetler.kullanici_destek,
      yazilim: jsonHizmetler.hizmetler.yazilim,
      sistem_network: jsonHizmetler.hizmetler.sistem_network,
      kurumsal_cozumler: jsonHizmetler.hizmetler.kurumsal_cozumler,
      misyon: jsonBT.basliklar.misyon
    });
  }

  CardHizmetler = (baslik, btGrubu, icon) => {
    return (
      <Card>
        {/* <Card.Content> <Card.Header>{baslik}</Card.Header> </Card.Content> */}
        <Header as='h3' icon textAlign='center'> <Icon name={icon} circular color="grey"/> <Header.Content> {baslik} </Header.Content> </Header>
        <Card.Content>
          <List divided selection>
            {Object.keys(btGrubu).map(key => (
              <List.Item key={key}>
                <a className="hizmetlistesi" href={btGrubu[key].link}>{btGrubu[key].hizmet}</a>
              </List.Item>
            ))}
          </List>
        </Card.Content>
      </Card>
    );
  };

  render() {
    const misyon = this.state.misyon;
    const Misyon = () => Object.keys(misyon).map(key => <Segment basic><span className="misyon">{misyon[key]}</span></Segment>);

    return <Segment basic>
    <Container textAlign="justified">
        <Grid centered columns={4} divided >
          {/* Misyon */}
          <Grid.Row columns={1}> <Grid.Column> <Misyon /> </Grid.Column> </Grid.Row>
          {/* Hizmetler */}
          <Grid.Row columns={4}>
            <Grid.Column> {" "} {this.CardHizmetler( "KULLANICI DESTEK", this.state.kullanici_destek, "doctor" )}{" "} </Grid.Column>
            <Grid.Column> {" "} {this.CardHizmetler( "YAZILIM", this.state.yazilim, "rocket" )}{" "} </Grid.Column>
            <Grid.Column> {" "} {this.CardHizmetler( "SİSTEM NETWORK", this.state.sistem_network, "wifi" )} </Grid.Column>
            <Grid.Column> {" "} {this.CardHizmetler( "KURUMSAL ÇÖZÜMLER", this.state.kurumsal_cozumler, "university")}{" "} </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </Segment>
  }
}

export default Hizmetler;
