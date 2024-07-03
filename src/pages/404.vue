<template>
    <div>
        <el-result icon="warning" title="404提示" subTitle="你找的页面走丢了~">
            <template #extra>
                <CommonButton @clickButton="$router.push('/')"><template #container>回到首页</template></CommonButton>
            </template>
        </el-result>
    </div>
</template>
<script lang="ts" setup>
import CommonButton from '@/components/CommonButton.vue';

</script>
<style scoped lang="less">

</style>