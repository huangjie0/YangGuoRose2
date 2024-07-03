<template>
     <div class="rose-aside-list rose-f-row rose-cursor">
        <span class="rose-text-overflow" :class="{'active' : active }">
            <slot></slot>
        </span>
        <CommonButton class="rose-ml-a" @clickButton="$emit('edit')">
            <template #icon>
                <el-icon text :size="12"><Edit/></el-icon>
            </template>
        </CommonButton>
        <CommPopconfirm title="是否要删除该分类?" @handleConfirm="$emit('delete')">
            <template #button>     
                <CommonButton type="danger">
                    <template #icon> 
                        <el-icon :size="12"><Close/></el-icon>
                    </template>
                </CommonButton>
            </template>
        </CommPopconfirm>
    </div>
</template>
<script setup lang="ts"> 
import CommPopconfirm from '@/components/CommPopconfirm.vue'
import CommonButton from '@/components/CommonButton.vue'

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