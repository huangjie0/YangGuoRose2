<template>
  <div class="rose-tabs-list rose-z-index rose-f-fixed rose-f-row" :style="{ left:screenStore.asideWidth }">
    <el-tabs
      v-model="activeTab"
      type="card"
      @tabChange = "handleChange"
      @tabRemove = "tabRemove"
    >
      <el-tab-pane
        v-for="item in tabList"
        :key="item.path"
        :label="item.title"
        :name="item.path"
        :closable="item.path != '/'"
      >
      </el-tab-pane>
    </el-tabs>

    <!-- 下拉菜单部分 -->
    <span class="rose-d rose-bg-w rose-f-c rose-br-s1 rose-ml-a">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="clearOther">关闭其他</el-dropdown-item>
            <el-dropdown-item command="clearAll">全部关闭</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </span>
  </div>
  <div class="placeholder"></div>
</template>
<script lang="ts" setup>
import useScreenStore from "@/store/screen.ts";
import {useTabList} from "@/composables/useTabList.ts"

const screenStore = useScreenStore()
const { activeTab,tabList,handleChange,handleCommand,tabRemove } = useTabList()

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

.placeholder{
  height: var(--common-split7);
}

</style>
