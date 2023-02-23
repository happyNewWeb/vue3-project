<template>
  <div class="chart">
    <div ref="chart" style="width:100%;height:800px;" autoresize></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref ,reactive} from 'vue';
import chinaMap from '../../../../assets/china.json'
import { mainStore } from '../../../../store';
import {getMapData} from '../../../../api/api'
const user = reactive({id:mainStore().userId})
let mapData = await getMapData(user.id).then((res)=>res.data.data)
const chart = ref()
onMounted(() => {
  init()
})
//初始化图标
function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chart.value);
  echarts.registerMap('china', chinaMap)
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '中国物流分布图'
    },
    series: [{
      type: 'map',
      map: 'china',
      data:mapData,
      label: {
        show: true,
        color: '#fff',
        fontSize: 12
      },
      itemStyle: {
        areaColor: '#219edb',
        borderColor: '#fff'
      },
      emphasis: {
        label: {
          color: '#000',
          fontSize: 15
        },
        itemStyle: {
          areaColor: '#1bc1ad',
          borderColor: '#fff'
        }
      },
    }],
    visualMap: {
      min: 800,
      max: 10000,
      text: ['High', 'Low'],
      realtime: false,
      calculable: true,
      inRange: {
        color: ['lightskyblue', 'yellow', 'orangered']
      }
    },
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
}
</style>