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
import { ref , onMounted , onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import { getStatistics3 } from '@/api/index.ts'

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
        value:"hour"
    }
])

const handleChoose = (type:string)=>{
    current.value = type
    getData()
}

let myChart:any = null;

onMounted(()=>{
    var chartDom = document.getElementById('chart')!;
    myChart = echarts.init(chartDom);
    getData()

    window.addEventListener('resize',function(){
        myChart.resize()
    })
})

onBeforeUnmount(()=>{
    myChart && echarts.dispose()
})

const getData = ()=>{
    var option: any;
    option = {
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
            }
        ]
    };

    myChart.showLoading()
    getStatistics3(current.value).then((res:any)=>{
        option.xAxis.data = res.x
        option.series[0].data = res.y
        option && myChart.setOption(option);
    }).finally(()=>{
        myChart.hideLoading()
    }) 
}

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