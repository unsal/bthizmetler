import React, { Component } from "react";
import { Accordion, Icon, Container, Header, Segment } from "semantic-ui-react";

export default class SSS extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Segment basic>
      <Container textAlign="justified">
        <Header as="h2">
          {" "}
          <Icon name="question circle" color="yellow"/>Sıkça Sorulan Sorular{" "}
        </Header>
        <Accordion fluid styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} >
            <Icon name="dropdown" />
            Yazıcı ayarlarımı nasıl yapılandırabilirim?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
            Windows bilgisayarlarda Ozu.Net ağında yazıcı ekleme için yardımcı dökümandır. Bilgisayara yazıcı eklemeden önce Ozu.Net ağ bağlantısının gerçekleştirilmiş olması gerekmektedir.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Outlook ayarlarımı Windows PC üzerinde nasıl yaparım?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
            Ozyegin uzantılı mail adreslerinin outlook programında kullanıp hesap ekleme için yardımcı dökümandır.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="dropdown" />
            Ziyaretçiler için kablosuz ağ bağlantısını nasıl sağlarım?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
            Ziyaretçiler için internet bağlantısı hakkında dökümandır. Dökümandaki yönergelerden önce solutioncenter üzerinden talep açılarak ziyaretçi interneti kullanımı için kullanıcı adı ve şifre talep edilmesi gerekmektedir.
            </p>
          </Accordion.Content>
        </Accordion>
      </Container>
      </Segment>
    );
  }
}
