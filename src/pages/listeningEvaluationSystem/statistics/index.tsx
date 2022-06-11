import { useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import { AtTabs, AtTabsPane, AtIcon, AtAvatar } from "taro-ui";
import Line from "@/components/Line";
import SearchBoxList from "@/components/SearchBoxList";
import Taro from "@tarojs/taro";

const DataSources = new Array(10).fill("").map(() => {
  return {
    teacherName: "齐静春", // 老师名称
    topic: "2020-09-09 星期三 第一节", // 课题
    numberEvaluators: 23,
    totalAverageScore: 96.62,
  };
});

const ClassRankingData = new Array(5).fill("").map((_, index) => {
  return {
    name: "齐静春", // 名字
    times: 200 + index, // 次数
  };
});

const AverageScoreRankingData = new Array(5).fill("").map((_, index) => {
  return {
    name: "齐静春", // 名字
    times: 85.32 + index, // 次数
  };
});

const RankIcon = {
  "0": "iconfont diyimingStyle",
  "1": "iconfont diermingStyle",
  "2": "iconfont disanmingStyle",
};

/**被评 */
const BeRatedClass = () => {
  const tabList = [{ title: "数据概览" }, { title: "评课记录" }];
  const [currentTabKey, setCurrentTabKey] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>(""); // 搜索框里面的值

  return (
    <View className="beRatedClassWarp">
      <AtTabs
        current={currentTabKey}
        tabList={tabList}
        onClick={setCurrentTabKey}
      >
        <AtTabsPane current={currentTabKey} index={0}>
          <View className="evaluteTimeContent">
            <View className="totalEvaluateTimes">
              <View style={{ color: "#ff3366", fontSize: "30px" }}>
                35685次
              </View>
              <View style={{ color: "#9e9e9c" }}>总评课次数</View>
            </View>
            <View className="allItemEvaluateTimes">
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>2018年</View>
                <View>6952次</View>
              </View>
              <View
                style={{ width: "1px", height: "50px", background: "#f6f6f6" }}
              />
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>2019年</View>
                <View>7523次</View>
              </View>
              <View
                style={{ width: "1px", height: "50px", background: "#f6f6f6" }}
              />
              <View className="itemEvaluateTimes">
                <View style={{ color: "#9e9e9c" }}>2020年</View>
                <View>+5239次</View>
              </View>
            </View>
            {currentTabKey === 0 && <Line />}
            <View className="evaluteTimeResult">
              共计对523位老师发起35685次评课！
              <AtIcon
                value="chevron-right"
                size="23"
                color="#b5b5b5"
                onClick={() => {
                  setCurrentTabKey(1);
                }}
              ></AtIcon>
            </View>
          </View>
          <View
            style={{
              background: "#FFF",
              padding: "1rem",
              marginBottom: "0.6rem",
            }}
          >
            <Text style={{ fontWeight: 600 }}>评课排行榜</Text>
            {ClassRankingData.map((item, index) => {
              return (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "4rem",
                    marginTop: index == 0 ? "1rem" : "0",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Text
                      style={{
                        color: [0, 1, 2].includes(index) ? "#FFF" : "#000",
                        position: "absolute",
                        left: "0.5rem",
                        top: "0.8rem",
                        fontSize: "12px",
                      }}
                    >
                      {index + 1}
                    </Text>
                    {[0, 1, 2].includes(index) && (
                      <AtIcon
                        prefixClass="icon"
                        value="zubiepaihang-diyiming"
                        size="21"
                        className={RankIcon[index.toString()]}
                      />
                    )}
                    {![0, 1, 2].includes(index) && (
                      <Text
                        style={{
                          borderRadius: "50%",
                          background: "#efefef",
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />
                    )}

                    <AtAvatar
                      circle
                      image="https://joeschmoe.io/api/v1/random"
                      className="myAtAvatarDisan"
                    />
                    {item.name}
                  </View>
                  {item.times}次
                </View>
              );
            })}
            <View
              style={{
                color: "#b2b2b2",
                textAlign: "center",
                paddingTop: "1rem",
              }}
            >
              查看更多
            </View>
          </View>
          <View
            style={{
              background: "#FFF",
              padding: "1rem",
              marginBottom: "0.6rem",
            }}
          >
            <Text style={{ fontWeight: 600 }}>被评课排行榜</Text>
            {ClassRankingData.map((item, index) => {
              return (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "4rem",
                    marginTop: index == 0 ? "1rem" : "0",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Text
                      style={{
                        color: [0, 1, 2].includes(index) ? "#FFF" : "#000",
                        position: "absolute",
                        left: "0.5rem",
                        top: "0.8rem",
                        fontSize: "12px",
                      }}
                    >
                      {index + 1}
                    </Text>
                    {[0, 1, 2].includes(index) && (
                      <AtIcon
                        prefixClass="icon"
                        value="zubiepaihang-diyiming"
                        size="21"
                        className={RankIcon[index.toString()]}
                      />
                    )}
                    {![0, 1, 2].includes(index) && (
                      <Text
                        style={{
                          borderRadius: "50%",
                          background: "#efefef",
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />
                    )}

                    <AtAvatar
                      circle
                      image="https://joeschmoe.io/api/v1/random"
                      className="myAtAvatarDisan"
                    />
                    {item.name}
                  </View>
                  {item.times}
                </View>
              );
            })}
            <View
              style={{
                color: "#b2b2b2",
                textAlign: "center",
                paddingTop: "1rem",
              }}
            >
              查看更多
            </View>
          </View>
          <View
            style={{
              background: "#FFF",
              padding: "1rem",
              marginBottom: "0.6rem",
            }}
          >
            <Text style={{ fontWeight: 600 }}>平均分排行榜</Text>
            {AverageScoreRankingData.map((item, index) => {
              return (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "4rem",
                    marginTop: index == 0 ? "1rem" : "0",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Text
                      style={{
                        color: [0, 1, 2].includes(index) ? "#FFF" : "#000",
                        position: "absolute",
                        left: "0.5rem",
                        top: "0.8rem",
                        fontSize: "12px",
                      }}
                    >
                      {index + 1}
                    </Text>
                    {[0, 1, 2].includes(index) && (
                      <AtIcon
                        prefixClass="icon"
                        value="zubiepaihang-diyiming"
                        size="21"
                        className={RankIcon[index.toString()]}
                      />
                    )}
                    {![0, 1, 2].includes(index) && (
                      <Text
                        style={{
                          borderRadius: "50%",
                          background: "#efefef",
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                      />
                    )}

                    <AtAvatar
                      circle
                      image="https://joeschmoe.io/api/v1/random"
                      className="myAtAvatarDisan"
                    />
                    {item.name}
                  </View>
                  {item.times}次
                </View>
              );
            })}
            <View
              style={{
                color: "#b2b2b2",
                textAlign: "center",
                paddingTop: "1rem",
              }}
            >
              查看更多
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={currentTabKey} index={1}>
          <SearchBoxList
            dataSources={DataSources}
            onClickItem={(item) => {
              console.log(item);
              Taro.navigateTo({
                url: `/pages/listeningEvaluationSystem/statistics/components/recordView/index`,
              });
            }}
            onSearchChange={(value) => {
              console.log(value);
              setInputValue(value);
            }}
            searchValue={inputValue}
            placeholder="搜索课题、任课教师"
          />
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

export default BeRatedClass;
