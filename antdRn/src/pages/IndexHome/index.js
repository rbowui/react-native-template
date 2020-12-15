import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { Icon, List } from '@ant-design/react-native';
// import { outlineGlyphMap } from '@ant-design/icons-react-native/lib/outline';
import { connect } from 'react-redux';
const Item = List.Item;

const DashboardScreen = (props) => {
  console.log('props', props.groupTypeData)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <List renderHeader={'带缩略图'}>
          {props.groupTypeData.map(item =>
            <Item key={item.id} thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"  arrow="horizontal">
              {item.aliasName}
           </Item>
          )}
          {/* {props.groupTypeData.map(item =>
          <Item
            extra={
              <Image
                source={{
                  uri:
                    'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{ width: 29, height: 29 }}
              />
            }
            arrow="horizontal"
          >
            {item.aliasName}
          </Item>
           )} */}
        </List>
      </View>
    </SafeAreaView>
  )
}

export default connect(({ demo }) => {
  return {
    groupTypeData: demo.groupTypeData,
  };
})(DashboardScreen);

// export default class MyScreen extends Component {
//   render() {
//     const { navigation } = this.props;
//     return (
//       <SafeAreaView style={{flex:1}}>
//         <View style={{ flex: 1 }}>
//         <List renderHeader={'带缩略图'}>
//           <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
//             thumb
//           </Item>
//           {/* <Item
//             thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
//             arrow="horizontal"
//           >
//             thumb
//           </Item> */}
//           {/* <Item
//             extra={
//               <Image
//                 source={{
//                   uri:
//                     'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
//                 }}
//                 style={{ width: 29, height: 29 }}
//               />
//             }
//             arrow="horizontal"
//           >
//             extra为Image
//           </Item> */}
//         </List>
//           {/* <List
//             flat={true}
//             data={[
//               { title: '企业开票' },
//               { title: '我的熟车' },
//               { title: '设置', onPress: () => navigation.navigate('MyHomeSetting')  },
//               { title: '退出登录', onPress: () => navigation.replace('SignIn') },
//             ]}
//             renderItem={({ item, index }) => {
//               return (
//                 <List.Item
//                   key={index}
//                   extra={<Icon name="right" fill="#abb0b5" size={14} />}
//                   size="large"
//                   paddingLeft={15}
//                   style={{ borderBottomWidth: 0, }}
//                   onPress={item.onPress || null}
//                 >
//                   <View>
//                     <Text>{item.title}</Text>
//                   </View>
//                 </List.Item>
//               )
//             }}
//           /> */}
//         </View>
//       </SafeAreaView>
//     );
//   }
// }