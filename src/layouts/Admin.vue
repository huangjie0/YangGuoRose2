<template>
    <el-container>
      <el-header>
        <Fheader></Fheader>
      </el-header>
      <el-container>
        <el-aside width="200px">
            <Fmenu></Fmenu>
        </el-aside>
        <el-main>
            <FtagList></FtagList>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import Fheader from './components/Fheader.vue';
import Fmenu from './components/Fmenu.vue';
import FtagList from './components/FtagList.vue';


</script>
<style lang="less">

</style>