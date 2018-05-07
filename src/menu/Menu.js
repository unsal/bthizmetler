import React from 'react';
import { Tab } from 'semantic-ui-react';
import Hizmetler from './Hizmetler';
import SSS from './SSS';
import Ekibimiz from './Ekibimiz';
import Prosedurler from './Prosedurler';
import Projeler from './Projeler';
import Envanter from './Envanter';

const panes = [
  { menuItem: 'Hizmet Kataloğu', render: () => <Tab.Pane><Hizmetler /></Tab.Pane> },
  { menuItem: 'Projeler', render: () => <Tab.Pane><Projeler /></Tab.Pane> },
  { menuItem: 'Envanter', render: () => <Tab.Pane><Envanter /></Tab.Pane> },
  { menuItem: 'Prosedürler', render: () => <Tab.Pane><Prosedurler /></Tab.Pane> },
  { menuItem: 'Göstergeler', render: () => <Tab.Pane>Göstergeler</Tab.Pane> },
  { menuItem: 'BT', render: () => <Tab.Pane><Ekibimiz /></Tab.Pane> },
  { menuItem: 'SSS', render: () => <Tab.Pane><SSS /></Tab.Pane> }

]
const Menu = () => (
  <Tab panes={panes} />
)

export default Menu