import { Component } from 'vue';
<template>
    <el-button :icon="icon" :size="size" :type="type" :plain="plain" :text="text" :loading="loading" :disabled="disabled"
     @click="$emit('clickButton')" :class="class">
    
        <slot name="icon"></slot>
    </el-button>
</template>
<script lang="ts" setup>
import { Component } from 'vue';

interface Params{
    size?:string,
    type?:string,
    plain?:boolean,
    text?:boolean,
    round?:boolean,
    loading?:boolean,
    disabled?:boolean,
    icon?:string | Component,
    class?:string
}

withDefaults(defineProps<Params>(),{
    size:'small',
    type:'primary',
    plain:false,
    text:false,
    round:false,
    loading:false,
    disabled:false
})

defineEmits(['clickButton'])


</script>
<style lang="less" scoped>

</style>