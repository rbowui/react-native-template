import React, { useEffect} from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { homeTabData } from '../../routes/homeTab';
import { connect } from 'react-redux';

const BottomTabs = createBottomTabNavigator();

const DashboardScreen = (props) => {
  console.log('groupTypeData', props.groupTypeData)
  useEffect(() => {
    props.dispatch({
      type: 'demo/groupType'
    });
 }, []);
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <BottomTabs.Navigator>
        {homeTabData.map((props, idx) => {
          return (
            <BottomTabs.Screen key={idx} {...props} />
          )
        })}
      </BottomTabs.Navigator>
    </React.Fragment>
  )
}

// export default DashboardScreen;
export default connect(({ indexModel, demo }) => {
  return {
    // name: indexModel.name,
    groupTypeData: demo.groupTypeData,
  };
})(DashboardScreen);
