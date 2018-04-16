import React, { Component }  from 'react';
import { Grid, Image, Container, Label, Segment } from 'semantic-ui-react';
import BT from './data/ekip.json';

export default class Ekibimiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      direktor: [],
      yoneticiler: [],
      kullanicidestek: [],
      yazilim: [],
      sistemnetwork: [],
    }
  }

  componentDidMount() {
    this.setState({
       direktor: BT.direktor.info,
       yoneticiler: BT.direktor.yoneticiler,
       kullanicidestek: BT.direktor.ekip.kullanicidestek,
       yazilim: BT.direktor.ekip.yazilim,
       sistemnetwork: BT.direktor.ekip.sistemnetwork
    })
  }

  resimBas = (unvani,adi,resim,color) => {
    return <Segment color={color}>
                      {color === "none" ? null : <Label as='a' color={color} ribbon>{unvani}</Label> }
                      <Image size="medium" src={resim} />
                      <span>{adi}</span>
                  </Segment>

  }

calisanlar = (nesne, renk) => {
 return <Grid.Column>
           {Object.keys(nesne)
                  .map(key => this.resimBas(nesne[key].unvani, nesne[key].adi, nesne[key].resim, renk)
                  )}
         </Grid.Column>
}


render () {

  return <Container text textAlign="left">

  <Grid columns={4} centered>

  {/* DİREKTÖR */}
  <Grid.Row verticalAlign='top'>
      <Grid.Column>
      {Object.keys(this.state.direktor)
             .map(key=> this.resimBas(this.state.direktor[key].unvani, this.state.direktor[key].adi, this.state.direktor[key].resim, "blue")
            )}
      </Grid.Column>
  </Grid.Row>

{/* YÖNETİCİLER */}
<Grid.Row verticalAlign='top'>
{Object.keys(this.state.yoneticiler)
       .map(key => {
            return (
              <Grid.Column>
                   {this.resimBas(this.state.yoneticiler[key].unvani,
                                this.state.yoneticiler[key].adi,
                                this.state.yoneticiler[key].resim,
                                 "teal")}
              </Grid.Column>
            )
       })
}
</Grid.Row>

{/* ****** ÇALIŞANLAR ****** */}

<Grid.Row verticalAlign='top'>
{/* KULLANICI DESTEK */}
{this.calisanlar(this.state.kullanicidestek,"none")}
{this.calisanlar(this.state.yazilim,"none")}
{this.calisanlar(this.state.sistemnetwork,"none")}
 <Grid.Column> <br /> </Grid.Column>
</Grid.Row>

  </Grid>

  </Container>
}
}
