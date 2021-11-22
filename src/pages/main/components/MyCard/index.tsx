import { View } from "@tarojs/components";
import { CSSProperties } from "react";
import "./index.scss";

interface MyCardProps {
  children: React.ReactNode;
  style?: CSSProperties;
  upperLeft?: React.ReactNode;
  upperRight?: React.ReactNode;
}

function MyCard(props: MyCardProps) {
  const { style, children, upperLeft, upperRight } = props;
  return (
    <View className="myCard" style={style}>
      <View className="myCardUpperContent">
        <View> {upperLeft} </View>
        <View> {upperRight} </View>
      </View>
      {children}
    </View>
  );
}

export default MyCard;
