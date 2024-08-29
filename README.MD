# Hi-CC魔法球：Vue2.5 示例项目
- [Hi-CC魔法球](https://gitee.com/thm1118/hi-cc-magic) 上海惠艾信息科技有限公司的前端测试覆盖率度量展示工具，通过浏览器插件方式，帮助测试人员/开发人员在测试过程中，能实时获知被测页面的代码覆盖率情况，同时反馈未被测试的代码的行号以便及时补测，是研发测试的**防漏测神器**。
- [Hi-CC魔法球](https://gitee.com/thm1118/hi-cc-magic)提供测试历史覆盖率记录，可累计当天最高覆盖率，累计近期最高覆盖率。
- [Hi-CC魔法球](https://gitee.com/thm1118/hi-cc-magic)  可通过浏览器插件部署，也支持混合移动App（企业版），更详细说明参阅 [Hi-CC魔法球](https://gitee.com/thm1118/hi-cc-magic) 的 [安装说明](https://gitee.com/thm1118/hi-cc-magic#%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%E5%A6%82%E4%BD%95%E4%B8%8B%E8%BD%BD)

| ![基本功能演示](img/hicc_magic.gif) | 
|:--:| 
| *基本功能演示: 点击图片可全屏* |

- Hi-CC魔法球 支持现代前端的三大主流框架 Vue/Anguarl/React

## 实现原理
- 前端代码在部署前需要 使用istanbul工具对代码"插桩"
- “插桩”后的代码在浏览器运行时会输出覆盖率数据，在浏览器中打开控制台F12，键入 `window.__coverage__`可看到覆盖率数据。![window.__coverage__](img/__coverage__.png)
- Hi-CC魔法球基于此数据计算并呈现。
- 在览器扩展安装后，如果 检测到`window.__coverage__`是有效存在的，则会应显示浏览器扩展的魔法球，未检测到，不会显示魔法球。

## 如何“插桩"
- 本仓库演示基于Vue2.5 框架的istanbul覆盖率插桩
  - 如需查看vue2.6 的istanbul覆盖率插桩 ，请访问[vue2.6示例](https://gitee.com/thm1118/vue2.6-hicc-magic-demo)
  - 如需查看vue3 的istanbul覆盖率插桩，请访问[vue3 示例](https://gitee.com/thm1118/vue3-hicc-magic-demo)  
  - 如需查看angular6+ 的istanbul覆盖率插桩，请访问[angular6+ 示例](https://gitee.com/thm1118/angular17-hicc-magic-demo)
  - 如需查看react 的istanbul覆盖率插桩，请访问[react17 示例](https://gitee.com/thm1118/react17-hicc-magic-demo)。
- 示例项目源自 [开源vue管理模版，集成vue和element-ui实现](https://github.com/PanJiaChen/vue-element-admin/)
- Vue2项目的构建工具链通常是vue-cli，基于webpack和babel工具链。babel有Istanbul工具的插件`babel-plugin-istanbul`。
- 在项目根目录下执行 `yarn add -D babel-plugin-istanbul` 安装该插件，成功后在`package.json`内会有该插件![plugin](img/plugin.png)
- 在babel的配置文件 `.babelrc`中配置 `babel-plugin-istanbul`, 在 `plugins`里添加 `istanbul`:
```
...
"plugins": ["transform-vue-jsx", "transform-runtime",  "istanbul"],
...
```
- 可参考 [.babelrc](.babelrc)完整实现
- 执行 `yarn run build` 或`npm run build` 构建
- 构建输出到 `dist`目录下


## 高级配置:生产环境和SIT测试环境区分
- 对生产环境输出不插桩，对development, 和sit测试环境输出插桩。`development`和`sit`的环境定义是在 环境变量配置 [config/dev.env.js](config/dev.env.js)和[config/sit.env.js](config/sit.env.js)定义，并在webpack配置中间中引用
- 在 [.babelrc](.babelrc) 内
    - 移除前面 `"plugins": ["transform-vue-jsx", "transform-runtime",  "istanbul"]` 里的 `istanbul`,这里是始终应用插件。
    - 在 `env`内，增加 名为`sit`的插件配置`istanbul`
```
...
  "plugins": ["transform-vue-jsx", "transform-runtime",],
  "env": {
    "development":{
      "plugins": ["dynamic-import-node", "istanbul"]
    },
    "sit":{
      "plugins": ["dynamic-import-node", "istanbul"]
    }
  }
```


## 项目构建
- 项目构建参照[[开源vue管理模版原说明](./vue-element-admin-README.zh-CN.md)
    - vue2.5是老旧前端，当本地node版本过高的时候: `yarn install --ignore-engines` 
- 注意：基于vue2.5老旧的大型项目构建，对前端新同学并不友好，比如node-sass等需要调用python和c++编译或者设置二进制包下载。这在vue2.6后的工具链有所改善, 用新的`sass`替换了`node-sass`.
- 如果需要快速演示，[dist](/dist/)目录是已构建好的SIT环境配置。可以用node工具`serve`或其他本地http服务工具快速启动演示,
    - `serve`命令安装 ：`yarn global add serve`
    - 在dist目录下，启动一个命令行窗口，运行 `serve`,即可开启http服务 `http://localhost:3000/`