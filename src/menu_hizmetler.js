import React, { Component } from "react";
import { Card, Feed, Icon, Header, Grid, Container, Segment } from "semantic-ui-react";
import data from "./data/data.json";
import bt from "./data/misyon.json";

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
      hizmetler: data.hizmetler,
      kullanici_destek: data.hizmetler.kullanici_destek,
      yazilim: data.hizmetler.yazilim,
      sistem_network: data.hizmetler.sistem_network,
      kurumsal_cozumler: data.hizmetler.kurumsal_cozumler,
      misyon: bt.basliklar.misyon
    });
  }

  HizmetListesi = (baslik, btGrubu, icon) => {
    return (
      <Card>
        {/* <Card.Content> <Card.Header>{baslik}</Card.Header> </Card.Content> */}
        <Header as='h3' icon textAlign='center'> <Icon name={icon} circular /> <Header.Content> {baslik} </Header.Content> </Header>
        <Card.Content>
          <Feed>
            {Object.keys(btGrubu).map(key => (
              <Feed.Event key={key}>
                {/* <Feed.Label image="/assets/images/avatar/small/molly.png" /> */}

                <Feed.Content> <Feed.Summary> <Icon loading name="spinner" /><a href={btGrubu[key].link}>{btGrubu[key].hizmet}</a> </Feed.Summary>{" "} </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </Card.Content>
      </Card>
    );
  };

  render() {
    const misyon = this.state.misyon;
    const Misyon = () => Object.keys(misyon).map(key => <Segment attached="top"><p>{misyon[key]}</p></Segment>);

    return <Segment basic>
    <Container textAlign="justified">
        <Grid centered columns={4} divided>
          {/* Misyon */}
          <Grid.Row columns={1}> <Grid.Column> <Misyon /> </Grid.Column> </Grid.Row>
          {/* Hizmetler */}
          <Grid.Row>
            <Grid.Column color="blue"> {" "} {this.HizmetListesi( "KULLANICI DESTEK", this.state.kullanici_destek, "doctor" )}{" "} </Grid.Column>
            <Grid.Column color="teal"> {" "} {this.HizmetListesi( "YAZILIM", this.state.yazilim, "rocket" )}{" "} </Grid.Column>
            <Grid.Column color="teal"> {" "} {this.HizmetListesi( "SİSTEM NETWORK", this.state.sistem_network, "wifi" )} </Grid.Column>
            <Grid.Column color="teal"> {" "} {this.HizmetListesi( "KURUMSAL ÇÖZÜMLER", this.state.kurumsal_cozumler, "university")}{" "} </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </Segment>
  }
}

export default Hizmetler;
