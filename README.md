<p align="center">
  <a href="http://rn.mobile.ant.design">
    <img width="320" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png">
  </a>
</p>

<h1 align="center">rbowui/react-native-template 脚手架</h1>

<div align="left">

rbowui/react-native-template 基于 react-native 脚手架和 rAnt Design Mobile RN 库+dva-core 数据流,支持hooks写的一个脚手架。配置了axios统一请求及拦截及路由的跳转，底部导航路由跳转，开发语言是JS。
</div>



## 📦 安装

```bash
npx react-native init myapp --template @rbowui/react-native-template

cd myapp

> 运行
yarn start
yarn ios
或者是
npx react-native run-ios

> 修改 app.json 文件
{
  "name": "myapp",
  "displayName": "myapp"
}
不修改运行会报错:A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called.

```


## 🔨 项目结构

```
.
├── mocker                            # mocker data
├── android                           # native android code
├── ios                               # native ios code
├── src                               # code directory
│   ├── components                    # 存放公共组件库代码
│   ├── models                        # models
│   ├── pages                         # 每个页面
│   ├── routes                        # 路由配置，每个页面需要引入一下
│   ├── services                      # 请求
│   ├── utils                         # 公共函数
│   ├── App.js                        # 开始界面
│   ├── config.js                     # 页面配置
│   └── global.js                     # 存全局函数
├── .eslintrc                         # eslint configuration
├── index.js                          # app entry file
└── package.json                      # This document is all you need to know about what’s required in your package.json file.

```
##  效果

![861608013478_.pic_hd.jpg](https://i.loli.net/2020/12/15/MXwRmhpNEe9Dj31.png)

##  想要自己搭建的小伙伴，可以看看我的笔记：
https://www.jianshu.com/p/ac82b369ef9a

