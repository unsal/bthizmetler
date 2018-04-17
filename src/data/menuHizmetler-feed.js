import React, { Component } from "react";
import { Card, Feed, Icon, Header, Grid, Container, Segment } from "semantic-ui-react";
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

  HizmetListesi = (baslik, btGrubu, icon) => {
    return (
      <Card>
        {/* <Card.Content> <Card.Header>{baslik}</Card.Header> </Card.Content> */}
        <Header as='h3' icon textAlign='center'> <Icon name={icon} circular color="grey"/> <Header.Content> {baslik} </Header.Content> </Header>
        <Card.Content>
          <Feed>
            {Object.keys(btGrubu).map(key => (
              <Feed.Event key={key}>
                <Feed.Content> <Feed.Summary> <Icon loading name="spinner" /><a className="hizmetler" href={btGrubu[key].link}>{btGrubu[key].hizmet}</a> </Feed.Summary>{" "} </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </Card.Content>
      </Card>
    );
  };

  render() {
    const misyon = this.state.misyon;
    const Misyon = () => Object.keys(misyon).map(key => <Segment basic><p>{misyon[key]}</p></Segment>);

    return <Segment basic>
    <Container textAlign="justified">
        <Grid centered columns={4} divided >
          {/* Misyon */}
          <Grid.Row columns={1}> <Grid.Column> <Misyon /> </Grid.Column> </Grid.Row>
          {/* Hizmetler */}
          <Grid.Row>
            <Grid.Column> {" "} {this.HizmetListesi( "KULLANICI DESTEK", this.state.kullanici_destek, "doctor" )}{" "} </Grid.Column>
            <Grid.Column> {" "} {this.HizmetListesi( "YAZILIM", this.state.yazilim, "rocket" )}{" "} </Grid.Column>
            <Grid.Column> {" "} {this.HizmetListesi( "SİSTEM NETWORK", this.state.sistem_network, "wifi" )} </Grid.Column>
            <Grid.Column> {" "} {this.HizmetListesi( "KURUMSAL ÇÖZÜMLER", this.state.kurumsal_cozumler, "university")}{" "} </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </Segment>
  }
}

export default Hizmetler;
