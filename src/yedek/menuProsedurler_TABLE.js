import React, { Component } from 'react'
import { Segment, Container, Table, Icon } from 'semantic-ui-react'
import db from './data/prosedurler'

class Prosedurler extends Component {
  constructor (props) {
    super(props)
    this.state = {
        politikalar : []
    }
  }

  componentDidMount () {
      const politikalar = db.politikalar;
      this.setState ({ politikalar })
    }


  render () {
    return (
        <Segment basic>
        <Container>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Prosedürlerimiz</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

        <Table.Body>
            {Object.keys(this.state.politikalar).map(key => {
                const adi = this.state.politikalar[key].adi;
                const prosedurler = this.state.politikalar[key].prosedurler;
                const liste = prosedurler.map(item => <Table.Row><Table.Cell><Icon name='file outline' />{item}</Table.Cell></Table.Row>)
                return [
                          (<Table.Row><Table.Cell><Icon name='folder' /><b>{adi}</b></Table.Cell></Table.Row>),
                          (liste)
                      ]
            })}

        </Table.Body>
        </Table>
        </Container>
        </Segment>
    )

  }

}

export default Prosedurler