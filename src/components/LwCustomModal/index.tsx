import { Button } from "@tarojs/components";
import { ReactElement } from "react";
import {
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader,
  AtRadio,
} from "taro-ui";

interface LwRadioModalProps {
  isOpened: boolean; // 弹窗是否可见
  title?: string; // 标题
  type?: "radio" | undefined; // 类型
  options?: Array<{ value: string; label: string }>; // 单选框数据源
  value?: string | number | undefined; // 单选框值
  children?: ReactElement; // 自定义modal内容
  onClose: (value: boolean) => void; // 弹窗关闭事件，返回false
  onClick?: (value) => void; // 单选框点击事件, 返回的值就是单选框的value值
  onCancel?: () => void; // 取消按钮事件
  onOk?: () => void; // 确认按钮事件
  cancelText?: string; // 取消按钮名称，默认名称“取消”
  okText?: string; // 确定按钮名称，默认名称“确定”
}

/**
 * 基于AtModal进行二次封装
 * @param props
 */
const LwCustomModal = (props: LwRadioModalProps) => {
  const {
    isOpened = false,
    onClose,
    options = [],
    value,
    onClick,
    title,
    type,
    children,
    onCancel,
    onOk,
    cancelText,
    okText,
  } = props;
  return (
    <AtModal isOpened={isOpened} onClose={() => onClose(false)}>
      {title && <AtModalHeader>{title}</AtModalHeader>}
      <AtModalContent>
        {type === "radio" && (
          <AtRadio
            options={options}
            value={value}
            onClick={(e) => onClick && onClick(e)}
          />
        )}
        {children && children}
      </AtModalContent>
      {onOk && (
        <AtModalAction>
          <Button
            onClick={() => {
              onClose(false);
              onCancel && onCancel();
            }}
          >
            {cancelText || "取消"}
          </Button>
          <Button
            onClick={() => {
              onOk && onOk();
            }}
          >
            {okText || "确定"}
          </Button>
        </AtModalAction>
      )}
    </AtModal>
  );
};

export default LwCustomModal;
