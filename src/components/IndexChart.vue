<template>
    <el-card shadow="hover">
        <template #header>
            <div class="rose-f-row chart-card">
                <span>订单统计</span>
                <div>
                    <el-check-tag :checked="current == item.value" v-for="(item,index) in option" :key="index"
                     @click="handleChoose(item.value)">{{ item.text }}</el-check-tag>
                </div>
            </div>
        </template>
        <!-- echarts图表部分 -->
        <div id="chart" class="chart"></div>
    </el-card>
</template>
<script setup lang="ts">
import { ref , onMounted } from 'vue';
import * as echarts from 'echarts';

const current = ref("month")
const option= ref<any[]>([
    {
        text:"近1个月",
        value:"month"
    },
    {
        text:"近1周",
        value:"week"
    },
    {
        text:"近24小时",
        value:""
    }
])

const handleChoose = (type:string)=>{
    current.value = type
}

const myChart:any = ref(null);

onMounted(()=>{
    var chartDom = document.getElementById('chart')!;
    myChart.value = echarts.init(chartDom);

    // var myChart = echarts.init(chartDom);
})

// type EChartsOption = echarts.EChartsOption;

// var chartDom = document.getElementById('main')!;
// var myChart = echarts.init(chartDom);
// var option: EChartsOption;

// option = {
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [120, 200, 150, 80, 70, 110, 130],
//       type: 'bar'
//     }
//   ]
// };

// option && myChart.setOption(option);



</script>
<style lang="less" scoped>
.chart-card{
    justify-content: space-between;
}

.chart{
    width: 100%;
    height: 360px;
}
</style>