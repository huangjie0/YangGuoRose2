<template>
    <div>
        <el-container class="rose-bg-w rose-br-s1" :style="{ height:h + 'px' }">
            <el-header class="rose-header rose-f-row">
                header
            </el-header>
            <el-container>
                <ImageAside></ImageAside>
                <ImageMain></ImageMain>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import ImageAside from '@/components/ImageAside.vue'
import ImageMain from '@/components/ImageMain.vue'

const windowHeight:any = window.innerHeight || document.body.clientHeight;
const h:number = windowHeight - 144;

</script>
<style lang="less" scoped>
.rose-header{
    border-bottom: 1px solid var(--rose-g3);
    align-items: center;
}
</style>