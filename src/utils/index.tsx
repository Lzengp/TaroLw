/**
 * 传入日期，获取当前日期的星期, 默认当前时间的星期
 * @param value 日期字符串 例如：2022-03-26
 * @param needDefault 是否需要默认当天，默认false
 * @returns 
 */
export function getWeek(value?: string, needDefault: boolean = false) {
  const weekList = ["日", "一", "二", "三", "四", "五", "六"];
  const weekName = value
    ? weekList[new Date(value).getDay()]
    : needDefault
    ? weekList[new Date().getDay()]
    : "";
  return weekName ? "星期" + weekName : "";
}

/**
 * 将含有汉字的时间转换成数字格式，例如 3月-->03，12日-->12
 * @param value 传入的单个日期，例如 3月
 */
export function getNumDataByCNStr(value: string) {
  if (!value) return value;
  const num = value.replace(/[\u4e00-\u9fa5]/, "");
  return num.length === 1 ? `0${num}` : num;
}
