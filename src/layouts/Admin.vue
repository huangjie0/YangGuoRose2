<template>
    <el-container>
      <el-header>
        <Fheader></Fheader>
      </el-header>
      <el-container>
        <el-aside :width="screenStore.asideWidth">
            <Fmenu></Fmenu>
        </el-aside>
        <el-main>
            <FtagList></FtagList>
              <router-view v-slot="{ Component }">
                <Transition name="fade">
                  <keep-alive :max="10">
                    <component :is="Component"/>
                  </keep-alive>

                </Transition>
              </router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import Fheader from './components/Fheader.vue';
import Fmenu from './components/Fmenu.vue';
import FtagList from './components/FtagList.vue';
import useScreenStore from "@/store/screen.ts";

const screenStore = useScreenStore()

</script>
<style lang="less">

.el-aside{
  transition: all .2s;
}
.fade-enter-from,.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,.fade-leave-from{
  opacity: 1;
}
.fade-enter-active,.fade-leave-active{
  transition: all .3s;
}
.fade-enter-active{
  transition-delay: .3s;
}

</style>