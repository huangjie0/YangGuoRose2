<template>
    <div>
        <el-row :gutter="20">
            <!-- 骨架屏部分 -->
            <template v-if="panels.length == 0">
                <el-col :span="6" v-for="(_item,index) in panels" :key="index">
                    <el-skeleton animated loading>
                        <template #template>
                            <el-card shadow="hover">
                                <template #header>
                                    <div class="rose-f-row rose-card">
                                        <el-skeleton-item variant="caption" style="width: 16%;"/>
                                        <el-skeleton-item variant="rect" style="width:8%"/>
                                    </div>
                                </template>
                            <span> 
                                <el-skeleton-item variant="p" style=" width: 12%"/>
                            </span>
                            <el-divider/>
                                <div class="rose-f-row rose-card">
                                    <el-skeleton-item variant="text" style="width: 16%;"/>
                                    <el-skeleton-item variant="text" style="width: 8%;"/>
                                </div>
                            </el-card>
                        </template>
                    </el-skeleton>
                </el-col>
            </template>
            <el-col :span="6" v-for="(item,index) in panels" :key="index">
                <el-card shadow="hover">
                    <template #header>
                        <div class="rose-f-row rose-card">
                            <span class="rose-card-title">{{  item.title }}</span>
                            <el-tag :type="item.unitColor">{{ item.unit }}</el-tag>
                        </div>
                    </template>
                    <span class="rose-font-s1 rose-font-w2"> 
                        <CountTo :value="item.value"></CountTo>
                    </span>
                    <el-divider />
                    <div class="rose-f-row rose-card">
                        <span>{{ item.subTitle }} </span>
                        <span>{{ item.subValue }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="rose-navs">
            <el-col :span="4" v-for="(item,index) in iconNavs" :key="index">
                <IndexNavs :icon="item.icon" :color="item.color" :title="item.title" :path="item.path"></IndexNavs>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="rose-navs">
            <el-col :span="12">
                <IndexChart></IndexChart>
            </el-col>
            <el-col :span="12" class="rose-f-column rose-f-ijc">
                <IndexCard title="店铺及商品提示" tip="店铺及商品提示"  :btns="goods"></IndexCard>
                <IndexCard title="交易提示" tip="需要立即处理的交易订单" :btns="order" isTop></IndexCard>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getStatistics1,getStatistics2 } from "@/api/index.ts";
import CountTo from "@/components/CountTo.vue"
import IndexNavs from "@/layouts/components/IndexNavs.vue";
import IndexChart from "@/components/IndexChart.vue"
import IndexCard from "@/components/IndexCard.vue"

const panels = ref<any[]>([])
const goods = ref<any[]>([])
const order = ref<any[]>([])

getStatistics1().then((res:any)=>{
    panels.value = res.panels
})

getStatistics2().then((res:any)=>{
    goods.value = res.goods
    order.value = res.order
})

const iconNavs:any[] = [
    {
        icon:'User',
        color:'#B5A642',
        title:'用户',
        path:'/user/list'
    },
    {
        icon:'Ship',
        color:'#D98719',
        title:'商品',
        path:'/goods/list'
    },
    {
        icon:'Lightning',
        color:'#4A766E',
        title:'分类',
        path:'/category/list'
    },
    {
        icon:'Soccer',
        color:'#9370DB',
        title:'规格',
        path:'/skus/list'
    },
    {
        icon:'Brush',
        color:'#5959AB',
        title:'优惠券',
        path:'/coupon/list'
    },
    {
        icon:'Coin',
        color:'#99CC32',
        title:'会员',
        path:'/level/list'
    }
]

</script>
<style lang="less" scoped>
.rose-card{
    justify-content: space-between;
    &-title{
        font-size: var(--common-split6);
    }
}
.rose-navs{
    margin-top:var(--common-split6);
}
</style>