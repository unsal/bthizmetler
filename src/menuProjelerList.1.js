import React, { Component } from 'react'
import { Message, Segment, Accordion } from 'semantic-ui-react'
import db from './data/projeler.json'

const messageStyle = {
  marginLeft: '15px'
};

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

 grubuYaz = (grup) => (
  <Segment basic>
  {
    Object.keys(grup)
          .map(key => {
                  return (
                          <Message info  style={messageStyle}>
                            <Message.Header> {grup[key].proje} </Message.Header>
                            <p>{grup[key].aciklama}</p>
                          </Message>
                          )
                      }
              )
  }
  </Segment>
 )

render () {
    return (
            <Segment basic >
              {this.grubuYaz(this.state.yazilim)}
              {this.grubuYaz(this.state.sistemNetwork)}
              {this.grubuYaz(this.state.kurumsalCozumler)}
              {this.grubuYaz(this.state.kullaniciDestek)}
            </Segment>
            )
          }
}

