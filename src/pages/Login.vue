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
                <CommonButton :loading="loading" class="rose-w-h-100" size="default">
                    <template #container>
                        登录
                    </template>
                </CommonButton>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<script lang="ts" setup>
import { reactive,ref,onMounted,onBeforeUnmount } from 'vue'
import CommonButton from '@/components/CommonButton.vue'
import type { FormInstance, FormRules } from 'element-plus'
import useUserStore from "@/store/index.ts";
import { toast } from '@/composables/util.ts'
import { useRouter } from 'vue-router'

interface Params {
    username:string,
    password:string
}

const form = reactive<Params>({
    username:'',
    password:''
})

const loading = ref(false)
const userStore = useUserStore()
const router = useRouter()

const formRef = ref<FormInstance>()

const rules = reactive<FormRules<Params>>({
    username:[
        {
            required: true,
            message:'用户名不能为空',
            trigger: 'blur'
        }
    ],
    password:[
        {
            message:'密码不能为空',
            required: true,
            trigger: 'blur'
        }
    ]
})

const onSubmit = async (formEl: FormInstance | undefined) => {
    if(!formEl) return
    await formEl.validate((valid:any)=>{
        if(!valid) return
        loading.value = true
        userStore.userLogin(form.username,form.password).then(()=>{
            toast('登录成功！')
            router.push('/')
        }).finally(()=>{
            loading.value = false
        })
    })
}

onMounted(()=>{
    document.addEventListener("keyup",onKeyUp)
})

onBeforeUnmount(()=>{
    document.removeEventListener("keyup",onKeyUp)
})

function onKeyUp(event:any){
    if(event.key == "Enter") onSubmit(formRef.value)
}

</script>
<style lang="less" scoped>
.line{
    height: 1px;
    width: var(--common-split7);
}
</style>