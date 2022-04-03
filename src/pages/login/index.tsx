import { useCallback, useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import Taro, {
  useDidHide,
  useDidShow,
  usePageScroll,
  usePullDownRefresh,
  useReachBottom,
  useReady,
} from "@tarojs/taro";
import { AtForm, AtInput, AtButton, AtAvatar } from "taro-ui";

const Login = () => {
  const [accountNumber, setAccountNumber] = useState<any>("");
  const [password, setPassword] = useState<any>("");

  /**
   * 等同于页面的 onReady 生命周期钩子。
   * 从此生命周期开始可以使用 createCanvasContext 或 createSelectorQuery 等 API 访问小程序渲染层的 DOM 节点。
   */
  useReady(() => {
    console.log("useReady");
  });

  /**页面显示/切入前台时触发。等同于 componentDidShow 页面生命周期钩子。 */
  useDidShow(() => {
    console.log("componentDidShow");
  });

  /**页面隐藏/切入后台时触发。等同于 componentDidHide 页面生命周期钩子。 */
  useDidHide(() => {
    console.log("componentDidHide");
  });

  /**监听用户下拉动作。等同于 onPullDownRefresh 页面生命周期钩子。 */
  usePullDownRefresh(() => {
    console.log("onPullDownRefresh");
  });

  /**监听用户上拉触底事件。等同于 onReachBottom 页面生命周期钩子。 */
  useReachBottom(() => {
    console.log("onReachBottom");
  });

  /**  监听用户滑动页面事件。等同于 onPageScroll 页面生命周期钩子。*/

  usePageScroll((res) => {
    console.log(res.scrollTop);
  });

  const onSubmit = useCallback(() => {
    console.log(password, accountNumber);
    if (!accountNumber) {
      return Taro.showToast({
        title: "请输入账号",
        icon: "none",
        duration: 2000,
      });
    }
    if (!password) {
      return Taro.showToast({
        title: "请输入密码",
        icon: "none",
        duration: 2000,
      });
    }
    Taro.showLoading();
    setTimeout(() => {
      if (accountNumber !== "admin" || password !== "1") {
        return Taro.showToast({
          title: `账号或密码错误(账号：admin, 密码：1)`,
          icon: "none",
          duration: 2000,
        });
      }
      Taro.hideLoading();
      Taro.showToast({
        title: "登录成功",
        icon: "success",
        duration: 2000,
      });
      // 跳转到目的页面，打开新页面
      Taro.navigateTo({
        // url: `/pages/main/index`,
        url: '/pages/listeningEvaluationSystem/index',
      });
    }, 1000);
  }, [accountNumber, password]);

  /**相关相信点击事件 */
  const relevantInfoClick = useCallback((type: string) => {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: `/pages/relevantInfo/index?type=${type}`,
    });
  }, []);

  return (
    <View className="loginWarp">
      {/**头像 */}
      <View className="avatarsImg">
        <AtAvatar
          circle
          image="https://avatars.githubusercontent.com/u/39240494?v=4"
          size="large"
        ></AtAvatar>
      </View>
      {/**账号密码 */}
      <AtForm>
        <AtInput
          name="accountNumber"
          title="账号"
          type="text"
          placeholder="请输入账号"
          value={accountNumber}
          onChange={setAccountNumber}
        />
        <AtInput
          name="password"
          title="密码"
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={setPassword}
        />
        <AtButton className="signInBtn" onClick={onSubmit} type="primary">
          登录
        </AtButton>
      </AtForm>
      <View className="relevantInfo">
        <Text onClick={() => relevantInfoClick("1")}>服务</Text>
        <Text className="privacy" onClick={() => relevantInfoClick("2")}>
          隐私
        </Text>
        <Text onClick={() => relevantInfoClick("3")}>关于我</Text>
      </View>
    </View>
  );
};

export default Login;
