import React, { Component } from 'react';
import { Menu, Segment, Icon } from 'semantic-ui-react';
import ProjelerAsCard from './ProjelerAsCard';
import ProjelerAsList from './ProjelerAsList';

//redux
import { connect } from 'react-redux';
import { store } from '../redux/store';
import { updateStoreYil, updateStoreGrup, updateStoreURL, updateStoreDataMW } from '../redux/actions';

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


  handleClickYil = (e, { name }) => {
                    store.dispatch(updateStoreYil(name));
                    store.dispatch(updateStoreURL());
                    store.dispatch(updateStoreDataMW())
                  }
  handleClickGrup = (e, { name }) => {
                    store.dispatch(updateStoreGrup(name));
                    store.dispatch(updateStoreURL());
                    store.dispatch(updateStoreDataMW())
                  }

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
    const _grup  = this.props.grup;
    return <Menu pointing secondary size='mini'>
      <Menu.Item name='yazilim' active={_grup === 'yazilim'} onClick={this.handleClickGrup} />
      <Menu.Item name='sistem' active={_grup === 'sistem'} onClick={this.handleClickGrup} />
      <Menu.Item name='kurumsal' active={_grup === 'kurumsal'} onClick={this.handleClickGrup} />
      <Menu.Item name='destek' active={_grup === 'destek'} onClick={this.handleClickGrup} />
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

const mapStateToProps = (state) => ({ yil: state.yil, grup: state.grup, url: state.url });
export default connect(mapStateToProps)(Projeler);
