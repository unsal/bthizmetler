import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import ProjelerAsCard from './ProjelerAsCard';
import ProjelerAsList from './ProjelerAsList';

export default class Projeler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filtreYil: '',
      filtreGrup: '',
      showAs: ''

    }
  }

  componentDidMount() {
    this.setState({
      filtreYil: '2018',
      filtreGrup: 'Yazilim',
      showAs: 'Card'
    })
  }


  handleClickYil = (e, { name }) => this.setState({ filtreYil: name })
  handleClickGrup = (e, { name }) => this.setState({ filtreGrup: name })

FiltreYil = () => {
    let filtreYil  = this.state.filtreYil
    return  <Menu pointing secondary size="mini">
    <Menu.Item name='2016' active={filtreYil === '2016'} onClick={this.handleClickYil} />
    <Menu.Item name='2017' active={filtreYil === '2017'} onClick={this.handleClickYil} />
    <Menu.Item name='2018' active={filtreYil === '2018'} onClick={this.handleClickYil} />
    <Menu.Item name='Format:' position='right'>
        <Icon name='content' link onClick={()=>this.setState({showAs: 'List'})}/>
        <Icon name='block layout' link onClick={()=>this.setState({showAs: 'Card'})}/>
    </Menu.Item>
  </Menu>
}

FiltreGrup = () => {
    let filtreGrup  = this.state.filtreGrup
    return <Menu pointing secondary size='mini'>
      <Menu.Item name='Yazilim' active={filtreGrup === 'Yazilim'} onClick={this.handleClickGrup} />
      <Menu.Item name='Sistem Network' active={filtreGrup === 'Sistem Network'} onClick={this.handleClickGrup} />
      <Menu.Item name='Kurumsal Çözümler' active={filtreGrup === 'Kurumsal Çözümler'} onClick={this.handleClickGrup} />
      <Menu.Item name='Kullanıcı Destek' active={filtreGrup === 'Kullanıcı Destek'} onClick={this.handleClickGrup} />
    </Menu>
}

ShowAs = () => {
  const yil =this.state.filtreYil;
  const grup=this.state.filtreGrup;
  switch (this.state.showAs) {
    case 'Card': return <ProjelerAsCard yil={yil} grup={grup} />
    case 'List': return <ProjelerAsList yil={yil} grup={grup} />
    default: return "Nothing to show..."
       }
     }

  render() {
    return <Segment secondary basic>
              <this.FiltreYil />
              <this.FiltreGrup />
              <this.ShowAs />
          </Segment>
  }
}