import { View } from "@tarojs/components";
import * as echarts from "../ec-canvas/echarts";
import "./index.scss";

const Bar = () => {
  const ec = {
    onInit: function (canvas, width, height) {
      console.log(width, height);
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
      });
      canvas.setChart(chart);
      const option = {
        // title: {
        //   text: "ECharts 入门示例",
        // },
        tooltip: {
          // type: 'showTip',
          // type: 'hideTip'
          // formatter: (params) => {
          //   console.log(params);
          //   return `评课次数 ${<div>{params.value}</div>}`
          // }
        },
        // legend: {
        //   data: ["评课次数"],
        // },
        color: ["#38a0ff"], // 柱子颜色
        xAxis: {
          data: ["5月", "6月", "7月", "8月", "9月", "10月"],
        },
        yAxis: {},
        series: [
          {
            name: "评课次数",
            type: "bar",
            data: [6, 9, 3, 0, 5, 8],
          },
        ],
      };
      chart.setOption(option);
      return chart;
    },
  };

  return (
    <View className="canvas-container">
      <ec-canvas
        id="mychart-dom-bar"
        canvas-id="mychart-bar"
        ec={ec}
        force-use-old-canvas="true"
      ></ec-canvas>
    </View>
  );
};
export default Bar;
