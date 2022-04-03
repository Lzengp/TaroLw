import { View, Text } from "@tarojs/components";
import { forwardRef, useImperativeHandle, useState } from "react";
import { AtButton, AtList, AtListItem } from "taro-ui";
import "./index.scss";

interface TeachingSubjectsProps {
  needConfirmButton?: boolean; // 是否需要确认按钮, 默认false
  value?: string; // 默认选择的值
  dataSource?: Array<{
    title: string;
    HighSchoolSubjects: Array<{ value: string; label: string }>;
  }>; // 数据源
  onChange?: (value: string) => void; // 改变事件
}

// 任教科目选择-组件
const TeachingSubjects = (props: TeachingSubjectsProps, ref: any) => {
  const {
    needConfirmButton = false,
    value: propsTeachingSubject,
    dataSource = [],
    onChange,
  } = props;

  const [teachingSubject, setTeachingSubject] = useState<string>(propsTeachingSubject || "");

  useImperativeHandle(ref, () => ({ setInitData, teachingSubject }));

  const setInitData = () => {
    setTimeout(() => {
      setTeachingSubject(propsTeachingSubject || '');
    }, 1000);
  }

  // 提交
  const submitTeachingSubject = () => {
    console.log("xxx");
  };

  return (
    <View className="teachingSubjectsWrap">
      {dataSource.map((item) => {
        return (
          <View>
            <Text
              style={{
                paddingLeft: "20px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {item.title}
            </Text>
            <AtList>
              {item.HighSchoolSubjects.map((item) => {
                return teachingSubject === item.value ? (
                  <View className="selectedTeachingSubject">
                    <View />
                    <AtListItem
                      title={item.label}
                      className="highSchoolSubjectsAtListItem"
                    />
                    <Text className="selectedSubjectPoint" />
                  </View>
                ) : (
                  <AtListItem
                    title={item.label}
                    onClick={() => {
                      setTeachingSubject(item.value);
                      if (onChange && typeof onChange == "function") {
                        onChange(item.value);
                      }
                    }}
                  />
                );
              })}
            </AtList>
          </View>
        );
      })}
      {needConfirmButton && (
        <View className="teachingSubjectsButton">
          <AtButton type="primary" onClick={submitTeachingSubject}>
            确定
          </AtButton>
        </View>
      )}
    </View>
  );
};

export default forwardRef(TeachingSubjects);
