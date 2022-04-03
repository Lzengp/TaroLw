import { View, Text } from "@tarojs/components";
import { AtInput, AtIcon, AtButton, AtAvatar, AtDivider } from "taro-ui";
import "./index.scss";

interface dataSources {
  headPortrait?: string; // 头像
  teacherName: string; // 老师名称
  topic: string; // 课题
  teachingSubjects: string; // 任教科目
  ageClass: string; // 年纪班级
  teachingTime: string; // 授课时间
  teachingPlace: string; // 授课地点
  isRead?: boolean | null; // 是否已读
  topicType?: string | null; // 课题类型 （公开课）
  evaluatedNum?: number | null; // 已经评课人数
}

interface SearchBoxListProps {
  dataSources: Array<dataSources>; // 数据源
  placeholder?: string; // 搜索框提示文字
  onClickItem: (value: dataSources) => void; // 点击列表一项触发事件
  onSearchChange: (value: string) => void; // 搜索框change事件
  searchValue: string; // 搜索框值
}

/**集查询，筛选，列表项公共组件 */
const SearchBoxList = (props: SearchBoxListProps) => {
  const { dataSources, placeholder, onClickItem, onSearchChange, searchValue } =
    props;
  return (
    <View style={{ background: "#f9f9f9" }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          background: "#FFF",
        }}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f6f6f6",
            borderRadius: "1rem",
            margin: "10px",
            paddingLeft: "5px",
          }}
        >
          <AtIcon value="search" size="20" color="#5f5f5f" />
          <AtInput
            name="searchValue"
            type="text"
            placeholder={placeholder || '搜索'}
            value={searchValue}
            onChange={onSearchChange}
            className="searchAtInput"
            border={false}
            //   focus={true}
          />
        </View>
        <AtButton className="searchAtButton">
          <AtIcon size="20" value="bullet-list" />
          筛选
        </AtButton>
      </View>
      <View className="openClassContent">
        {dataSources.map((item) => {
          return (
            <View
              style={{
                marginTop: "10px",
                background: "#FFF",
                height: "14rem",
                padding: "10px 20px",
              }}
            >
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AtAvatar
                    circle
                    image="https://joeschmoe.io/api/v1/random"
                    className="myAtAvatar"
                  />
                  <Text style={{ marginLeft: "5px" }}>{item.teacherName}</Text>
                </View>
                {item.isRead === false || item.isRead === true ? (
                  <Text
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: item.isRead ? "#19be6b" : "#ff9900",
                    }}
                  />
                ) : null}
              </View>
              <AtDivider
                fontColor="#f9f9f9"
                lineColor="#f9f9f9"
                className="atDivider"
              />
              <View
                style={{
                  fontSize: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.topicType === "公开课" && (
                  <Text
                    style={{
                      fontSize: "14px",
                      color: "#6db3f9",
                      background: "#f5f5f5",
                      marginRight: "10px",
                    }}
                  >
                    {item.topicType}
                  </Text>
                )}
                {item.topic}
              </View>
              <View
                style={{
                  color: "#b7b7b7",
                  fontSize: "15px",
                  marginTop: "10px",
                  lineHeight: "25px",
                }}
                onClick={() => {
                  if (onClickItem && typeof onClickItem === "function") {
                    onClickItem(item);
                  }
                }}
              >
                <View>任教科目：{item.teachingSubjects}</View>
                <View>年纪班级：{item.ageClass}</View>
                <View>授课时间：{item.teachingTime}</View>
                <View>授课地点：{item.teachingPlace}</View>
                {item.evaluatedNum && (
                  <View>已评课人数：{item.evaluatedNum}</View>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SearchBoxList;
