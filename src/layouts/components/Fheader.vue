<template>
    <div class="rose-f-row f-header rose-bg-p rose-bg4 rose-f-fixed">
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
                {{ userStore.user.username }}
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
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
.f-header{
    height:64px;
    top:0;
    left:0;
    right:0;
}
</style>