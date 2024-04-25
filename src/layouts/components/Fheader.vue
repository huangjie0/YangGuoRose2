<template>
    <div class="rose-f-row f-header rose-bg-p rose-bg4 rose-f-fixed">
        <span class="f-header-logo rose-f-c rose-font-s3">
            <el-icon class="rose-mr-1"><Bicycle /></el-icon>
            <span class="rose-mr-1">洋果子Rose后台系统</span>
            <el-icon class="rose-mr-1 rose-cursor"><Fold /></el-icon>
            <el-icon class="rose-mr-1 rose-cursor"><Refresh /></el-icon>
        </span>
        <div class="rose-ml-a rose-f-row logo-right">
            <el-icon class="rose-cursor rose-mr-1"><FullScreen /></el-icon>
            <el-dropdown class="dropdown rose-bg4 rose-mr-1">
                <span class="el-dropdown-link">
                <el-avatar :size="25" :src="userStore.user?.avatar" />
                {{ userStore.user?.username }}
                <el-icon>
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>修改密码</el-dropdown-item>
                    <el-dropdown-item @click="userLogOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts" setup>
import useUserStore from "@/store/index.ts";
import { logout } from '@/api/manager.ts';
import { showModal , toast } from "@/composables/util.ts";
import { useRouter } from "vue-router";

const userStore = useUserStore()
const router = useRouter()

const userLogOut = ()=> {
    showModal("是否要退出登录？").then((res:any)=>{
        logout().finally(()=>{
            userStore.logout()
            //跳转到用户登录页 
            router.push("/login")
            //提示错误信息
            toast("退出登录成功！")
        })
    })
}

</script>
<style lang="less">
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