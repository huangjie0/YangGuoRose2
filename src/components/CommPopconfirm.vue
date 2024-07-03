<template>
    <el-popconfirm :title="title" :confirm-button-text="confirmButtonText" :cancel-button-text="cancelButtonText" @confirm="$emit('handleConfirm')" @cancel="$emit('handleCancel')">
        <template #reference>
            <slot></slot>
        </template>
    </el-popconfirm>

</template>
<script setup lang="ts">
interface Params{
    title:string,
    confirmButtonText:string,
    cancelButtonText:string
}

withDefaults(defineProps<Params>(),{
    title:'是否删除该条数据?',
    confirmButtonText:'确定',
    cancelButtonText:'取消'
})

defineEmits(['handleConfirm','handleCancel'])

</script>
<style lang="less" scoped>

</style>