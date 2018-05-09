import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import ProjelerAsCard from './ProjelerAsCard';
import ProjelerAsList from './ProjelerAsList';
//redux
import { connect } from 'react-redux';
import { store } from '../redux/store';
import { updateStoreYil, updateStoreGrup } from '../redux/actions';

class Projeler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAs: ''

    }
  }

  componentDidMount() {
    this.setState({
      showAs: 'Card'
    })
  }


  handleClickYil = (e, { name }) => store.dispatch(updateStoreYil(name));
  handleClickGrup = (e, { name }) => store.dispatch(updateStoreGrup(name));

yil = () => {
    const yil  = this.props.yil;
    return  <Menu pointing secondary size="mini">
    <Menu.Item name='2016' active={yil === '2016'} onClick={this.handleClickYil} />
    <Menu.Item name='2017' active={yil === '2017'} onClick={this.handleClickYil} />
    <Menu.Item name='2018' active={yil === '2018'} onClick={this.handleClickYil} />
    <Menu.Item name='Format:' position='right'>
        <Icon name='content' link onClick={()=>this.setState({showAs: 'List'})}/>
        <Icon name='block layout' link onClick={()=>this.setState({showAs: 'Card'})}/>
    </Menu.Item>
  </Menu>
}

grup = () => {
    const grup  = this.props.grup;
    return <Menu pointing secondary size='mini'>
      <Menu.Item name='Yazilim' active={grup === 'Yazilim'} onClick={this.handleClickGrup} />
      <Menu.Item name='Sistem Network' active={grup === 'Sistem Network'} onClick={this.handleClickGrup} />
      <Menu.Item name='Kurumsal Çözümler' active={grup === 'Kurumsal Çözümler'} onClick={this.handleClickGrup} />
      <Menu.Item name='Kullanıcı Destek' active={grup === 'Kullanıcı Destek'} onClick={this.handleClickGrup} />
    </Menu>
}

ShowAs = () => {
  switch (this.state.showAs) {
    case 'Card': return <ProjelerAsCard />
    case 'List': return <ProjelerAsList />
    default: return "Nothing to show..."
       }
     }

  render() {
    return <Segment secondary basic>
              <this.yil />
              <this.grup />
              <this.ShowAs />
          </Segment>
  }
}

const mapStateToProps = state => ({ yil: state.yil, grup: state.grup });
export default connect(mapStateToProps)(Projeler);
