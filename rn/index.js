/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; //修改app地址
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
