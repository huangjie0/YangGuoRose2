<template>
    <el-aside width="200px" class="rose-aside rose-p-r">
        <div class="rose-aside-top rose-p-a-0">
            <el-scrollbar>
                <div v-for="i in 100" :key="i"> 
                    {{ i }}
                </div>
            </el-scrollbar>
        </div>
        <div class="rose-aside-bottom rose-p-a-02 rose-f-c ">
            <div>
                分页区域dsfgdffdgfgfgfdg
            </div>
        </div>
    </el-aside>

</template>
<script setup lang="ts">

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
}
</style>