import HomeScreen from '@screens/Home.screen';
import AnimationsScreen from '@screens/Animations.screen';
import HeadingsScreen from '@screens/Headings.screen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Animations: {screen: AnimationsScreen},
  Headings: {screen: HeadingsScreen},
}, {
  headerMode: 'none',
});

const App = createAppContainer(MainNavigator);

// export default App;
export {default} from '../storybook';
