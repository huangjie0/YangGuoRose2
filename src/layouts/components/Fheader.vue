<template>
    <div class="rose-f-row">
        <span>
            <el-icon><Bicycle /></el-icon>
            洋果子Rose后台系统
            <el-icon><Fold /></el-icon>
            <el-icon><Refresh /></el-icon>
        </span>
        <div>
            <el-icon><FullScreen /></el-icon>
            <el-dropdown>
                <span class="el-dropdown-link">
                <el-avatar :size="25" :src="userStore.user.avatar" />
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>


        </div>
    </div>
</template>
<script lang="ts" setup>
import useUserStore from "@/store/index.ts";

const userStore = useUserStore()

</script>
<style lang="less">

</style>