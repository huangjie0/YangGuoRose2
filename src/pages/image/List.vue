<template>
    <div>
        <el-container class="rose-bg-w rose-br-s1" :style="{ height:h + 'px' }">
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <div class="top">
                        <div v-for="i in 100" :key="i"> 
                            {{ i }}
                        </div>
                    </div>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
const windowHeight:any = window.innerHeight || document.body.clientHeight;
const h:number = windowHeight - 144;


</script>
<style lang="less" scoped>

</style>