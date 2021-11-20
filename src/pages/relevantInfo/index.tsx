/**相关信息：服务、隐私。关于我 */
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";

function RelevantInfo() {
  const params = Taro.getCurrentInstance().router?.params;

  let text = "";

  switch (params?.type) {
    case "1":
      text = "服务信息";
      break;
    case "2":
      text = "隐私信息";
      break;
    case "3":
      text = "关于我";
      break;
  }

  Taro.setNavigationBarTitle({ title: text }); // 动态标题会有闪动效果，体感不太好

  return (
    <View>
      {params?.type === "1" && (
        <View className="textInfo">也没啥好服务的，就这样吧！</View>
      )}
      {params?.type === "2" && <View className="textInfo">没啥隐私的。</View>}
      {params?.type === "3" && (
        <View className="textInfo">
          一个热爱编程的新青年，github地址：https://github.com/Lzengp
        </View>
      )}
    </View>
  );
}

export default RelevantInfo;
