import React, { Component } from 'react'
import { Table, Segment, Label, Icon, Dimmer, Loader, Accordion, Message } from 'semantic-ui-react'

//redux
import { connect } from 'react-redux';
import { updateStoreDataMW } from '../redux/actions';
import { store } from '../redux/store';


class ProjelerAsList extends Component {

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



 Ribbon = (props) => {
        switch(props.kodu) {
          case "2": return <Label as='a' color='green' ribbon='right'><Icon name='checkmark' /></Label>; //done
          case "0": return <Label as='a' color='blue' ribbon='right'><Icon loading name='asterisk' /></Label>; //işlemde
          case "1": return <Label as='a' ribbon='right'><Icon name='pin' /></Label>; //Sıradaki
          case "3": return <Label as='a' color='red' ribbon='right'><Icon name='send outline' /></Label>; //iptal
          default: return "Belirsiz";
      }
    }

ListGrupProjeleri = (props) => {
const data = props.data;;
return <Table celled compact selectable size="small">
  {/* <Table.Header>
    <Table.Row>
        <Table.HeaderCell colSpan='4'>
          <Button floated='right' size='mini'> <Icon name='add' /> </Button>
        </Table.HeaderCell>
    </Table.Row>

  </Table.Header> */}
  <Table.Body>
  {data?
    Object.keys(data)
          // .sort((a, b) => a.durum > b.durum)
          .map(key => {
                  var prps = {
                    // disabled: props.data[key].durum==="3",
                    positive: props.data[key].durum==="2",
                    error: props.data[key].durum==="3"
                  };

                  const panels = [
                        {
                          title: props.data[key].aciklama,
                          content: { content : <strong>{props.data[key].sonuc}</strong>}
                        }
                      ]

                  return (
                    <Table.Row {...prps} key={props.data[key].id}>
                      <Table.Cell width="5"><strong>{props.data[key].baslik}</strong></Table.Cell>
                      <Table.Cell width="10">
                        <Accordion panels={panels} />
                      </Table.Cell>
                      <Table.Cell width="5">{props.data[key].birim}</Table.Cell>
                      <Table.Cell width="3">
                        <this.Ribbon kodu={props.data[key].durum} />
                      </Table.Cell>
                    </Table.Row>
                          )
                      }
              ):    <Icon  name='close' />

  }
</Table.Body>
</Table>

}

render () {
const html = this.state.errMessage !=="" ?
                            <Segment basic><Message negative>{this.state.errMessage}</Message></Segment>
                            :
                            <Segment basic >
                              <Dimmer inverted active={this.state.isLoading}><Loader  content='Yükleniyor...'/></Dimmer>
                              <this.ListGrupProjeleri data={this.props.data} />
                            </Segment>

          return html

          }
}

const mapStateToProps = state => ({ data: state.data });
export default connect(mapStateToProps)(ProjelerAsList);
