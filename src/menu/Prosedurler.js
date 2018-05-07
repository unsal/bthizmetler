import React, { Component } from 'react'
import { Segment, Container, List } from 'semantic-ui-react'
import db from '../data/prosedurler'

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
        <Segment basic padded="very">
        <Container>
        <List ordered>
            {Object.keys(this.state.politikalar).map(key => {
                const adi = this.state.politikalar[key].adi;
                const prosedurler = this.state.politikalar[key].prosedurler;
                const liste = prosedurler.map(item => <List.Item as='a'>{item}</List.Item>)
                return <List.Item><b><a>{adi}</a></b><List.List>{liste}</List.List></List.Item>
            })}
            </List>
        </Container>
        </Segment>
    )

  }

}

export default Prosedurler