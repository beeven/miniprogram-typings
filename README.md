# 微信小程序定义文件-改

扩展完善

* [x] `event` 相关类型声明
* [x] `console` 类型定义(去除dom依赖)
* [x] `wxs` 类型定义 
* [x] `requirePlugin`
* App
    * [x] app 事件参数自动推断
* Page
    * [x] this.setData() 无需感叹号，强类型验证
    * [x] this.route 无感叹号
    * [x] 补充 this.getTabBar() 支持 (含类型安全检查、泛型参数)
    * [x] Page.onLoad 支持undefined
    * [x] Page.onLoad / onShareAppMessage / onPageScroll / onResize 等参数自动绑定
* Component
    * [x] properties 完整定义支持和类型绑定
    * [x] data 绑定 properties 数据
    * [x] observer/observers this 绑定(支持data/properties/methods调用)
    * [x] lifetimes/pageLifetimes/relations/methods 完整this绑定(支持data/properties/methods调用)
    * [x] setData 强类型校验和自动提示
    * [x] this.getTabBar() 支持类型安全检查、泛型参数
Fixed 修复官方的错误定义
* [x] fix wx.AuthSetting 类型错误
* [x] fix chooseimage
* [x] fix choosefile
* [x] fix component 定义
* [x] fix page 定义错误
* [x] fix wx.OnStopCallbackResult (RecorderManager)
* [x] fix wx.Color 定义错误
* [x] fix 支持 canvasContext.setFillStyle() 传入 wx.CanvasGradient 类型
* [x] fix canvasContext.drawImage() 可选 3/5/9 个参数
* [x] fix relativeToViewport()
* [x] fix setTimeout/setInterval rest 参数
* [x] fix innerAudio onerror/offerror callback

> [English version](./README-en.md)

[![](https://img.shields.io/npm/v/@dragongate/miniprogram-api-typings.svg?style=flat)](https://www.npmjs.com/package/miniprogram-api-typings)
[![](https://img.shields.io/github/license/wechat-miniprogram/api-typings.svg)](https://github.com/wechat-miniprogram/miniprogram-api-typings)

微信小程序 API 的 TypeScript 类型定义文件

## 安装

通过 npm 安装：
```bash
# 安装对应最新基础库的定义文件
npm install @dragongate/miniprogram-api-typings -D
```

或者通过版本号指定一个基础库版本：
```bash
# 安装对应基础库版本 2.4.1 的定义文件
npm install @dragongate/miniprogram-api-typings@version -D
```


## 版本

基础库版本|npm 版本|命令
-|-|-
[v2.6.5](https://developers.weixin.qq.com/miniprogram/dev/framework/release.html#v265-20190402) | [2.6.5-2](https://www.npmjs.com/package/miniprogram-api-typings/v/2.6.5-2) | `npm install miniprogram-api-typings@2.6.5-2`
[v2.4.2](https://developers.weixin.qq.com/miniprogram/dev/framework/release.html#v242-20181204)|[2.4.2-2](https://www.npmjs.com/package/miniprogram-api-typings/v/2.4.2-2)|`npm install miniprogram-api-typings@2.4.2-2`
[v2.4.1](https://developers.weixin.qq.com/miniprogram/dev/framework/release.html#v241-20181121)|[2.4.1](https://www.npmjs.com/package/miniprogram-api-typings/v/2.4.1)|`npm install miniprogram-api-typings@2.4.1`
[v2.4.0](https://developers.weixin.qq.com/miniprogram/dev/framework/release.html#v240-20181105)|[2.4.0-1](https://www.npmjs.com/package/miniprogram-api-typings/v/2.4.0-1)|`npm install miniprogram-api-typings@2.4.0-1`


## 贡献

> PR Welcomed!

Supported by Microsoft.
