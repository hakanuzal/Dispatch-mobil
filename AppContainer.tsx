import { createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import {Login,Home} from './Views'



var navi = createStackNavigator({
    Login:{
        screen: Login,
        navigationOptions:{
            headerShown:false
        }
    },
    Home:{
        screen: Home,
        navigationOptions:{
            headerTitle:"Ev"
        }
    }
});

export default createAppContainer(navi)
