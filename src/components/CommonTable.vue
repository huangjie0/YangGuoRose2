<template>
  <div class="lby_table">
    <el-table
      :data="dataSource"
      :border="border"
      v-loading="tableLoading"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="isSelection" type="selection" width="55" />
      <template v-for="column in columns">
        <el-table-column
          v-if="column.slot"
          :key="column.prop"
          :label="column.label"
          :prop="column.prop"
          :min-width="column.width"
          :width="column.width"
        >
          <template v-slot="scope">
            <slot :name="column.slot" :row="scope.row" :column="column"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="column.prop"
          :label="column.label"
          :prop="column.prop"
          :min-width="column.width"
          :width="column.width"
          :class-name="column.className"
        >
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pagination.pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagination.pageSize"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
  </div>
</template>
<script setup lang="ts">
interface Params {
    columns:any[],
    dataSource:any[],
    pagination?:any,
    total?:number,
    border?:boolean,
    tableLoading?:boolean,
    isSelection?:boolean
}

withDefaults(defineProps<Params>(), {
    pagination:{
        pageIndex: 1,
        pageSize: 10
    },
    total:0,
    border:false,
    tableLoading:false,
    isSelection:false
});

const emits = defineEmits(['onSizeChange','onCurrentChange','onSelection'])

const handleSizeChange = (pageSize:number)=>{
    emits('onSizeChange',pageSize)
}

const handleCurrentChange = (pageIndex:number)=>{
    emits('onCurrentChange',pageIndex)
}

//复选框选中
const handleSelectionChange = (selection:any)=>{
    emits('onSelection',selection)
}



</script>
<style lang="less" scoped>
.lby_table {
  width: 100%;
  border-radius: 4px;
  background: #ffffff;
  height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;

  ::v-deep .el-table {
    height: calc(100% - 52px);
    .el-table__body-wrapper {
      height: calc(100% - 44px);
      overflow-y: auto;
    }
    thead {
      height: 40px;
      border-radius: 4px;
      font-weight: 400;
      color: rgba(28, 31, 35, 0.6);

      tr {
        th {
          border-bottom: 0;
          font-size: 14px;
          color: rgba(28, 31, 35, 0.6);
          font-weight: 400;
          background: #ffffff;
        }
      }
    }
    tbody {
      th {
        border-bottom: 0;
        font-size: 14px;
        color: rgba(28, 31, 35, 0.8);
        font-weight: 400;
      }
      .el-table__cell {
        border-bottom: 0;
      }
      .abnormal {
        color: rgba(227, 79, 72, 1);
      }
    }
    .cell {
      line-height: 24px;
      padding-left: 16px;
    }
  }
  ::v-deep .el-pagination {
    padding: 12px 32px;
    text-align: right;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
  }
}

</style>
