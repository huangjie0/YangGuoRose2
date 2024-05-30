<template>
    <div class="rose-f-row f-header rose-bg-p rose-bg4 rose-f-fixed">
        <span class="f-header-logo rose-f-c rose-font-s3">
            <el-icon class="rose-mr-1"><Bicycle /></el-icon>
            <span class="rose-mr-1">洋果子Rose后台系统</span>
            <el-icon class="rose-mr-1 rose-cursor" @click="handleScreen">
                <Fold v-if="screenStore.asideWidth == '200px'" />
                <Expand v-else />
            </el-icon>
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
    <CommonDrawer ref="commonDrawer" title="修改密码" size="50%" @form-submit="formSubmit(formRef)">
        <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
            <el-form-item prop="password" label="新密码">
                <el-input v-model="form.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="oldpassword" label="旧密码">
                <el-input v-model="form.oldpassword" placeholder="请输入旧密码" type="password"  show-password></el-input>
            </el-form-item>
            <el-form-item prop="repassword" label="确认密码">
                <el-input v-model="form.repassword" placeholder="请输入确认密码" type="password"  show-password></el-input>
            </el-form-item>
        </el-form>
    </CommonDrawer>
</template>
<script lang="ts" setup>
import useUserStore from "@/store/index.ts";
import useScreenStore from "@/store/screen.ts";
import { useFullscreen } from '@vueuse/core';
import CommonDrawer from '@/components/CommonDrawer.vue';
import { useRepassword , useHandleLogout} from '@/composables/useManager.ts';

const userStore = useUserStore()
const screenStore = useScreenStore()
const { isFullscreen, toggle } = useFullscreen()
const { formRef,form,rules,formSubmit,commonDrawer } = useRepassword()
const { userLogOut } = useHandleLogout()

const userRePassword = ()=>{
    commonDrawer.value.open()
}

const handleScreen = ()=>{
    screenStore.handleAsideWidth()
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