import React from 'react';
import { Tab } from 'semantic-ui-react';
import Hizmetler from './menuHizmetler';
import SSS from './menuSSS';
import Ekibimiz from './menuEkibimiz';
import Prosedurler from './menuProsedurler';
import Projeler from './menuProjeler';

const panes = [
  { menuItem: 'Hizmet Kataloğu', render: () => <Tab.Pane><Hizmetler /></Tab.Pane> },
  { menuItem: 'Ekibimiz', render: () => <Tab.Pane><Ekibimiz /></Tab.Pane> },
  { menuItem: 'Projeler', render: () => <Tab.Pane><Projeler /></Tab.Pane> },
  { menuItem: 'Prosedürler', render: () => <Tab.Pane><Prosedurler /></Tab.Pane> },
  { menuItem: 'Envanter', render: () => <Tab.Pane>Envanter</Tab.Pane> },
  { menuItem: 'Göstergeler', render: () => <Tab.Pane>Göstergeler</Tab.Pane> },
  { menuItem: 'SSS', render: () => <Tab.Pane><SSS /></Tab.Pane> }

]
const BTMenu = () => (
  <Tab panes={panes} />
  // <Tab menu={{ pointing: true }} panes={panes} />
)

export default BTMenu