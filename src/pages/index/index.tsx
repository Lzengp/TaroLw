import { Component } from "react";
import { View, Text, Button, Navigator } from "@tarojs/components";
import "./index.scss";
import Taro from "@tarojs/taro";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <View className="myFrist">这是我的第一个小程序项目</View>
        <Button
          type="warn"
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/action/index",
            });
          }}
        >
          跳转
        </Button>
      </View>
    );
  }
}
