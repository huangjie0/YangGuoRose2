<template>
    <el-drawer v-model="drawer" :title="title" :size="size" :close-on-click-modal="closeOnClickModal">
        <div class="rose-w-h-100 rose-p-r rose-f-column">
            <div class="body rose-p-a-0 rose-f-1">
                <el-scrollbar>
                    <slot></slot>
                </el-scrollbar>
            </div>
            <div class="actions rose-mt-a rose-f-row">
                <CommonButton @clickButton="$emit('formSubmit')" :loading="loading"><template #container>提交</template></CommonButton>
                <CommonButton @clickButton="close" type="defalut"><template #container>取消</template></CommonButton>
            </div>
        </div>
    </el-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CommonButton from '@/components/CommonButton.vue';

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
const loading = ref(false)

//打开抽屉
const open = ()=>{
    drawer.value = true
}

//关闭抽屉
const close = ()=>{
    drawer.value = false

}

defineEmits(['formSubmit'])

defineExpose({
    open,
    close,
    loading
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