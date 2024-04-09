<template>
    <el-row class="rose-vh rose-bg-p">
        <el-col :span="16" class="rose-f-row rose-f-ijc">
            <div>
                <div class="rose-font-w2 rose-font-s4 rose-bg4">欢迎光临</div>
                <div class="rose-mt-1 rose-bg4 rose-font-s2">洋果子后台管理系统</div>
            </div>
        </el-col>
        <el-col :span="8" class="rose-bg-w rose-f-column rose-f-ijc ">
            <h2>欢迎回来</h2>
            <div>
                <span></span>
                <span>账号密码登录</span>
                <span></span>
            </div>
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="请输入用户名"/>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive<any>({
    username:'',
    password:''
})

const onSubmit = () => {
  console.log('submit!')
}

</script>
<style lang="less" scoped>

</style>