<template>
    <el-card shadow="always" :class="{'rose-card-top':isTop}" class="index-card">
        <template #header>
            <div class="rose-f-row rose-card">
                <span class="rose-card-title">{{  title }}</span>
                <el-tag :type="unitTpye">{{ tip }}</el-tag>
            </div>
        </template>
        <el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in btns" :key="index">
                <el-card shadow="always">
                    <div class="rose-f-column rose-f-ijc">
                        <span class="rose-font-s2 rose-font-w2">{{ item.value }}</span>
                        <span>{{ item.label }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-card>
</template>

<script lang="ts" setup>

interface Params{
    title:string,
    tip:string,
    unitTpye?:string,
    btns:any[],
    isTop?:boolean
}

withDefaults(defineProps<Params>(),{
    unitTpye:'danger',
    isTop:false
}) 

</script>
<style lang="less" scoped>
.index-card{
    height: 210px;
    .rose-card{
        justify-content: space-between;
        &-title{
            font-size: var(--common-split6);
        }
    }
}


.rose-card-top{
    margin-top: var(--common-split7);
}

</style>