<template>
    <div>
        <el-result icon="warning" title="404提示" subTitle="你找的页面走丢了~">
            <template #extra>
                <el-button type="primary"  @click="$router.push('/')">回到首页</el-button>
            </template>
        </el-result>
    </div>
</template>
<script lang="ts" setup>

</script>
<style scoped lang="less">

</style>