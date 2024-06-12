<template>
  <div class="rose-tabs-list rose-z-index rose-f-fixed rose-f-row" :style="{left:screenStore.asideWidth}">
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      class="demo-tabs"
      @edit="handleTabsEdit"
      style="width: 96%;"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
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
import type { TabPaneName } from 'element-plus'

let tabIndex = 2
const editableTabsValue = ref('2')
const screenStore = useScreenStore()
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: 'Tab 2 content',
  }
])

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }
    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>
<style lang="less" scoped>
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

::v-deep .el-tabs__nav-next,
::v-deep .el-tabs__nav-prev{
  line-height: var(--common-split7);
  height: var(--common-split7);
}

</style>
