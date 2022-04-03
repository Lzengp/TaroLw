import { useState } from "react";
import { View } from "@tarojs/components";
import "./index.scss";
import OpenClass from "./openClass";
import EvaluationClass from "./evaluationClass";
import BeRated from "./beRated";
import SetUp from "./setUp";
import Statistics from "./statistics";

import { AtTabBar } from "taro-ui";

const TitleName = {
  0: "公开课",
  1: "评课",
  2: "被评",
  3: "统计",
  4: "设置",
};

const ListeningEvaluationSystem = () => {
  const [currentTabBar, setCurrentTabBar] = useState<number>(0);
  const [currentBarTitle, setCurrentBarTitle] = useState<string>("公开课");
  wx.setNavigationBarTitle({ title: currentBarTitle });

  return (
    <View className="classSystemWrap">
      <View className="appContent">
        {currentTabBar === 0 && <OpenClass />}
        {currentTabBar === 1 && <EvaluationClass />}
        {currentTabBar === 2 && <BeRated />}
        {currentTabBar === 3 && <Statistics />}
        {currentTabBar === 4 && <SetUp />}
      </View>
      <View style={{ height: "1rem" }} />
      <AtTabBar
        fixed
        tabList={[
          {
            title: "公开课",
            iconPrefixClass: "iconfont icon",
            iconType: "yonhu",
          },
          {
            title: "评课",
            iconPrefixClass: "iconfont icon",
            iconType: "xiezi",
            text: "100",
            max: 99,
          },
          {
            title: "被评",
            iconPrefixClass: "iconfont icon",
            iconType: "pinglun",
            dot: true,
          },
          {
            title: "统计",
            iconPrefixClass: "iconfont icon",
            iconType: "tongji",
          },
          {
            title: "设置",
            // iconPrefixClass: "iconfont icon",
            iconType: "equalizer",
          },
        ]}
        onClick={(e) => {
          setCurrentTabBar(e);
          setCurrentBarTitle(TitleName[e]);
        }}
        current={currentTabBar}
      />
    </View>
  );
};

export default ListeningEvaluationSystem;
