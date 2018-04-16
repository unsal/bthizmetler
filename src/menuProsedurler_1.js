import React from 'react'
import { List, Segment, Container } from 'semantic-ui-react'

const Prosedurler = () => (
 <Segment basic>
   <Container>
  <List ordered>
    <List.Item>
      <a>BİLGİ TEKNOLOJİLERİ KAYNAKARLINI PLANLAMA</a>
      <List.List>
        <List.Item as='a'>Bütçe Planlama Prosedürü</List.Item>
        <List.Item as='a'>BT Hizmetlerini Gözden Geçirme Prosedürü</List.Item>
        <List.Item as='a'>Yazılım/Donanım Lisans Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Dış Kaynaklı Hizmetlerin Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Paket Yazılım Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Web Siteleri Yönetim Prosedürü</List.Item>
      </List.List>
    </List.Item>

    <List.Item>
      <a>PROJE VE UYGULAMA GELİŞTİRME</a>
      <List.List>
        <List.Item as='a'>Uygulama Geliştirme Prosedürü</List.Item>
        <List.Item as='a'>Entegrasyon Geliştirme Prosedürü</List.Item>
        <List.Item as='a'>Alan Adı Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Yazılım Sağlama Prosedürü</List.Item>
        <List.Item as='a'>Danışmanlık Sağlama Prosedürü</List.Item>

      </List.List>
    </List.Item>
    <List.Item>
      <a>SİSTEM ve NETWORK KAYNAKLARINI YÖNETME</a>
      <List.List>
        <List.Item as='a'>Bilgi Güvenliğini Yönetme Prosedürü</List.Item>
        <List.Item as='a'>Sunucu Sistem ve Barındırma Prosedürü</List.Item>
        <List.Item as='a'>Yedekleme Hizmeti Prosedürü</List.Item>
        <List.Item as='a'>Veritabanı Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Santral Operasyonları Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Internet Hizmeti Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Ağ Hizmetleri Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Google Apps Uygulamaları İletim Prosedürü</List.Item>
        <List.Item as='a'>Güvenlik olaylarını Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Storage Hizmeti Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Kurumsal Zeka İşletim Prosedürü</List.Item>
      </List.List>
    </List.Item>
    <List.Item>
      <a>KULLANICI DESTEK HİZMETLERİNİ YÖNETME</a>
      <List.List>
        <List.Item as='a'>Envanter Kayıtlarının Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Kullanıcı Hesapları Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Kullanıcı Çağrılarının Yönetimi Prosedürü</List.Item>
        <List.Item as='a'>Memnuniyet Anketleri Yönetimi Prosedürü</List.Item>
        <List.Item as='a'>Kullanıcı Şikayetlerinin Yönetim Prosedürü</List.Item>
        <List.Item as='a'>Digital Signage Sistem İşletim Prosedürü</List.Item>
        <List.Item as='a'>AV Ekipmanları Yönetim Prosedürü</List.Item>
      </List.List>
    </List.Item>
  </List>
  </Container>
  </Segment>
)

export default Prosedurler