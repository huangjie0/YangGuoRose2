<template>
    <el-aside width="200px" class="rose-aside rose-p-r">
        <div class="rose-aside-top rose-p-a-0">
            <el-scrollbar>
                <AsideList>分类标题</AsideList>
                <AsideList active>分类标题</AsideList>
            </el-scrollbar>
        </div>
        <div class="rose-aside-bottom rose-p-a-02 rose-f-c ">
            <div>
                分页区域
            </div>
        </div>
    </el-aside>
</template>
<script setup lang="ts">
import AsideList from '@/components/AsideList.vue'

</script>
<style lang="less" scoped>
.rose-aside{
    border-right: 1px solid var(--rose-g3);
    &-top{
        bottom: var(--common-split8);
    }
    &-bottom{
        height: var(--common-split8);
    }
    &-list{
        border-bottom: 1px solid var(--rose-g3);
        align-items: center;
        padding: var(--common-split5);
        color: var(--rose-g4);
        &:hover{
            color: var(--rose-p);
        }
    }
}
</style>