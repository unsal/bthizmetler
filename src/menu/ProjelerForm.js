import React, { Component } from 'react';
import { Modal, Icon, Form } from 'semantic-ui-react';
import {durum} from '../data/dropdown/durum.json';
import {birim} from '../data/dropdown/birim.json';
import {grup} from '../data/dropdown/grup.json';
import {yil} from '../data/dropdown/yil.json';

class ProjelerForm extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  close = () => {this.setState({ open: false})}
  show = () => {this.setState({ open: true})}

  render() {
    const { baslik, icon, data } = this.props;
    const db = data ? data : [];
    const yeni = db.length === 0;
    const mevcutZaman = new Date().toLocaleString();

    return <Modal dimmer='blurring' open={this.state.open} trigger={<Icon name={icon} size="large" link onClick={ this.show }/>} >
      <Modal.Header>{baslik}</Modal.Header>
      <Modal.Content>
        <Modal.Description>

          <Form size="mini">
            <Form.Input fluid label='PROJE ADI' placeholder="Proje Adı" value={db.baslik} />
            <Form.Group widths='equal' >
              <Form.Dropdown label='PROJE YILI' value={db.yil} search selection options={yil} placeholder='Proje Yılını Seçiniz' />
              <Form.Dropdown label='PROJE GRUBU' value={db.grup} search selection options={grup} placeholder='BT grubunu seçiniz' />
              <Form.Dropdown label='TALEP EDEN BİRİM' value={db.birim} search selection options={birim} placeholder='Birimi Seçiniz' />

            </Form.Group>
            <Form.TextArea label='AÇIKLAMA' placeholder='Açıklama' value={db.aciklama} />
            <Form.Dropdown label='DURUM' value={db.durum} search selection options={durum} placeholder='Proje Durumu Seçiniz' />

            <Form.TextArea label='SONUÇ' placeholder='Sonuç' value={db.sonuc} />
            <Form.Input fluid label='KAYIT TARİHİ' placeholder="Tarih" value={!yeni ? db.zamandamgasi : mevcutZaman} />
            <Form.Group>
              <Form.Button primary>{baslik}</Form.Button>
              {!yeni ? <Form.Button negative>Sil</Form.Button> : <span />}
              <Form.Button onClick={this.close}>Vazgeç</Form.Button>
            </Form.Group>
          </Form>

        </Modal.Description>
      </Modal.Content>
    </Modal>
  }
}

export default ProjelerForm;;
