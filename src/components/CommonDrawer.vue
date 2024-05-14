<template>
    <el-drawer v-model="drawer" :title="title" :size="size" :close-on-click-modal="closeOnClickModal">
        <div class="rose-w-h-100 rose-p-r rose-f-column">
            <div class="body rose-p-a-0 rose-f-1">
                <el-scrollbar>
                    <slot></slot>
                </el-scrollbar>
            </div>
            <div class="actions rose-mt-a rose-f-row">
                <el-button type="primary" >提交</el-button>
                <el-button @click="close">取消</el-button>
            </div>
        </div>
    </el-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface Params { 
    title:string;
    size?:string;
    closeOnClickModal?:boolean;
}

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
.body{
    bottom: 50px;
}
.actions{
    height: 50px;
    align-items: center;
}
</style>