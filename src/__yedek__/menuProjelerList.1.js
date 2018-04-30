import React, { Component } from 'react'
import { Table, Segment, Label, Header } from 'semantic-ui-react'
import db from './data/projeler.json'

// const messageStyle = {
//   marginLeft: '15px'
// };

export default class ProjelerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yazilim: [],
      sistemNetwork:[],
      kurumsalCozumler: [],
      kullaniciDestek: []
    }
  }

componentDidMount() {
  const yazilim = db.projeler.y2018.yazilim;
  const sistemNetwork = db.projeler.y2018.sistem_network;
  const kurumsalCozumler = db.projeler.y2018.kurumsal_cozumler;
  const kullaniciDestek = db.projeler.y2018.kullanici_destek;

  this.setState ({ yazilim });
  this.setState ({ sistemNetwork  });
  this.setState ({ kurumsalCozumler });
  this.setState ({ kullaniciDestek });

 }

 durumAciklamasi = (durumKodu) => {
        switch(durumKodu) {
          case "0": return <Label as='a' ribbon='right'>Sırada</Label>;
          case "1": return <Label as='a' color='green' ribbon='right'>Tamam</Label>;
          case "2": return <Label as='a' color='blue' ribbon='right'>İşlemde</Label>;
          case "3": return <Label as='a' color='red' ribbon='right'>X</Label>;
          default: return "Belirsiz";
      }
    }

grubuYaz = (grup, baslik) => (
<Table color="teal" compact selectable size="small">
  <Table.Header>
    <Table.Row>
        <Table.HeaderCell colSpan='4'><Header as='h3' textAlign='left'>{baslik}</Header></Table.HeaderCell>
    </Table.Row>

  </Table.Header>
  <Table.Body>

  {
    Object.keys(grup)
          .sort((a, b) => a.durum > b.durum)
          .map(key => {
                  var props = {
                    disabled: grup[key].durum==="3",
                    positive: grup[key].durum==="1",
                    error: grup[key].durum==="3"
                  };

                  return (
                    <Table.Row {...props}>
                      <Table.Cell width="5"><strong>{grup[key].proje}</strong></Table.Cell>
                      <Table.Cell width="10">{grup[key].aciklama}</Table.Cell>
                      <Table.Cell width="5">{grup[key].birim}</Table.Cell>
                      <Table.Cell width="3">{this.durumAciklamasi(grup[key].durum)}</Table.Cell>
                    </Table.Row>
                          )
                      }
              )
  }
</Table.Body>
</Table>

 )

render () {
    return (
            <Segment basic >

              {this.grubuYaz(this.state.yazilim, "YAZILIM")}
              {this.grubuYaz(this.state.sistemNetwork,"SİSTEM NETWORK")}
              {this.grubuYaz(this.state.kurumsalCozumler,"KURUMSAL ÇÖZÜMLER")}
              {this.grubuYaz(this.state.kullaniciDestek, "KULLANICI DESTEK")}

            </Segment>
            )
          }
}

