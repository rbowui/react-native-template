import React from 'react';
import { Icon } from '@ant-design/react-native';
import { outlineGlyphMap } from '@ant-design/icons-react-native/lib/outline';
import IndexHome from '../pages/IndexHome';
import VideoHome from '../pages/VideoHome';
import FoundHome from '../pages/FoundHome';
const { camera, compass,aliwangwang } = outlineGlyphMap;
export const homeTabData = [
  {
    name: "IndexHome",
    component: IndexHome,
    options: {
      title: '首页',
      tabBarIcon: () => {
        return <Icon name="aliwangwang" size={22} />;
      },
    }
  },
  {
    name: "VideoHome",
    component: VideoHome,
    options: {
      title: '视频',
      tabBarIcon: () => {
        return <Icon name="camera" size={22} />;
      },
    }
  },
  {
    name: "FoundHome",
    component: FoundHome,
    options: {
      title: '发现',
      tabBarIcon: () => {
        return <Icon name="compass" size={22} />;
      },
    }
  }
]