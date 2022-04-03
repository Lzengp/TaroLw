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
    topic: "为了忘却的纪念", // 课题
    teachingSubjects: "语文", // 任教科目
    ageClass: "高三2班", // 年纪班级
    teachingTime: "2020-09-03 星期四 第6节", // 授课时间
    teachingPlace: "教学楼东楼3层302", // 授课地点
    isRead: true, // 是否已读
    topicType: "公开课", // 课题类型 （公开课）
    // evaluatedNum: 33, // 已经评课人数
  };
});

/**评课 */
const EvaluationClass = () => {
  const tabList = [{ title: "评课记录" }, { title: "评课统计" }];
  const [currentTabKey, setCurrentTabKey] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(""); // 搜索框里面的值

  const addOpenClass = () => {
    Taro.navigateTo({
      url: `/pages/listeningEvaluationSystem/openClass/components/addOpenClass/index`,
    });
  };

  return (
    <View className="evaluationClassWarp">
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
                <View style={{ color: "#9e9e9c" }}>2018年</View>
                <View>0次</View>
              </View>
              <View
                style={{ width: "1px", height: "50px", background: "#f6f6f6" }}
              />
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>2019年</View>
                <View>37次</View>
              </View>
              <View
                style={{ width: "1px", height: "50px", background: "#f6f6f6" }}
              />
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>2020年</View>
                <View>+68次</View>
              </View>
            </View>
            {currentTabKey === 1 && <Bar />}
            {/* <Bar /> */}
            <View className="evaluteTimeResult">您的评课次数超过85%教师！</View>
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
                <View style={{ paddingTop: "0.3rem" }}>刘英杰</View>
                <View style={{ color: "#bebfc1" }}>12次</View>
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
                  张羽茜
                </View>
                <View style={{ color: "#fcb27b" }}>26次</View>
              </View>
              <View className="resAvatar">
                <AtAvatar
                  circle
                  image="https://joeschmoe.io/api/v1/random"
                  className="myAtAvatarDisan"
                />
                <View className="resNumberDisan">3</View>
                <View style={{ paddingTop: "0.3rem" }}>范莹莹</View>
                <View style={{ color: "#bebfc1" }}>12次</View>
              </View>
            </View>
            <View className="evaluteTeacherResult">您共评价了86教师！</View>
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

export default EvaluationClass;
