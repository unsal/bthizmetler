import React, { Component } from 'react'
import axios from 'axios'
import { Segment, Dimmer, Loader, Message, Card } from 'semantic-ui-react'
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
      errMessage: ""
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

grupProjeleri = (grup, baslik, color) => (
<Card.Group itemsPerRow={4}>
  {
    Object.keys(grup)
          // .sort((a, b) => a.durum > b.durum)
          .map(key => {
                  return (
                    <Card raised color={color}
                      header={grup[key].baslik}
                      meta={grup[key].birim}
                      description={grup[key].aciklama}
                      label={{ as: 'a', corner: 'left', icon: 'heart' }}
                    >
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
                              {this.grupProjeleri(this.state.yazilim, "YAZILIM",'orange')}
                              {this.grupProjeleri(this.state.sistem,"SİSTEM NETWORK",'green')}
                              {this.grupProjeleri(this.state.kurumsal,"KURUMSAL ÇÖZÜMLER",'yellow')}
                              {this.grupProjeleri(this.state.destek, "KULLANICI DESTEK",'teal')}
                            </Segment>

          return html

          }
}

