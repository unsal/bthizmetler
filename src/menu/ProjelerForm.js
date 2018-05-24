import React, { Component } from 'react';
import { Modal, Icon, Form } from 'semantic-ui-react';
import {durum} from '../data/dropdown/durum.json';
import {birim} from '../data/dropdown/birim.json';
import {grup} from '../data/dropdown/grup.json';
import {yil} from '../data/dropdown/yil.json';

class ProjelerForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      baslik: '', aciklama: '', sonuc: '', yil: '', grup: '', birim:'',durum:'', zamandamgasi:'',
      db: [],
      yeni: true
     };
  }

  componentDidMount() {
    const data = this.props.data;
    this.setState({
      db: data ? data : [],
      yeni: !data ? true : false,

      baslik: data ? data.baslik : '',
      aciklama: data ? data.aciklama : '',
      sonuc: data ? data.sonuc : '',
      yil: data ? data.yil : '',
      grup: data ? data.grup : '',
      birim: data ? data.birim : '',
      durum: data ? data.durum : '',
      zamandamgasi: data? data.zamandamgasi : ''

    });
  }

  close = () => {this.setState({ open: false})}
  show = () => {this.setState({ open: true})}

  onChangeBaslik = (e, field) => { this.setState({ baslik: field.value });}
  onChangeAciklama = (e, field) => { this.setState({ aciklama: field.value });}
  onChangeSonuc = (e, field) => { this.setState({ sonuc: field.value });}
  onChangeYil = (e, field) => { this.setState({ yil: field.value }); }
  onChangeGrup = (e, field) => { this.setState({ grup: field.value }); }
  onChangeBirim = (e, field) => { this.setState({ birim: field.value }); }
  onChangeDurum = (e, field) => { this.setState({ durum: field.value }); }

  render() {
    const {baslik, icon} = this.props;
    const yeniZaman = new Date().toLocaleString();

    return <Modal dimmer='blurring' open={this.state.open} trigger={<Icon name={icon} size="large" link onClick={ this.show }/>} >
      <Modal.Header>{baslik}</Modal.Header>
      <Modal.Content>
        <Modal.Description>

          <Form size="mini">
            <Form.Input fluid label='PROJE ADI' placeholder="Proje Adı" value={this.state.baslik} onChange={this.onChangeBaslik} />
            <Form.Group widths='equal' >
              <Form.Dropdown label='PROJE YILI' value={this.state.yil} search selection options={yil} placeholder='Proje Yılını Seçiniz' onChange={this.onChangeYil}/>
              <Form.Dropdown label='PROJE GRUBU' value={this.state.grup} search selection options={grup} placeholder='BT grubunu seçiniz' onChange={this.onChangeGrup}/>
              <Form.Dropdown label='TALEP EDEN BİRİM' value={this.state.birim} search selection options={birim} placeholder='Birimi Seçiniz' onChange={this.onChangeBirim}/>

            </Form.Group>
            <Form.TextArea label='AÇIKLAMA' placeholder='Açıklama' value={this.state.aciklama} onChange={this.onChangeAciklama} />
            <Form.Dropdown label='DURUM' value={this.state.durum} search selection options={durum} placeholder='Proje Durumu Seçiniz' onChange={this.onChangeDurum}/>

            <Form.TextArea label='SONUÇ' placeholder='Sonuç' value={this.state.sonuc} onChange={this.onChangeSonuc}/>
            <Form.Input fluid label='KAYIT TARİHİ' placeholder="Tarih" value={!this.state.yeni ? this.state.zamandamgasi : yeniZaman} />
            <Form.Group>
              <Form.Button primary>{baslik}</Form.Button>
              {!this.state.yeni ? <Form.Button negative>Sil</Form.Button> : <span />}
              <Form.Button onClick={this.close}>Vazgeç</Form.Button>
            </Form.Group>
          </Form>

        </Modal.Description>
      </Modal.Content>
    </Modal>
  }
}

export default ProjelerForm;;
