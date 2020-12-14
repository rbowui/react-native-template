import React from 'react';
import { Icon,Grid } from '@ant-design/react-native';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { outlineGlyphMap } from '@ant-design/icons-react-native/lib/outline';

const Home = (props) => {
  const { alert, yuque } = outlineGlyphMap;
  const outlineData = Object.keys(outlineGlyphMap).map(item => ({
    icon: <Icon name={item} />,
    text: item,
  }));
  return (
    <View>
      <Text>你好:{props.name}</Text>
      <Text>哈哈,如此优秀的我{props.abc}</Text>
      <Button title="导航测试" />
      <Icon name={yuque} size={22} />
      <View>
        <Grid data={outlineData} columnNum={3} hasLine={false} />
      </View>
    </View>
  )
}
export default connect(({ indexModel, demo }) => {
  return {
    name: indexModel.name,
    abc: demo.abc,
  };
})(Home);