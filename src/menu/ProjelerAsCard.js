import React, { Component } from 'react'
import axios from 'axios'
import { Segment, Dimmer, Loader, Message, Card, Label, Icon } from 'semantic-ui-react'
import config from '../config'

// import db from './data/projeler.json'

// const messageStyle = {
//   marginLeft: '15px'
// };


export default class ProjelerAsCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      yazilim: [],
      sistem:[],
      kurumsal: [],
      destek: [],
      isLoading: true, // Loader çarkı default açık gelsin için
      errMessage: "",
      yil: props.yil,
      grup: props.grup
    }
  }

componentDidMount() {

  const url = config.apiURL
  axios.get(url)
      .then(res => {
            const db = res.data;
            const yazilim = db.projeler._2018.yazilim;
            const sistem = db.projeler._2018.sistem;
            const kurumsal = db.projeler._2018.kurumsal;
            const destek = db.projeler._2018.destek;

            this.setState ({ yazilim });
            this.setState ({ sistem  });
            this.setState ({ kurumsal });
            this.setState ({ destek });
            console.log(this.state.yil+" "+this.state.grup)
      })
      .catch(err=>{
        this.setState({ errMessage:"Kaynak okunamıyor: "+url })
        console.log(err)
      })

 }

 componentDidUpdate(prevProps, prevState) {
   //Loader çarkını kapatmak için
   if (prevState.yazilim !== this.state.yazilim) {
      this.setState({ isLoading: false })
   }
   }

Corner = (props) => {
    switch(props.kodu) {
      case "2": return <Label color='green'  corner='right'><Icon name='checkmark' /></Label>; //done
      case "0": return <Label color='blue'   corner='right'><Icon loading name='asterisk' /></Label>; //işlemde
      case "1": return <Label                corner='right'><Icon name='pin' /></Label>; //Sıradaki
      case "3": return <Label color='red'    corner='right'><Icon name='send outline' /></Label>; //iptal
      default: return "Belirsiz";
  }
}

grupProjeleri = (grup, baslik) => (
<Card.Group itemsPerRow={4}>
  {
    Object.keys(grup)
          // .sort((a, b) => a.durum > b.durum)
          .map(key => {
                  return (
                    <Card>
                    <Card.Content>
                      <this.Corner kodu={grup[key].durum} />
                      <Card.Header>{grup[key].baslik}</Card.Header>
                      <Card.Meta>{grup[key].birim}</Card.Meta>
                      <Card.Description>{grup[key].aciklama}</Card.Description>

                    </Card.Content>
                    </Card>
                          )
                      }
              )
  }

</Card.Group>

 )

render () {
const html = this.state.errMessage !=="" ?
                            <Segment basic><Message negative>{this.state.errMessage}</Message></Segment>
                            :
                            <Segment basic >
                              <Dimmer inverted active={this.state.isLoading}><Loader  content='Yükleniyor...'/></Dimmer>
                              {this.grupProjeleri(this.state.yazilim, "YAZILIM")}
                              {this.grupProjeleri(this.state.sistem,"SİSTEM NETWORK")}
                              {this.grupProjeleri(this.state.kurumsal,"KURUMSAL ÇÖZÜMLER")}
                              {this.grupProjeleri(this.state.destek, "KULLANICI DESTEK")}
                            </Segment>

          return html

          }
}

