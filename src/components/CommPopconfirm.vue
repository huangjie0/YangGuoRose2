<template>
    <el-popconfirm :width="width" :hide-icon="hideIcon" :icon="icon" :icon-color="iconColor" :title="title" :confirm-button-text="confirmButtonText" 
    :cancel-button-text="cancelButtonText" @confirm="$emit('handleConfirm')" @cancel="$emit('handleCancel')">
        <template #reference>
            <slot name="button"></slot>
        </template>
    </el-popconfirm>
</template>
<script setup lang="ts">
import { Component } from 'vue';

interface Params{
    title?:string,
    confirmButtonText?:string,
    cancelButtonText?:string,
    width?:string | number,
    icon?:string | Component,
    iconColor?:string,
    hideIcon?:boolean
}

withDefaults(defineProps<Params>(),{
    title:'是否删除该条数据?',
    confirmButtonText:'确定',
    cancelButtonText:'取消',
    width:200,
    icon:'QuestionFilled',
    iconColor:'#f90',
    hideIcon:false
})

defineEmits(['handleConfirm','handleCancel'])

</script>
<style lang="less" scoped>

</style>