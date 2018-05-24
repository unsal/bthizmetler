import React, { Component } from 'react'
import { Segment, Dimmer, Loader, Message, Card, Label, Icon, Popup } from 'semantic-ui-react'
//redux
import { connect } from 'react-redux';
import { updateStoreDataMW } from '../redux/actions';
import { store } from '../redux/store';

import ProjelerForm from './ProjelerForm';


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
  store.dispatch(updateStoreDataMW());

 }


 componentDidUpdate(prevProps, prevState) {
   //Loader çarkını kapatmak için
   if (prevState.didMount !== this.state.didMount) {
      this.setState({ isLoading: false })
   }
   }


Corner = (durum) => {
    switch(durum) {
      case "2": return <Label color='green'  corner='right'><Icon link name='checkmark' /></Label>; //done
      case "0": return <Label color='blue'   corner='right'><Icon link loading name='asterisk' /></Label>; //işlemde
      case "1": return <Label                corner='right'><Icon link name='pin' /></Label>; //Sıradaki
      case "3": return <Label color='red'    corner='right'><Icon link name='send outline' /></Label>; //iptal
      default: return "Belirsiz";
  }
}

ListProjeler = (props) => {
const data = props.data;
return <Card.Group itemsPerRow={4}>
  { data?
    Object.keys(data)
          .map(key => {
                  return (
                    <Card key={key} className="projectCard">
                    <Card.Content>

                        <Popup
                          trigger={this.Corner(data[key].durum)}
                          content={data[key].sonuc}
                          on='click'
                          position ='right center'
                          inverted
                        />

                      <Card.Header>{data[key].baslik}</Card.Header>
                      {/* <Card.Meta>{props.data[key].birim}</Card.Meta> */}
                      <Card.Description>{data[key].aciklama}
                                      <Label attached='bottom right' className="editProjectCard">
                                         <ProjelerForm data={data[key]} baslik="Güncelle" icon="write" />
                                      </Label>
                    </Card.Description>

                    </Card.Content>
                    </Card>
                          )
                      }
              ):
    <Icon  name='close' />
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

const mapStateToProps = state => ({ data: state.data });
export default connect(mapStateToProps)(ProjelerAsCard);
