import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Button, Flex, WhiteSpace, WingBlank,Icon } from '@ant-design/react-native';
import indexModel from './models/indexModel';
import demo from './models/demo';
import { Provider } from 'react-redux';
import { create } from 'dva-core';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { stackPageData } from './routes/index';

const Stack = createStackNavigator();

const models = [indexModel,demo];
const app = create();  // 创建dva实例，可传递配置参数。https://dvajs.com/api/#app-dva-opts
models.forEach((o) => { 
  // 装载models对象
  app.model(o);
});
app.start(); // 实例初始化
const store = app._store; // 获取redux的store对象供react-redux使用
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationContainer>
          <Stack.Navigator>
            {stackPageData.map((props, index) => {
              return (
                <Stack.Screen
                  key={index}
                  {...props}
                  options={{
                      header: () => null //去掉头部显示
                    }}
                />
              )
            })}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.lighter,
  }
});

export default App;
