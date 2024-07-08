<template>
  <el-table
    :data="props.tableData"
    :height="props.height"
    :stripe="props.stripe"
    :border="props.border"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrRowChange"
    @row-click="handleRowClick"
    @row-dblclick="handleRowDbClick"
    @selection-change="handleSelectionChange"
  >
    <template #empty>{{ props.emptyText }}</template>
    <template v-for="(item, index) of props.config">
      <el-table-column
        v-if="item.type === 'selection'"
        :key="'selection' + index"
        type="selection"
        :width="item.width"
        :min-width="item.minWidth"
        :align="item.align"
        :fixed="item.fixed"
      />
      <el-table-column
        v-if="item.type === 'index'"
        :key="'index' + index"
        type="index"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
        :align="item.align"
        :fixed="item.fixed"
      />

      <el-table-column
        v-if="item.searchable && item.type === 'data'"
        :key="'data-' + index + '-' + item.prop"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
        :align="item.align"
        :fixed="item.fixed"
      >
        <el-table-column
          :prop="item.prop"
          :align="item.align"
          :width="item.width"
          :min-width="item.minWidth"
        >
          <template #header>
            <el-input
              v-if="item.searchType === 'input'"
              v-model.trim="searchInfo[item.prop]"
              clearable
              placeholder="搜索..."
              @change="search"
            />
            <el-select
              v-else-if="item.searchType === 'select'"
              v-model="searchInfo[item.prop]"
              clearable
              placeholder="搜索..."
              style="width: 100%"
              @change="search"
            >
              <el-option
                v-for="option of item.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
            <el-date-picker
              v-else-if="item.searchType === 'time'"
              v-model="searchInfo[item.prop]"
              :type="item.timeType"
              :value-format="item.valueFormat"
              clearable
              placeholder="搜索..."
              style="width: 100%"
              @change="search"
            />
            <el-input
              v-else
              v-model.trim="searchInfo[item.prop]"
              clearable
              placeholder="搜索..."
              @change="search"
            />
          </template>
          <template #default="scope">
            <el-image
              v-if="item.slot === 'image'"
              class="table-td-thumb"
              :src="scope.row.thumb"
              :z-index="10"
              :preview-src-list="[scope.row.thumb]"
              preview-teleported
            />
            <el-tag
              v-else-if="item.slot === 'tag'"
              :type="item.tagType(scope.row, item) || 'primary'"
              v-text="(item.slotContent || '') + scope.row[item.prop]"
            />
            <span
              v-else-if="item.slot === 'text'"
              v-text="(item.slotContent || '') + scope.row[item.prop]"
            />
            <span v-else v-text="scope.row[item.prop]" />
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        v-if="!item.searchable && item.type === 'data'"
        :key="'data-' + index + '-' + item.prop"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
        :align="item.align"
        :fixed="item.fixed"
      >
        <template #default="scope">
          <el-image
            v-if="item.slot === 'image'"
            class="table-td-thumb"
            :src="scope.row.thumb"
            :z-index="10"
            :preview-src-list="[scope.row.thumb]"
            preview-teleported
          />
          <el-tag
            v-else-if="item.slot === 'tag'"
            v-text="(item.slotContent || '') + scope.row[item.prop]"
            :type="item.tagType(scope.row, item) || 'primary'"
          />
          <span
            v-else-if="item.slot === 'text'"
            v-text="(item.slotContent || '') + scope.row[item.prop]"
          />
          <span v-else v-text="scope.row[item.prop]" />
        </template>
      </el-table-column>

      <el-table-column
        v-if="item.type === 'operation'"
        :key="'data-' + index"
        :label="item.label"
        :width="item.width"
        :min-width="item.minWidth"
        :align="item.align"
        :fixed="item.fixed"
      >
        <template #default="scope">
          <el-button
            v-for="btn of item.buttons"
            :key="'btn-' + btn.event + new Date().getTime()"
            :type="btn.type || 'primary'"
            :size="btn.size"
            :plain="btn.plain"
            :text="btn.isText"
            :link="btn.isLink"
            :round="btn.round"
            :circle="btn.circle"
            :icon="btn.icon"
            :disabled="btn.controll(scope.row)"
            @click="handleBtnCLick(btn.event, scope.row)"
          >
            {{ btn.text }}
          </el-button>
        </template>
      </el-table-column>
    </template>
  </el-table>

  <div :class="getPagePosClass(props.pageData.position)">
    <el-pagination
      v-model:currentPage="props.pageData.pageNo"
      v-model:page-size="props.pageData.pageSize"
      :page-sizes="props.pageData.sizesArr"
      layout="total, sizes, prev, pager, next, jumper"
      background
      :total="props.pageData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="--el-color-primary: rgb(167, 129, 238)"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

export interface Option {
  label: string | number;
  value: string | number | boolean;
}

export interface ColConfig {
  type: string;
  width?: number | string;
  minWidth?: number | string;
  align?: string;
  fixed?: string | boolean;
  searchable?: boolean;
  label: string;
  prop: string;
  searchType?: string;
  options?: Option[];
}

export interface TableProps {
  tableData: any[];
  height?: number;
  maxHeight?: number;
  stripe?: boolean;
  border?: boolean;
  rowStyle?: Function;
  emptyText?: string;
  showSummary?: boolean;
  defaultSort?: {
    prop: string;
    order: string;
  };
  config?: any[];
  pageData: {
    pageNo: number;
    pageSize: number;
    total: number;
    sizesArr: number[];
    position?: string;
  };
}

const props = withDefaults(defineProps<TableProps>(), {
  tableData: () => [],
  height: 480,
  maxHeight: 480,
  stripe: false,
  border: true,
  rowStyle: undefined,
  emptyText: "No Data",
  showSummary: false,
  pageData: () => {
    return {
      pageNo: 1,
      pageSize: 15,
      total: 0,
      sizesArr: [15, 30, 50, 100],
      position: "center",
    };
  },
  config: () => [],
});
const emits = defineEmits<{
  (e: "rowClick", val: any): void;
  (e: "dbClick", row: any, column: any, event: any): void;
  (e: "select", val: any[]): void;
  (e: "sizeChange", val: number): void;
  (e: "pageChange", val: number): void;
  (e: "search", val: any): void;
  (e: "operate", eventType: string, val: any): void;
}>();

const searchInfo = reactive<any>({});
const search = () => {
  emits("search", searchInfo);
};

const handleCurrRowChange = (currRow: any) => {
  emits("rowClick", currRow);
};
const handleRowClick = (row: any) => {
  emits("rowClick", row);
};
const handleRowDbClick = (row: any, column: any, event: any) => {
  emits("dbClick", row, column, event);
};
const handleSelectionChange = (val: any[]) => {
  emits("select", val);
};
const handleSizeChange = (val: number) => {
  emits("sizeChange", val);
};
const handleCurrentChange = (val: number) => {
  emits("pageChange", val);
};
const handleBtnCLick = (eventType: string, data: any) => {
  emits("operate", eventType, data);
};
const getPagePosClass = (pos: string = "center") => {
  switch (pos) {
    case "left":
      return { "pagination-block-left": true };
    case "center":
      return { "pagination-block-center": true };
    default:
      return { "pagination-block-center": true };
  }
};
//   const test = (scope: any) => {
//     console.log('scope', scope)
//   }
</script>

<style scoped>
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
.pagination-block-left {
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.pagination-block-center {
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination-block-right {
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
