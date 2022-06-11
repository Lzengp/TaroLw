import { View } from "@tarojs/components";
import * as echarts from "../ec-canvas/echarts";
import "./index.scss";

interface BarPRops {
    labelShow?: boolean; // 是否展示柱状图上的数字
}

const Bar = (props: BarPRops) => {

    const { labelShow = false} = props;

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
        //   text: 'Stacked Line'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['评课次数', '被评课人数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['5月', '6月', '7月', '8月', '9月', '10月']
        },
        yAxis: {
          // type: 'value'
        },
        series: [
          {
            name: '评课次数',
            type: 'line',
            // stack: 'Total',
            data: [500, 600, 450, 0, 300, 400]
          },
          {
            name: '被评课人数',
            type: 'line',
            // stack: 'Total',
            data: [50, 100, 90, 0, 45, 85]
          },
        ]
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
      />
    </View>
  );
};
export default Bar;
