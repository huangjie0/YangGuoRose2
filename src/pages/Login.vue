<template>
    <el-row class="rose-vh rose-bg-p">
        <el-col :lg="16" :md="12" class="rose-f-row rose-f-ijc">
            <div>
                <div class="rose-font-w2 rose-font-s4 rose-bg4">欢迎光临</div>
                <div class="rose-mt-1 rose-bg4 rose-font-s2">洋果子后台管理系统</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="rose-bg-w rose-f-column rose-f-ijc">
            <h2>欢迎回来</h2>
            <div class="rose-f-row rose-f-ijc rose-mt-1 rose-mb-1 rose-bg"> 
                <span class="line rose-bg-g"></span>
                <span class="rose-mr-1 rose-ml-1">账号密码登录</span>
                <span class="line rose-bg-g"></span>
            </div>
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon class="el-input__icon"><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码">
                        <template #prefix>
                            <el-icon class="el-input__icon"><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" class="rose-w-h-100">登录</el-button>
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
  console.log("11111")
}

</script>
<style lang="less" scoped>
.line{
    height: 1px;
    width: var(--common-split7);
}
</style>