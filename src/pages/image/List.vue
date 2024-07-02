<template>
    <div>
        <el-container class="rose-bg-w rose-br-s1" :style="{ height:h + 'px' }">
            <el-header class="rose-header rose-f-row">
                <el-button size="small" type="primary" @click="handleOpen">新增图片分类</el-button>
            </el-header>
            <el-container>
                <ImageAside ref="asideRef"></ImageAside>
                <ImageMain></ImageMain>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ImageAside from '@/components/ImageAside.vue'
import ImageMain from '@/components/ImageMain.vue'

const windowHeight:any = window.innerHeight || document.body.clientHeight;
const h:number = windowHeight - 144;
const asideRef = ref<any>(null);

const handleOpen = ()=>{
    asideRef.value.form.name = ''
    asideRef.value.form.order = 50
    asideRef.value.drawerRef.open()
    asideRef.value.formRef?.clearValidate()
    asideRef.value.editFlag = true
}


</script>
<style lang="less" scoped>
.rose-header{
    border-bottom: 1px solid var(--rose-g3);
    align-items: center;
}
</style>