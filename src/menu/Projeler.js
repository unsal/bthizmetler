import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import ProjelerAsCard from './ProjelerAsCard';
import ProjelerAsList from './ProjelerAsList';
import ProjelerForm from './ProjelerForm';

//redux
import { connect } from 'react-redux';
import { store } from '../redux/store';
import { updateStoreYilMW, updateStoreGrupMW } from '../redux/actions';

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


  handleClickYil = (e, { name }) => { store.dispatch(updateStoreYilMW(name));}
  handleClickGrup = (e, { name }) => { store.dispatch(updateStoreGrupMW(name)); }


yil = () => {
    const yil  = this.props.yil;
    return  <Menu pointing secondary size="mini">
    <Menu.Item name='2016' active={yil === '2016'} onClick={this.handleClickYil} />
    <Menu.Item name='2017' active={yil === '2017'} onClick={this.handleClickYil} />
    <Menu.Item name='2018' active={yil === '2018'} onClick={this.handleClickYil} />
    <Menu.Item name='Format:' position='right'>
        <ProjelerForm baslik="Ekle" icon="add square" />
        {/* <Icon name='add square' size='large' link /> */}
        <Icon />
        <Icon name='save' size='large' link />
        <Icon name='mail outline' size='large' link />
        <Icon />
        <Icon name='pie graph' link size='large' />
        <Icon name='content' link size='large' onClick={()=>this.setState({showAs: 'List'})}/>
        <Icon name='block layout' size='large' link onClick={()=>this.setState({showAs: 'Card'})}/>
    </Menu.Item>
  </Menu>
}

grup = () => {
    const grup  = this.props.grup;
    return <Menu pointing secondary size='mini'>
      <Menu.Item name='tumu' active={grup === 'tumu'} onClick={this.handleClickGrup} />
      <Menu.Item name='yazilim' active={grup === 'yazilim'} onClick={this.handleClickGrup} />
      <Menu.Item name='sistem' active={grup === 'sistem'} onClick={this.handleClickGrup} />
      <Menu.Item name='kurumsal' active={grup === 'kurumsal'} onClick={this.handleClickGrup} />
      <Menu.Item name='destek' active={grup === 'destek'} onClick={this.handleClickGrup} />
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
    return <Segment basic>
              <this.yil />
              <this.grup />
              <this.ShowAs />
          </Segment>
  }
}

const mapStateToProps = (state) => ({ yil: state.yil, grup: state.grup });
export default connect(mapStateToProps)(Projeler);
