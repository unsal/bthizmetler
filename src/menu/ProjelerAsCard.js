import React, { Component } from 'react'
import { Segment, Dimmer, Loader, Message, Card, Label, Icon } from 'semantic-ui-react'
//redux
import { connect } from 'react-redux';
import { updateStoreDataMW } from '../redux/actions';
import { store } from '../redux/store';

// import db from './data/projeler.json'

// const messageStyle = {
//   marginLeft: '15px'
// };


class ProjelerAsCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      didMount : false, //Loader çarkı gösterim state kontrolü için
      isLoading: true, // Loader çarkı default açık gelsin için
      errMessage: ""
    }
  }



componentDidMount() {
  this.setState({ didMount: true });
  store.dispatch(updateStoreDataMW(this.props.url));

  // dataToStore(this.props.url);
 }


 componentDidUpdate(prevProps, prevState) {
   //Loader çarkını kapatmak için
   if (prevState.didMount !== this.state.didMount) {
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
    <Label basic>NULL Data Object</Label>
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
