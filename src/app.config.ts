export default {
  pages: [
 
    "pages/listeningEvaluationSystem/index",
    "pages/login/index",
    "pages/listeningEvaluationSystem/openClass/components/addOpenClass/index",
    "pages/listeningEvaluationSystem/statistics/components/recordView/index",
    // 'pages/listeningEvaluationSystem/index',
    "pages/main/index",
    "pages/relevantInfo/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  usingComponents: {
    //定义需要引入的第三方组件
    //1.key值指定第三方组件名字，以小写开头
    //2.value值指定第三方组件js文件的相对路径
    "ec-canvas": "./components/ec-canvas/ec-canvas",
  },
};
