import React, { Component } from 'react';
import { Modal, Icon, Form } from 'semantic-ui-react';
import {durum} from '../data/dropdown/durum.json';
import {birim} from '../data/dropdown/birim.json';
import {grup} from '../data/dropdown/grup.json';
import {yil} from '../data/dropdown/yil.json';
import {empty} from '../unsal.js';

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
      db: !empty(data) ? data : [],
      // yeni: !!empty(data) ? true : false,
      yeni: empty(data) ? true : false,

      baslik: !empty(data) ? data.baslik : '',
      aciklama: !empty(data) ? data.aciklama : '',
      sonuc: !empty(data) ? data.sonuc : '',
      yil: !empty(data) ? data.yil : '',
      grup: !empty(data) ? data.grup : '',
      birim: !empty(data) ? data.birim : '',
      durum: !empty(data) ? data.durum : '',
      zamandamgasi: !empty(data)? data.zamandamgasi : ''
    });

  }

  close = () => {this.setState({ open: false})}
  show = () => {this.setState({ open: true})}

  handleSubmit = (e) => {
    console.log(this.state.db)
  }

  //datanın kopyasını alır ve ilgili alanı günceller... yarıda kaldıs
  handleChange = (e) => {
    const data = this.state.db;
    // Data içindeki sadcee ilgili değeri değiştiri, gerisi aynı kalır. !! Güzel özellik!!
    const updatedData = {
       ...data,
       [e.target.name]: e.target.value  // değişkeni [..] içine alamk onu karakter olarak kullanmayı sağlıyor. önemli..
    }
    // setstate synchronius çalışmadığı için başka bir fonksiyonla tetiklemek lazım...
    // this.setState({ db: updatedData }, this.handleSubmit)
    console.log(e.target.value)

  }



  render() {
    const {baslik, icon} = this.props;
    const yeniZaman = new Date().toLocaleString();

    console.log("on render:",this.state.yil);

    return <Modal dimmer='blurring' open={this.state.open} trigger={<Icon name={icon} size="large" link onClick={ this.show }/>} >
      <Modal.Header>{baslik}</Modal.Header>
      <Modal.Content>
        <Modal.Description>

          <Form size="mini">
            <Form.Input fluid label='PROJE ADI' name="baslik" placeholder="Proje Adı" defaultValue={this.state.baslik} onChange={this.handleChange}/>
            <Form.Group widths='equal' >
              <Form.Dropdown label='PROJE YILI' name="yil" defaultValue={this.state.yil} search selection options={yil} placeholder='Proje Yılını Seçiniz' onChange={this.handleChange} />
              <Form.Dropdown label='PROJE GRUBU' name="grup" defaultValue={this.state.grup} search selection options={grup} placeholder='BT grubunu seçiniz' onChange={this.handleChange} />
              <Form.Dropdown label='TALEP EDEN BİRİM' name="birim" defaultValue={this.state.birim} search selection options={birim} placeholder='Birimi Seçiniz' onChange={this.handleChange} />

            </Form.Group>
            <Form.TextArea label='AÇIKLAMA' name="aciklama" placeholder='Açıklama' defaultValue={this.state.aciklama} onChange={this.handleChange} />
            <Form.Dropdown label='DURUM' name="durum" defaultValue={this.state.durum} search selection options={durum} placeholder='Proje Durumu Seçiniz' onChange={this.handleChange} />

            <Form.TextArea label='SONUÇ' name="sonuc" placeholder='Sonuç' defaultValue={this.state.sonuc} onChange={this.handleChange} />
            <Form.Input fluid label='KAYIT TARİHİ' name="zamandamgasi" placeholder="Tarih" disabled value={!this.state.yeni ? this.state.zamandamgasi : yeniZaman} />
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
