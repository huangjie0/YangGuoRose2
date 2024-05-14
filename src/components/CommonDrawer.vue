<template>
    <el-drawer v-model="drawer" :title="title" :size="size" :close-on-click-modal="closeOnClickModal">
        <el-form :model="form" :rules="rules" ref="formRef">
            <el-form-item prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名">
                    <template #prefix>
                        <el-icon class="el-input__icon"><User /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password"  show-password>
                    <template #prefix>
                        <el-icon class="el-input__icon"><Lock /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" :loading="loading" @click="onSubmit(formRef)" class="rose-w-h-100">登录</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>
<script setup lang="ts">
import { ref,reactive} from 'vue'

interface Params { 
    title:string;
    size?:string;
    closeOnClickModal?:boolean;
}

const form = reactive<Params>({
    username:'',
    password:''
})

withDefaults(defineProps<Params>(),{
    size:"45%",
    closeOnClickModal:false
})

const drawer = ref(false)

//打开抽屉
const open = ()=>{
    drawer.value = true
}

//关闭抽屉
const close = ()=>{
    drawer.value = false
}

defineExpose({
    open,
    close
})

</script>
<style scoped lang="less">

</style>