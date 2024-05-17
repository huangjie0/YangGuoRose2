<template>
    <div class="rose-f-row f-header rose-bg-p rose-bg4 rose-f-fixed">
        <span class="f-header-logo rose-f-c rose-font-s3">
            <el-icon class="rose-mr-1"><Bicycle /></el-icon>
            <span class="rose-mr-1">洋果子Rose后台系统</span>
            <el-icon class="rose-mr-1 rose-cursor"><Fold /></el-icon>
            <el-tooltip effect="dark" content="刷新" placement="bottom">
                <el-icon class="rose-mr-1 rose-cursor" @click="handleRefresh"><Refresh /></el-icon>
            </el-tooltip>
        </span>
        <div class="rose-ml-a rose-f-row logo-right">
            <el-tooltip effect="dark" content="全局" placement="bottom">
                <el-icon class="rose-cursor rose-mr-1" @click="toggle">
                    <FullScreen v-if="!isFullscreen"/>
                    <Aim v-else/>
                </el-icon>
            </el-tooltip>
            <el-dropdown class="dropdown rose-bg4 rose-mr-1" @command="handleCommand">
                <span class="el-dropdown-link">
                <el-avatar :size="25" :src="(userStore.user as any) ?.avatar" />
                {{ (userStore.user as any) ?.username }}
                <el-icon>
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                        <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
    <!-- 修改密码弹框 -->
    <CommonDrawer ref="commonDrawer" title="修改密码">
        <div style="height: 1000px;">
            11
        </div>
    </CommonDrawer>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import useUserStore from "@/store/index.ts";
import { logout,updatePassword } from '@/api/manager.ts';
import { showModal , toast } from "@/composables/util.ts";
import { useRouter } from "vue-router";
import { useFullscreen } from '@vueuse/core';
import CommonDrawer from '@/components/CommonDrawer.vue'

const userStore = useUserStore()
const router = useRouter()
const { isFullscreen, toggle } = useFullscreen()
const commonDrawer = ref();

const userLogOut = ()=> {
    showModal("是否要退出登录？").then(()=>{
        logout().finally(()=>{
            userStore.logout()
            //跳转到用户登录页 
            router.push("/login")
            //提示错误信息
            toast("退出登录成功！")
        })
    })
}

const userRePassword = ()=>{
    commonDrawer.value.open()
}

const handleCommand = (v:string)=>{
    switch (v) {
        case "logOut":
            userLogOut()
            break;
        case "rePassword":
            userRePassword()
            break;
    }
}

const handleRefresh = ()=>{
    location.reload()
}

</script>
<style lang="less" scoped>
.f-header{
    height:64px;
    top:0;
    left:0;
    right:0;
    align-items: center;
    &-logo{
        width: 250px;
    }
    .logo-right{
        align-items: center;
    }
}

</style>