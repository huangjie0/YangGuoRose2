<template>
  <div class="f-menu rose-f-fixed" :style="{ width: screenStore.asideWidth }">
    <el-scrollbar>
      <el-menu active-text-color="#a781ee" :default-active="defaultActive" @select="handleSelect" 
      :collapse="isCollapse" :unique-opened="false" :collapse-transition="false">
        <template v-for="(item,index) in asideMenus">
          <el-sub-menu
            :index="item.name"
            :key="index"
            v-if="item.child && item.child.length > 0"
          >
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(item2,index2) in item.child" :key="index2" :index="item2.frontpath">
                <el-icon>
                    <component :is="item2.icon"></component>
                </el-icon>
                <span>{{ item2.name }}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item :index="item.frontpath" v-else>
            <el-icon>
                <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { ref,computed } from "vue";
import { useRouter,useRoute, onBeforeRouteUpdate } from "vue-router";
import useScreenStore from "@/store/screen.ts";
import useUserStore from "@/store/index.ts";

const router = useRouter()
const route = useRoute()
const screenStore = useScreenStore()
const userStore = useUserStore()

//默认激活状态下的路由路劲
const defaultActive = ref(route.path)  

const handleSelect = (path:string)=>{
    router.push(path)
}

const isCollapse = computed(()=>{
    return screenStore.asideWidth == '64px' ? true : false 
})

onBeforeRouteUpdate((to:any) => {
    defaultActive.value = to.path;
});

const asideMenus = computed(()=>{
    return userStore.menus
})

</script>
<style lang="less" scoped>
.f-menu {
    transition:all 0.2s;
    top: 64px;
    bottom: 0;
    left: 0;
    background-color: var(--rose-w);
}
</style>
