import React, { Component } from 'react'
import axios from 'axios'
import { Table, Segment, Label, Icon, Dimmer, Loader, Accordion, Message, Button } from 'semantic-ui-react'
import config from '../config'

// import db from './data/projeler.json'

// const messageStyle = {
//   marginLeft: '15px'
// };


export default class ListProjeler extends Component {

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

 durumRibbon = (kodu) => {
        switch(kodu) {
          case "2": return <Label as='a' color='green' ribbon='right'><Icon name='checkmark' /></Label>; //done
          case "0": return <Label as='a' color='blue' ribbon='right'><Icon loading name='asterisk' /></Label>; //işlemde
          case "1": return <Label as='a' ribbon='right'><Icon name='pin' /></Label>; //Sıradaki
          case "3": return <Label as='a' color='red' ribbon='right'><Icon name='send outline' /></Label>; //iptal
          default: return "Belirsiz";
      }
    }

listGrupProjeleri = (grup, baslik) => (
<Table celled color="teal" compact selectable size="small">
  <Table.Header>
    <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Label basic>{baslik}</Label>
          <Button floated='right' size='mini'> <Icon name='add' /> </Button>
        </Table.HeaderCell>
    </Table.Row>

  </Table.Header>
  <Table.Body>
  {
    Object.keys(grup)
          // .sort((a, b) => a.durum > b.durum)
          .map(key => {
                  var props = {
                    // disabled: grup[key].durum==="3",
                    positive: grup[key].durum==="2",
                    error: grup[key].durum==="3"
                  };

                  const panels = [
                        {
                          title: grup[key].aciklama,
                          content: { content : <strong>{grup[key].sonuc}</strong>}
                        }
                      ]

                  return (
                    <Table.Row {...props} key={grup[key].id}>
                      <Table.Cell width="5"><strong>{grup[key].baslik}</strong></Table.Cell>
                      {/* <Table.Cell width="10">{grup[key].aciklama}</Table.Cell> */}
                      <Table.Cell width="10">
                        <Accordion panels={panels}/>
                      </Table.Cell>
                      <Table.Cell width="5">{grup[key].birim}</Table.Cell>
                      <Table.Cell width="3">
                      {this.durumRibbon(grup[key].durum)}
                      {/* <Popup trigger={this.durumRibbon(grup[key].durum)}>
                        <Popup.Header>{grup[key].baslik}</Popup.Header>
                        <Popup.Content> {grup[key].sonuc} </Popup.Content>
                      </Popup> */}
                      </Table.Cell>
                    </Table.Row>
                          )
                      }
              )
  }
</Table.Body>
</Table>

 )

render () {
const html = this.state.errMessage !=="" ?
                            <Segment basic><Message negative>{this.state.errMessage}</Message></Segment>
                            :
                            <Segment basic >
                              <Dimmer inverted active={this.state.isLoading}><Loader  content='Yükleniyor...'/></Dimmer>
                              {this.listGrupProjeleri(this.state.yazilim, "YAZILIM")}
                              {this.listGrupProjeleri(this.state.sistem,"SİSTEM NETWORK")}
                              {this.listGrupProjeleri(this.state.kurumsal,"KURUMSAL ÇÖZÜMLER")}
                              {this.listGrupProjeleri(this.state.destek, "KULLANICI DESTEK")}
                            </Segment>

          return html

          }
}

