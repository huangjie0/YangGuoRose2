<template>
    <el-drawer v-model="drawer" :title="title" :size="size" :close-on-click-modal="closeOnClickModal">
    <span>Hi there!</span>
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

</style>