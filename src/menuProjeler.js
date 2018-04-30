import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ListProjeler from './menuProjelerList'

export default class Projeler extends Component {

  constructor(props) {
    super(props);
    this.state = { activeItem: '2018', loading: true }
  }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={3}>
          <Menu size="mini" fluid vertical tabular='left'>
            <Menu.Item name='2018' active={activeItem === '2018'} onClick={this.handleItemClick} />
            <Menu.Item name='2017' active={activeItem === '2017'} onClick={this.handleItemClick} />
            <Menu.Item name='2016' active={activeItem === '2016'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

      <Grid.Column stretched width={12}>
         <Segment basic>
          <ListProjeler />
         </Segment>
       </Grid.Column>

       </Grid>
    )
  }
}