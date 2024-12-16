import { registerRootComponent } from 'expo';

import App from './App';
import TransferPage from './TransferPage';
import TopupPage from './TopupPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import FormComponent from './form';
import TermConditionPage from './TermConditionPage';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
// registerRootComponent(TopupPage);
// registerRootComponent(TransferPage);
// registerRootComponent(LoginPage);
// registerRootComponent(RegisterPage);
// registerRootComponent(TermConditionPage);
// registerRootComponent(FormComponent);
