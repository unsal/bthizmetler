import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import ProjelerAsCard from './ProjelerAsCard';
import { Link } from 'react-router-dom'

export default class Projeler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem1: '2018',
      activeItem2: 'Yazılım',
      loading: true
    }
  }

  handleItemClick1 = (e, { name }) => this.setState({ activeItem1: name })
  handleItemClick2 = (e, { name }) => this.setState({ activeItem2: name })



FiltreYil = () => {
    let activeItem1  = this.state.activeItem1
    return  <Menu pointing secondary size="mini">
    <Menu.Item name='2016' active={activeItem1 === '2016'} onClick={this.handleItemClick1} />
    <Menu.Item name='2017' active={activeItem1 === '2017'} onClick={this.handleItemClick1} />
    <Menu.Item name='2018' active={activeItem1 === '2018'} onClick={this.handleItemClick1} />
    <Menu.Item name='Format:' position='right'>
        <Link to="/projeler/list"><Icon name='content'/></Link>
        <Link to="/projeler/card"><Icon name='block layout' /></Link>
    </Menu.Item>
  </Menu>
}

FiltreGrup = () => {
    let activeItem2  = this.state.activeItem2
    return <Menu pointing secondary size='mini'>
      <Menu.Item name='Yazılım' active={activeItem2 === 'Yazılım'} onClick={this.handleItemClick2} />
      <Menu.Item name='Sistem Network' active={activeItem2 === 'Sistem Network'} onClick={this.handleItemClick2} />
      <Menu.Item name='Kurumsal Çözümler' active={activeItem2 === 'Kurumsal Çözümler'} onClick={this.handleItemClick2} />
      <Menu.Item name='Kullanıcı Destek' active={activeItem2 === 'Kullanıcı Destek'} onClick={this.handleItemClick2} />
    </Menu>
}

  render() {
    return <Segment secondary basic>
              <this.FiltreYil />
              <this.FiltreGrup />
              <ProjelerAsCard />
          </Segment>
  }
}