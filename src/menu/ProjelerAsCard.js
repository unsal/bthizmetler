import React, { Component } from 'react'
import axios from 'axios'
import { Segment, Dimmer, Loader, Message, Card, Label, Icon } from 'semantic-ui-react'
import config from '../config'
//redux
import { connect } from 'react-redux';
import { store } from '../redux/store';
import { updateStoreData, updateStoreURL } from '../redux/actions';

// import db from './data/projeler.json'

// const messageStyle = {
//   marginLeft: '15px'
// };


class ProjelerAsCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url : "",
      isLoading: true, // Loader çarkı default açık gelsin için
      errMessage: ""
    }
  }

componentDidMount() {

  this.loadDataToStore();

 }

 componentDidUpdate(prevProps, prevState) {
   //Loader çarkını kapatmak için
   if (prevState.url !== this.state.url) {
      this.setState({ isLoading: false })
   }
   }

loadDataToStore() {

  const yil = this.props.yil;
  const grup = this.props.grup.toLowerCase();

  const url = config.apiURL+"/"+yil+"/"+grup;
  this.setState({ url });
  store.dispatch(updateStoreURL(url));

  axios.get(url)
      .then(res => {
            const data = res.data.projeler;
            store.dispatch(updateStoreData(data))
      })
      .catch(err=>{
        this.setState({ errMessage: err })
        console.log(err)
      })
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

ListProjeler = (props) => {

const data = props.data;
return <Card.Group itemsPerRow={4}>
  { data?
    Object.keys(props.data)
          .map(key => {
                  return (
                    <Card>
                    <Card.Content>
                      <this.Corner kodu={props.data[key].durum} />
                      <Card.Header>{props.data[key].baslik}</Card.Header>
                      <Card.Meta>{props.data[key].birim}</Card.Meta>
                      <Card.Description>{props.data[key].aciklama}
                    </Card.Description>

                    </Card.Content>
                    </Card>
                          )
                      }
              ):
    <Label basic>NULL OBJECT</Label>
  }

</Card.Group>

}
render () {
const html = this.state.errMessage !=="" ?
                            <Segment basic><Message negative>{this.state.errMessage}</Message></Segment>
                            :
                            <Segment basic >
                              <Dimmer inverted active={this.state.isLoading}><Loader  content='Yükleniyor...'/></Dimmer>
                              <this.ListProjeler data={this.props.data} />
                            </Segment>

          return html

          }
}

const mapStateToProps = state => ({ yil: state.yil, grup: state.grup, url: state.url, data: state.data });
export default connect(mapStateToProps)(ProjelerAsCard);
