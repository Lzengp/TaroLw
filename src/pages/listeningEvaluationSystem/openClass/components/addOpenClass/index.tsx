import { Picker, View } from "@tarojs/components";
import React, { useState, useEffect, useRef } from "react";
import {
  AtActionSheet,
  AtActionSheetItem,
  AtButton,
  AtForm,
  AtInput,
  AtList,
  AtListItem,
} from "taro-ui";
import "./index.scss";
import {
  evaluationCriterionList,
  GenderList,
  GenderObj,
  getOpenClassTime,
  HighSchoolSubjectsList,
  HighSchoolSubjectsObj,
  TeachingGradeList,
  YesOrNoList,
} from "./const";
import Taro from "@tarojs/taro";
import TeachingSubjects from "../teachingSubjects";
import LwCustomModal from "@/components/LwCustomModal";

const iconInfo = {
  size: 12,
  color: "#ff6b6d",
  value: "bitian",
  prefixClass: "iconfont icon",
};

const addOpenClass = () => {
  React.useEffect(() => {
    /**@ts-ignore */
    wx.setNavigationBarTitle({ title: "添加" });
  }, []);

  const currentDate = new Date();
  const newTeachingTimeValue = [
    1,
    currentDate.getMonth(),
    currentDate.getDate() - 1,
    0,
  ];
  const [multiSelectorList, setMultiSelectorList] = useState<
    Array<Array<string>>
  >(new Array(4).fill([])); // 二维数组
  const [formData, setFormData] = useState<any>({
    gender: "man",
    teachingTimeValue: [
      1,
      currentDate.getMonth(),
      currentDate.getDate() - 1,
      0,
    ], // 授课时间-值, 默认当天第一节
    teachingTime: "", // 授课时间-展示
    teachingSubject: "g-yuwen", // 任教科目 默认高中-语文
    teachingGrade: 0, // 授课年级
    hideScore: "no", // 隐藏评分，默认不隐藏
    allowAnonymous: "no", // 允许匿名，默认不允许
    evaluationCriterion: "高中课堂教学评价标准", // 评价标准
  }); // form表单数据集

  const [genderOpenModal, setGenderOpenModal] = useState<boolean>(false); // 性别-弹窗
  const [teachingSubjectOpen, setTeachingSubjectOpen] =
    useState<boolean>(false); // 任教科目-弹窗
  const [evaluationCriterionOpen, setEvaluationCriterionOpen] =
    useState<boolean>(false); // 评价标准-动作面板
  const [allowAnonymousOpen, setAllowAnonymousOpen] = useState<boolean>(false); // 允许匿名-弹窗
  const [hideScoreOpen, setHideScoreOpen] = useState<boolean>(false); // 隐藏评分-弹窗

  const teachingSubjectRef = useRef<any>(); // 任教科目-实例对象

  // 初始化数据处理
  useEffect(() => {
    const currentYear = currentDate.getFullYear();
    // 获取授课时间数据
    multiSelectorList[0] = [
      (currentYear - 1).toString(),
      currentYear.toString(),
      (currentYear + 1).toString(),
    ];
    new Array(12).fill("").map((_, index) => {
      return `${index + 1}月`;
    });
    multiSelectorList[1] = new Array(12).fill("").map((_, index) => {
      return `${index + 1}月`;
    });
    multiSelectorList[2] = new Array(31).fill("").map((_, index) => {
      return `${index + 1}日`;
    });
    multiSelectorList[3] = new Array(8).fill("").map((_, index) => {
      return `第${index + 1}节`;
    });
    setMultiSelectorList(multiSelectorList);
    setFormData((item) => {
      return {
        ...item,
        teachingTime: getOpenClassTime(newTeachingTimeValue, multiSelectorList),
      };
    });
  }, []);

  const handleChange = (value: any, name: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // 提交
  const onSubmit = () => {
    console.log(formData);
    // 校验必填信息
    const { topic, instructor, teachingClass } = formData;
    if (!topic || !instructor || !teachingClass) {
      Taro.showToast({
        title: "请填写完整信息",
        icon: "none",
        duration: 2000,
      });
      return;
    }
    Taro.showLoading();
    setTimeout(() => {
      Taro.hideLoading();
      Taro.showToast({
        title: "提交成功",
        icon: "success",
        duration: 2000,
      });
    }, 1000);
  };

  // 授课时间change事件
  const multiSelectorOnChange = (e) => {
    const value = e.detail.value;
    if (!value[0]) return;
    const showTeachingTime = getOpenClassTime(value, multiSelectorList);
    setFormData({
      ...formData,
      teachingTime: showTeachingTime.toString(),
      teachingTimeValue: value,
    });
  };

  return (
    <View className="addOpenClassView">
      <AtForm className="addOpenClassAtForm">
        {/* 第一部分 */}
        <View className="openClassFormViewOne">
          <AtInput
            name="topic"
            required
            title="课题"
            type="text"
            placeholder="课题"
            value={formData.topic}
            onChange={(e) => {
              handleChange(e, "topic");
            }}
            className="myAtInput"
          />
          <AtInput
            name="instructor"
            required
            title="授课老师"
            type="text"
            placeholder="授课老师"
            value={formData.instructor}
            onChange={(e) => {
              handleChange(e, "instructor");
            }}
            className="myAtInput"
          />
          <AtListItem
            title="性别"
            arrow="right"
            onClick={() => setGenderOpenModal(true)}
            extraText={GenderObj[formData.gender]}
            iconInfo={{ value: "bitian" }}
            className="genderInputStyle"
          />
          <AtListItem
            title="任教科目"
            arrow="right"
            extraText={HighSchoolSubjectsObj[formData.teachingSubject]}
            onClick={() => setTeachingSubjectOpen(true)}
            className=""
            iconInfo={{
              size: 12,
              color: "#ff6b6d",
              value: "bitian",
              prefixClass: "iconfont icon",
            }} // 必填样式，icon实现
          />
          <Picker
            mode="selector"
            range={TeachingGradeList}
            onChange={(e) => {
              handleChange(e.detail.value, "teachingGrade");
            }}
          >
            <AtList>
              <AtListItem
                title="授课年级"
                arrow="right"
                extraText={TeachingGradeList[formData.teachingGrade]}
                iconInfo={{
                  size: 12,
                  color: "#ff6b6d",
                  value: "bitian",
                  prefixClass: "iconfont icon",
                }}
              />
            </AtList>
          </Picker>
          <AtInput
            name="teachingClass"
            border={false}
            required
            title="授课班级"
            type="text"
            placeholder="授课班级"
            value={formData.teachingClass}
            onChange={(e) => handleChange(e, "teachingClass")}
            className="myAtInput"
          />
          <Picker
            mode="multiSelector"
            range={multiSelectorList}
            onChange={multiSelectorOnChange}
            value={formData.teachingTimeValue}
          >
            <AtList>
              <AtListItem
                title="授课时间"
                arrow="right"
                extraText={formData.teachingTime}
                iconInfo={{ ...iconInfo }}
              />
            </AtList>
          </Picker>
          <AtInput
            name="teachingPlace"
            title="授课地点"
            type="text"
            placeholder="授课地点"
            value={formData.teachingPlace}
            onChange={(e) => handleChange(e, "teachingPlace")}
            className="myAtInput spacingInputTitle"
          />
          <AtInput
            name="conferenceDddress"
            title="会议地址"
            type="text"
            placeholder="会议地址"
            value={formData.conferenceDddress}
            onChange={(e) => handleChange(e, "conferenceDddress")}
            className="myAtInput spacingInputTitle"
          />
        </View>

        {/* 第二部分 */}
        <View className="openClassFormViewOne openClassFormViewTwo">
          <AtListItem
            title="评价标准"
            arrow="right"
            extraText={formData.evaluationCriterion}
            onClick={() => setEvaluationCriterionOpen(true)}
            iconInfo={{ ...iconInfo }}
          />

          <AtListItem
            title="允许匿名"
            arrow="right"
            extraText={
              YesOrNoList.find((item) => formData.allowAnonymous == item.value)
                ?.label
            }
            onClick={() => setAllowAnonymousOpen(true)}
            iconInfo={{ ...iconInfo }}
          />
          <AtListItem
            title="隐藏评分"
            arrow="right"
            extraText={
              YesOrNoList.find((item) => formData.hideScore == item.value)
                ?.label
            }
            onClick={() => setHideScoreOpen(true)}
            iconInfo={{ ...iconInfo }}
          />
        </View>

        <AtButton type="primary" onClick={onSubmit}>
          提交
        </AtButton>
      </AtForm>
      {/* 弹窗部分 */}
      <LwCustomModal
        type="radio"
        isOpened={genderOpenModal}
        title="性别"
        options={GenderList}
        value={formData.gender}
        onClose={setGenderOpenModal}
        onClick={(e) => {
          setGenderOpenModal(false);
          handleChange(e, "gender");
        }}
      />
      <LwCustomModal
        isOpened={teachingSubjectOpen}
        title="任教科目"
        onClose={setTeachingSubjectOpen}
        onCancel={() => {
          setTeachingSubjectOpen(false);
          teachingSubjectRef?.current.setInitData();
        }}
        onOk={() => {
          setTeachingSubjectOpen(false);
          handleChange(
            teachingSubjectRef?.current.teachingSubject,
            "teachingSubject"
          );
        }}
      >
        <TeachingSubjects
          value={formData.teachingSubject}
          dataSource={HighSchoolSubjectsList}
          ref={teachingSubjectRef}
        />
      </LwCustomModal>
      <AtActionSheet
        isOpened={evaluationCriterionOpen}
        cancelText="取消"
        title="评价标准"
        onClose={() => setEvaluationCriterionOpen(false)}
      >
        {evaluationCriterionList.map((item) => (
          <AtActionSheetItem
            onClick={() => {
              handleChange(item, "evaluationCriterion");
              setEvaluationCriterionOpen(false);
            }}
          >
            {item}
          </AtActionSheetItem>
        ))}
      </AtActionSheet>
      <LwCustomModal
        type="radio"
        isOpened={allowAnonymousOpen}
        title="允许匿名"
        options={YesOrNoList}
        value={formData.allowAnonymous}
        onClose={setAllowAnonymousOpen}
        onClick={(e) => {
          setAllowAnonymousOpen(false);
          handleChange(e, "allowAnonymous");
        }}
      />
      <LwCustomModal
        type="radio"
        isOpened={hideScoreOpen}
        title="隐藏评分"
        options={YesOrNoList}
        value={formData.hideScore}
        onClose={setHideScoreOpen}
        onClick={(e) => {
          setHideScoreOpen(false);
          handleChange(e, "hideScore");
        }}
      />
    </View>
  );
};

export default addOpenClass;
