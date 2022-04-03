# TaroLw
taro框架开发微信小程序

## 启动项目
npm run dev:weapp （将会监听文件修改）
具体请参考[taro教程](https://taro-docs.jd.com/taro/docs/GETTING-STARTED)

## [小程序如何使用第三方图标](https://www.cnblogs.com/HGNET/p/15546431.html)
 [iconfont地址](https://www.iconfont.cn/manage/index)
 在taro中具体使用
```js
<AtIcon prefixClass='icon' value="xiaochengxu" size='30' className="iconfont addOpenClassIcon" /> 
```
iconfont中的一个图标是icon-xiaochengxu，那么在AtIcon中prefixClass就是icon，value就是xiaochengxu

其中className中的iconfont必须要写，后面的addOpenClassIcon是自定义样式名称

后续如果想添加图标，可以去iconfont把自己的图标添加到自己的项目中，然后复制最新的Unicode代码替换本项目中iconfont.wxss的@font-face

同时在文件后添加

```js
.icon-bitian:before {
  content: "\e637";
}
```

content的内容是iconfont上的Unicode后几位数, 然后重启项目就可以用新添加的图标的

## [Taro react 微信小程序中使用ECharts图表](https://blog.csdn.net/m0_45236510/article/details/122840656?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-3-122840656.pc_agg_new_rank&utm_term=taro%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BD%BF%E7%94%A8echarts&spm=1000.2123.3001.4430)

### [Echarts定制图表](https://echarts.apache.org/zh/builder.html)
微信这边限制文件大小500k，建议按需引入，亲测图表chart选柱状图，折线图，坐标系coordinate systems选直角坐标系， 组件component选标题，提示框，其它选项others勾选工具集，代码压缩，这个490KB
也可以执行以下命令进行压缩，但已经通过上面压缩过的不能再次压缩
```
npm install uglify-js -g
uglifyjs echarts.js-m-o echarts.min.js/注意：替换ec-canvas里面的文件时将echarts.min.js换回来
```
