> A Vue.js 2.0 UI Toolkit for Web.

> 基于element ui 2.13.2版本
## Links
- 文档
  - [Chinese users](http://doc-ele.betterhl.com/#/zh-CN)

## Install
```shell
npm install element-ui -S
```

## Special Thanks
element ui team

## LICENSE
[MIT](LICENSE)

### 1.0.0
### table
1. modify table scrollEvent 增加了一个表格的scroll对外事件tableBodyScroll 
2. table模块:增加了一个noCalcScrollX:控制是否计算横向滚动条的高度,用于生成fix header的高度
3. table模块:增加了一个emptyHidden:用于控制无数据时是否隐藏表体
4. table模块:修改了表格没有数据顶部全选disabled,但是可以选择的一个bug,增加了固定表头的全选事件
### tab
1. tab模块:增加了一个trigger的支持,可传:hover/click(默认),触发切换的行为
2. tab模块:增加了一个tab-hover事件,tab 被选中时触发 参数为被选中的标签 tab 实例
### slider
1. slider模块:增加了一个对stepList的支持,支持传入一个数组作为散点
### input
1. input模块:增加了一个doubleCodeable和doubleCode的支持

### 1.0.1
### select
1. 支持select多选隐藏标签

### 1.0.3
### table
1. 去掉对selection列自定义表头的限制