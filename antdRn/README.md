

## Main Directory Structure

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