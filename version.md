<!--
 * @Description: 版本更新说明
 * @LastEditors: HL
 * @LastEditTime: 2020-07-07 14:40:07
 -->
# 1.0.0
### 2.13.201
1. modify table scrollEvent 增加了一个表格的scroll对外事件tableBodyScroll 
2. and add chinese2 for input by HL 增加了Input输入框的一个属性doubleCodeable,中文字符算两字节
### 2.13.201
1. table模块:增加了一个noCalcScrollX:控制是否计算横向滚动条的高度,用于生成fix header的高度
2. table模块:增加了一个emptyHidden:用于控制无数据时是否隐藏表体
3. table模块:修改了表格没有数据顶部全选disabled,但是可以选择的一个bug,增加了固定表头的全选事件
### 2.13.202
1. tab模块:增加了一个trigger的支持,可传:hover/click(默认),触发切换的行为
2. tab模块:增加了一个tab-hover事件,tab 被选中时触发 参数为被选中的标签 tab 实例
### 2.13.205
1. slider模块:增加了一个对stepList的支持,支持传入一个数组作为散点
### 2.13.206
1. input模块:增加了一个doubleCodeable和doubleCode的支持

# 1.0.1
### 2.13
1. select组件: 增加了一个配置项showMultipleTag,用来控制多选结果标签是否展示