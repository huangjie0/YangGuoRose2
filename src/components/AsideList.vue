<template>
     <div class="rose-aside-list rose-f-row rose-cursor">
        <span class="rose-text-overflow" :class="{'active' : active }">
            <slot></slot>
        </span>
        <el-button class="rose-ml-a" text type="primary" size="small" @click="$emit('edit')">
            <el-icon text :size="12"><Edit/></el-icon>
        </el-button>
        <CommPopconfirm title="是否要删除该分类?" @handleConfirm="$emit('delete')">
            <el-button type="danger" size="small">
                <el-icon :size="12"><Close/></el-icon>
            </el-button>  
        </CommPopconfirm>
    </div>
</template>
<script setup lang="ts"> 
import CommPopconfirm from '@/components/CommPopconfirm.vue'

interface Params{
    active:boolean
}

withDefaults(defineProps<Params>(),{
    active:false
})

defineEmits(['edit','delete'])

</script>
<style lang="less">

</style>