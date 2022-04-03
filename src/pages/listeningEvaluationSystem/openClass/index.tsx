import { useState } from "react";
import { View } from "@tarojs/components";
import "./index.scss";
import { AtTabs, AtTabsPane, AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import SearchBoxList from "@/components/SearchBoxList";

const DataSources = new Array(10).fill("").map(() => {
  return {
    teacherName: "齐静春", // 老师名称
    topic: "为了忘却的纪念", // 课题
    teachingSubjects: "语文", // 任教科目
    ageClass: "高三2班", // 年纪班级
    teachingTime: "2020-09-03 星期四 第6节", // 授课时间
    teachingPlace: "教学楼东楼3层302", // 授课地点
    // isRead: true, // 是否已读
    // topicType: '公开课', // 课题类型 （公开课）
    evaluatedNum: 33, // 已经评课人数
  };
});

/**公开课 */
const openClass = () => {
  const tabList = [{ title: "全部公开课" }, { title: "我的公开课" }];
  const [currentTabKey, setCurrentTabKey] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(""); // 搜索框里面的值

  const addOpenClass = () => {
    Taro.navigateTo({
      url: `/pages/listeningEvaluationSystem/openClass/components/addOpenClass/index`,
    });
  };

  return (
    <View className="openClassWarp">
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
            placeholder="搜索课题"
          />
        </AtTabsPane>
      </AtTabs>
      <AtIcon
        prefixClass="icon"
        value="xinzeng"
        size="50"
        className="iconfont addOpenClassIcon"
        onClick={() => {
          addOpenClass();
        }}
      />
    </View>
  );
};

export default openClass;
