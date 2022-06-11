import { View, Text } from "@tarojs/components";
import React, { useState } from "react";
import { AtTabs, AtTabsPane } from "taro-ui";
import "./index.scss";

const RecordView = () => {
  React.useEffect(() => {
    /**@ts-ignore */
    wx.setNavigationBarTitle({ title: "查看" });
  }, []);

  const tabList = [{ title: "一级指标平均分" }, { title: "评课人列表" }];
  const [currentTabKey, setCurrentTabKey] = useState<number>(0);

  return (
    <View className="recordView">
      <View style={{ padding: "1.5rem", background: "#fff" }}>
        <Text style={{ fontSize: "20px" }}>2020-09-09 星期三 第一节</Text>
        <View
          style={{
            color: "#b7b7b7",
            fontSize: "15px",
          }}
        >
          <View style={{ padding: "0.5rem 0" }}>评课人数：23</View>
          <View>总平均分：96.62</View>
        </View>
        <AtTabs
          current={currentTabKey}
          tabList={tabList}
          onClick={setCurrentTabKey}
        >
          <AtTabsPane current={currentTabKey} index={0}>
              xxxxxxx
          </AtTabsPane>
          <AtTabsPane current={currentTabKey} index={1}>
              xxxxxxx
          </AtTabsPane>
        </AtTabs>
      </View>
    </View>
  );
};

export default RecordView;
