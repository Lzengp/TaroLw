import { getNumDataByCNStr, getWeek } from "@utils";

// 性别静态数据
export const GenderList = [
  { value: "man", label: "男" },
  { value: "woman", label: "女" },
];

// 性别枚举值
export enum GenderObj {
  "man" = "男",
  "woman" = "女",
}

// 授课年纪字典数据
export const TeachingGradeList = ["高一", "高二", "高三"];

/**
 * 授课时间
 * @param value 授课时间，数组，例如：[0,1,2,3]
 * @param dataSource 授课时间数据源，二维数组，例如[ ['2022'], ['1月'], ['1日'], ['第1节]]
 * @returns 返回格式，例如 "2022-03-26 星期六 第1节"
 */
export const getOpenClassTime = (
  value: Array<string | number>,
  dataSource: Array<Array<string>>
) => {
  const year = dataSource[0][value[0]];
  const month = getNumDataByCNStr(dataSource[1][value[1]]);
  const day = getNumDataByCNStr(dataSource[2][value[2]]);
  const className = dataSource[3][value[3]];
  const weekText = getWeek(`${year}-${month}-${day}`);
  return `${year}-${month}-${day} ${weekText} ${className}`;
};

export const HighSchoolSubjectsList = [
  {
    title: "高中",
    HighSchoolSubjects: [
      { value: "g-yuwen", label: "语文" },
      { value: "g-shuxue", label: "数学" },
      { value: "g-yingwen", label: "英文" },
      { value: "g-wuli", label: "物理" },
      { value: "g-huaxue", label: "化学" },
      { value: "g-shenwu", label: "生物" },
      { value: "g-lishi", label: "历史" },
      { value: "g-dili", label: "地理" },
      { value: "g-zhengzhi", label: "政治" },
    ],
  },
  {
    title: "初中",
    HighSchoolSubjects: [
      { value: "c-yuwen", label: "语文" },
      { value: "c-shuxue", label: "数学" },
      { value: "c-yingwen", label: "英文" },
      { value: "c-wuli", label: "物理" },
      { value: "c-huaxue", label: "化学" },
      { value: "c-shenwu", label: "生物" },
      { value: "c-lishi", label: "历史" },
      { value: "c-dili", label: "地理" },
      { value: "c-zhengzhi", label: "政治" },
    ],
  },
  {
    title: "小学",
    HighSchoolSubjects: [
      { value: "x-yuwen", label: "语文" },
      { value: "x-shuxue", label: "数学" },
      { value: "x-yingwen", label: "英文" },
    ],
  },
];

export const HighSchoolSubjectsObj = {
  "g-yuwen": "语文",
  "g-shuxue": "数学",
  "g-yingwen": "英文",
  "g-wuli": "物理",
  "g-huaxue": "化学",
  "g-shenwu": "生物",
  "g-lishi": "历史",
  "g-dili": "地理",
  "g-zhengzhi": "政治",
  "c-yuwen": "语文",
  "c-shuxue": "数学",
  "c-yingwen": "英文",
  "c-wuli": "物理",
  "c-huaxue": "化学",
  "c-shenwu": "生物",
  "c-lishi": "历史",
  "c-dili": "地理",
  "c-zhengzhi": "政治",
  "x-yuwen": "语文",
  "x-shuxue": "数学",
  "x-yingwen": "英文",
};

export const evaluationCriterionList = [
  "高中课堂教学评价标准",
  "初中课堂教学评价标准",
  "北京市优秀课堂教学评价标准",
];

export const YesOrNoList = [
  { value: "yes", label: "是" },
  { value: "no", label: "否" },
];
