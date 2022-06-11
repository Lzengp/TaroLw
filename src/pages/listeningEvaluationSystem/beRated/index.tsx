import { useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import { AtTabs, AtTabsPane, AtIcon, AtAvatar } from "taro-ui";
import Taro from "@tarojs/taro";
import SearchBoxList from "@/components/SearchBoxList";
import Bar from "@/components/Bar";

const DataSources = new Array(10).fill("").map(() => {
  return {
    teacherName: "齐静春", // 老师名称
    topic: "2020-09-09 星期三 第一节", // 课题
    numberEvaluators: 23,
    totalAverageScore: 96.62,
  };
});

/**被评 */
const BeRatedClass = () => {
  const tabList = [{ title: "被评记录" }, { title: "被评统计" }];
  const [currentTabKey, setCurrentTabKey] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(""); // 搜索框里面的值

  const addOpenClass = () => {
    Taro.navigateTo({
      url: `/pages/listeningEvaluationSystem/openClass/components/addOpenClass/index`,
    });
  };

  return (
    <View className="beRatedClassWarp">
      <AtTabs
        current={currentTabKey}
        tabList={tabList}
        onClick={setCurrentTabKey}
      >
        <AtTabsPane current={currentTabKey} index={0}>
          <SearchBoxList
            dataSources={DataSources}
            onClickItem={(item) => {
              console.log(item);
            }}
            onSearchChange={(value) => {
              console.log(value);
              setInputValue(value);
            }}
            searchValue={inputValue}
            placeholder="搜索课题、任课教师"
          />
        </AtTabsPane>
        <AtTabsPane current={currentTabKey} index={1}>
          <View className="evaluteTimeContent">
            <View className="totalEvaluateTimes">
              <View style={{ color: "#ff3366", fontSize: "30px" }}>105次</View>
              <View style={{ color: "#9e9e9c" }}>总评课次数</View>
            </View>
            <View className="allItemEvaluateTimes">
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>总评价分</View>
                <View style={{ color: "#3296fb" }}>96.72</View>
              </View>
              <View
                style={{ width: "1px", height: "50px", background: "#f6f6f6" }}
              />
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>同学科排名</View>
                <View style={{ color: "#3296fb" }}>12 / 58</View>
              </View>
              <View
                style={{ width: "1px", height: "50px", background: "#f6f6f6" }}
              />
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>全校排名</View>
                <View style={{ color: "#3296fb" }}>27 / 369</View>
              </View>
            </View>
            {currentTabKey === 1 && <Bar labelShow={true} />}
            <View className="evaluteTimeResult">您的被评课次数超过78%教师！</View>
          </View>
          <View className="evaluteTeacherContent">
            <View className="allResAvatar">
              <View className="resAvatar">
                <AtAvatar
                  circle
                  image="https://joeschmoe.io/api/v1/random"
                  className="myAtAvatarDier"
                />
                <View className="resNumberDier">2</View>
                <View style={{ paddingTop: "0.3rem" }}>裴南苇</View>
                <View style={{ color: "#bebfc1" }}>15次</View>
              </View>
              <View className="resAvatar">
                <AtIcon
                  prefixClass="icon"
                  value="zubiepaihang-diyiming"
                  size="30"
                  className="iconfont diyimingStyle"
                />
                <AtAvatar
                  circle
                  image="https://joeschmoe.io/api/v1/random"
                  className="myAtAvatarDiyi"
                />
                <View className="resNumber">1</View>
                <View style={{ color: "#fcb27b", paddingTop: "0.3rem" }}>
                  齐静春
                </View>
                <View style={{ color: "#fcb27b" }}>32次</View>
              </View>
              <View className="resAvatar">
                <AtAvatar
                  circle
                  image="https://joeschmoe.io/api/v1/random"
                  className="myAtAvatarDisan"
                />
                <View className="resNumberDisan">3</View>
                <View style={{ paddingTop: "0.3rem" }}>陈平安</View>
                <View style={{ color: "#bebfc1" }}>11次</View>
              </View>
            </View>
            <View className="evaluteTeacherResult">
                您总共被52位教师评价！
                <AtIcon value='chevron-right' size='23' color='#b5b5b5'></AtIcon>
              </View>
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

export default BeRatedClass;
