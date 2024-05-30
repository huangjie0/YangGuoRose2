import { ref,reactive } from "vue";
import type { FormRules,FormInstance } from 'element-plus';
import { updatePassword,logout } from '@/api/manager.ts';
import { toast,showModal } from "@/composables/util.ts";
import useUserStore from "@/store/index.ts";
import { useRouter } from "vue-router";

export function useRepassword(){

    const userStore = useUserStore()
    const router = useRouter()
    const commonDrawer = ref();

    interface Params {
        oldpassword:string,
        password:string,
        repassword:string
    }

    const form = reactive<Params>({
        oldpassword:'',
        password:'',
        repassword:''  
    })

    const formRef = ref<FormInstance>()

    const rules = reactive<FormRules<Params>>({
        password:[
            {
                required: true,
                message:'密码不能为空',
                trigger: 'blur'
            }
        ],
        oldpassword:[
            {
                message:'旧密码不能为空',
                required: true,
                trigger: 'blur'
            }
        ],
        repassword:[
            {
                message:'确认密码不能为空',
                required: true,
                trigger: 'blur'
            }
        ]
    })

    const formSubmit = async (formEl: FormInstance | undefined) => {
        if(!formEl) return
        await formEl.validate((valid:any)=>{
            if(!valid) return
            commonDrawer.value.loading = true;
            updatePassword(form).then((__res:any)=>{
                toast("修改密码成功，请重新登录！")
                userStore.logout()
                router.push("/login")
            }).finally(()=>{
                commonDrawer.value.loading = false;
            })
        })
    }

    return {
        formRef,
        form,
        rules,
        formSubmit,
        commonDrawer
    }
}

export function useHandleLogout(){
    const userStore = useUserStore()
    const router = useRouter()
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
    return {
        userLogOut
    }
}