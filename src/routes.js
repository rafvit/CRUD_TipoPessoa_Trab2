import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Create from './pages/Create'
import Atualizar from './pages/Atualizar'
import Home from './pages/home'
import Listar from './pages/Listar'

const appNavigation = createStackNavigator({
    home:{
        screen: Home
    },
    create: {
    screen: Create,
  },
    atualizar: {
    screen: Atualizar,
  },
  listar: {
    screen: Listar
  },
 

},

)

const Routes = createAppContainer(appNavigation)
export default Routes