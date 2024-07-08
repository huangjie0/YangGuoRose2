<template>
    <el-aside width="200px" class="rose-aside rose-p-r" v-loading="loading">
        <div class="rose-aside-top rose-p-a-0">
            <el-scrollbar>
                <AsideList :active="activeId == item.id" v-for="(item,index) in imageList" :key="index" 
                @edit="handleEdit(item)" @delete="handleDelete(item)" @click="handleChangeId(item.id)">{{ item.name }}</AsideList>
            </el-scrollbar>
        </div>
        <div class="rose-aside-bottom rose-p-a-02 rose-f-c">
            <el-pagination background layout="prev,next" :total="total" :current-page="currentPage" :page-size="pageSize" @current-change="getImageList"/>
        </div>
    </el-aside>
    <CommonDrawer ref="drawerRef" @formSubmit="formSubmit" :title="title">
        <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
            <el-form-item prop="name" label="分类名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item prop="order" label="排序">
                <el-input-number v-model="form.order" :min="0" :max="10000"></el-input-number>
            </el-form-item>
        </el-form>
    </CommonDrawer>
</template>
<script setup lang="ts">
import { ref,reactive,watch } from 'vue';
import { getImageClassList,createImageClass,updateImageClass,deleteImageClass } from '@/api/imageClass.ts'
import { toast } from '@/composables/util.ts'
import AsideList from '@/components/AsideList.vue'
import CommonDrawer from '@/components/CommonDrawer.vue'
import type { FormRules } from 'element-plus'
import { number } from 'echarts';

const loading = ref(false)
const imageList = ref<any[]>([])
const activeId = ref(0)
const drawerRef = ref<any>(null)
const formRef = ref<any>(null)
const editFlag = ref(false)
const editId = ref(0)
const title = ref('新增')

watch(()=>editFlag.value,(newValue:boolean)=>{
    newValue ? title.value = '新增' : title.value = '编辑'
})

//分页
const currentPage = ref(1)
const total = ref(0)
const pageSize = ref(10)

interface formParams{
    name:string,
    order:number
}

const form = reactive<formParams>({
    name:'',
    order:50
})

const rules = reactive<FormRules<formParams>> ({
    name:[
        {
            required:true,
            message:'图库分类名称不能为空',
            trigger:'blur'
        }
    ]
})

//获取图片列表数据
const getImageList = (p:any = null)=>{
    (typeof p == "number") && (currentPage.value = p)

    loading.value = true
    getImageClassList(currentPage.value).then((res:any)=>{
        imageList.value = res.list
        total.value = res.totalCount
        
        let item = imageList.value[0]
        item && handleChangeId(item.id)
    }).finally(()=>{
        loading.value = false
    })
}

getImageList()

const formSubmit = ()=>{
    formRef.value.validate((valid:any)=>{
        if(!valid) return
        drawerRef.value.loading = true
        let fun = editFlag.value ? createImageClass(form) : updateImageClass(editId.value,form) 
        fun.then((_res:any)=>{
            toast(title.value+'图片分类成功')
            getImageList(1)
            drawerRef.value.close()
        }).finally(()=>{
            drawerRef.value.loading = false
        })
    })
}

const handleEdit = (item:any)=>{
    editId.value = item.id
    form.name = item.name
    form.order = item.order
    editFlag.value = false
    drawerRef.value.open()
}

const handleDelete = (item:any)=>{
    loading.value = true
    deleteImageClass(item.id).then(()=>{
        toast("删除成功")
        getImageList()
    }).finally(()=>{
        loading.value = false
    })
}


defineExpose({
    drawerRef,
    form,
    editFlag,
    formRef
})

const handleChangeId = (id:number)=>{
    activeId.value = id
    emits('change',id)
}

const emits = defineEmits(['change'])

</script>
<style lang="less" scoped>
.rose-aside{
    border-right: 1px solid var(--rose-g3);
    &-top{
        bottom: var(--common-split8);
    }
    &-bottom{
        height: var(--common-split8);
    }
    &-list{
        border-bottom: 1px solid var(--rose-g3);
        align-items: center;
        padding: var(--common-split5);
        color: var(--rose-g4);
        &:hover{
            color: var(--rose-p);
        }
    }
}
</style>