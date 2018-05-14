import React from 'react'
import { Modal, Icon, Form } from 'semantic-ui-react'

const FormFields = (props) => {
const mevcutZaman = new Date().toLocaleString();

const data = props.data?props.data:[];
const yeni = data.length === 0;

 return <Form size="mini">
    <Form.Input fluid label='Proje Adı' placeholder="Proje Adı" value={data.baslik} />
    <Form.Group widths='equal' >
          <Form.Input fluid label='Proje Yılı' placeholder="Yıl" value={data.yil} />
          <Form.Input fluid label='Proje Grubu' placeholder="GRubu" value={data.grup} />
          <Form.Select fluid label='Talep Eden Birim' options={["BT","IK","FI"]} placeholder='Birim' />
    </Form.Group>
    <Form.TextArea label='Açıklama' placeholder='Açıklama' value={data.aciklama} />
    <Form.Select fluid label='Durum' options={["Tamam","İşlemde","Sırada", "Ertelendi"]} placeholder='Durum' />
    <Form.TextArea label='Sonuç' placeholder='Sonuç' value={data.sonuc} />
    <Form.Input fluid label='Oluşturulma Tarihi' placeholder="Tarih" value={!yeni?data.zamandamgasi:mevcutZaman} />
   <Form.Group>
     <Form.Button primary>{props.baslik}</Form.Button>
      {!yeni?<Form.Button negative>Sil</Form.Button>:<span />}
     <Form.Button >Vazgeç</Form.Button>
   </Form.Group>
  </Form>
}


const ProjelerForm = (props, dimmer) => (
  <Modal dimmer='blurring' trigger={<Icon name={props.icon} size="large" link />} >
    <Modal.Header>{props.baslik}</Modal.Header>
    <Modal.Content>
      <Modal.Description> <FormFields data={props.data} baslik={props.baslik}/> </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ProjelerForm;;
