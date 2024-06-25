<template>
    <el-card shadow="always">
        <div class="rose-f-c rose-cursor rose-f-column">
            <el-icon :style="iconStyle" :size="size">
                <component :is="icon" @click="$router.push(path)"></component>
            </el-icon>
            <span class="navs-span">{{ title }}</span>
        </div>
    </el-card>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

interface Params{
    icon:string,
    color:string,
    title:string,
    path:string,
    size?:number
}

const props = withDefaults(defineProps<Params>(),{
    size: 30
})

const iconStyle = computed(()=>{
    return {
        color:props.color
    }
})

</script>
<style lang="less" scoped>
.navs-span{
    margin-top: var(--common-split5);
}
</style>