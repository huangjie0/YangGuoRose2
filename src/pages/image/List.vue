<template>
    <div>
        <el-container class="rose-bg-w rose-br-s1" :style="{ height:h + 'px' }">
            <el-header class="rose-header rose-f-row">
                <CommonButton @clickButton="handleOpen">
                    <template #container >
                        新增图片分类
                    </template>
                </CommonButton>
            </el-header>
            <el-container>
                <ImageAside ref="asideRef" @change="changeId"></ImageAside>
                <ImageMain ref="imageMainRef"></ImageMain>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CommonButton from '@/components/CommonButton.vue'
import ImageAside from '@/components/ImageAside.vue'
import ImageMain from '@/components/ImageMain.vue'

const windowHeight:any = window.innerHeight || document.body.clientHeight;
const h:number = windowHeight - 144;
const asideRef = ref<any>(null);
const imageMainRef = ref<any>(null)

const handleOpen = ()=>{
    asideRef.value.form.name = ''
    asideRef.value.form.order = 50
    asideRef.value.drawerRef.open()
    asideRef.value.formRef?.clearValidate()
    asideRef.value.editFlag = true
}

const changeId =  (id:number)=>{
    imageMainRef.value.loadData(id)
}


</script>
<style lang="less" scoped>
.rose-header{
    border-bottom: 1px solid var(--rose-g3);
    align-items: center;
}
</style>