/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/redux/store';
// //import SplashScreen from './Screens/SplashScreen';
// import SignInScreen from './Screens/SignInScreen';
//import SignUpScreen from './src/Screens/SignUpScreen';
// import ForgetPasswordScreen from './src/Screens/ForgetPasswordScreen';
import Navigation from './src/Navigation/Navigation';
const KK=()=>(
<Provider store={store}><PaperProvider><Navigation/></PaperProvider></Provider>
)
AppRegistry.registerComponent(
    appName, 
    () => KK

);
