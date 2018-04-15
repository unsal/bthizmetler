import React from 'react';
import { Tab } from 'semantic-ui-react';
import Hizmetler from './menu_hizmetler';
import SSS from './menu_sss'

const panes = [
  { menuItem: 'Hizmet Kataloğu', render: () => <Tab.Pane><Hizmetler /></Tab.Pane> },
  { menuItem: 'SSS', render: () => <Tab.Pane><SSS /></Tab.Pane> },
  { menuItem: 'Ekibimiz', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
const BTMenu = () => (
  <Tab panes={panes} />
)

export default BTMenu