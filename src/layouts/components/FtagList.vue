<template>
  <div class="rose-tabs-list rose-z-index rose-f-fixed rose-f-row" :style="{ left:screenStore.asideWidth }">
    <el-tabs
      v-model="activeTab"
      type="card"
      closable
    >
      <el-tab-pane
        v-for="item in tabList"
        :key="item.path"
        :label="item.title"
        :name="item.title"
      >
      </el-tab-pane>
    </el-tabs>
    <!-- 下拉菜单部分 -->
    <span class="rose-d rose-bg-w rose-f-c rose-br-s1 rose-ml-a">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </div>
</template>
<script lang="ts" setup>
import useScreenStore from "@/store/screen.ts";
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeTab = ref(route.path)
const screenStore = useScreenStore()
const tabList = ref<any[]>([
  {
    title: '后台首页',
    path:'/'

  },
  {
    title: '商城管理',
    path:'/goods/list'
  }
])

</script>
<style lang="less" scoped>
.el-tabs{
  width: 96%;
}
.rose-tabs-list {
  align-items: center;
  height: 44px;
  top: 64px;
  right: var(--common-split0);
  padding-right: 20px;
  .rose-d{
    height: var(--common-split3);
    width: var(--common-split3);
  }
}

:deep(.el-tabs__nav-next),
:deep(.el-tabs__nav-prev){
  line-height: var(--common-split7);
  height: var(--common-split7);
}

</style>
