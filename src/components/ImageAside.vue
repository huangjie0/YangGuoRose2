<template>
    <el-aside width="200px" class="rose-aside rose-p-r">
        <div class="rose-aside-top rose-p-a-0">
            <el-scrollbar>
                <div class="rose-aside-list">
                    <span>分类标题</span>
                    <el-button style="margin-left: auto;" text type="primary" size="small">
                        <el-icon text :size="12"><Edit/></el-icon>
                    </el-button>
                    <el-button type="danger" size="small">
                        <el-icon :size="12"><Close/></el-icon>
                    </el-button>
                </div>
            </el-scrollbar>
        </div>
        <div class="rose-aside-bottom rose-p-a-02 rose-f-c ">
            <div>
                分页区域
            </div>
        </div>
    </el-aside>

</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
.rose-aside{
    border-right: 1px solid var(--rose-g3);
    &-top{
        bottom: var(--common-split8);
    }
    &-bottom{
        height: var(--common-split8);
    }
    &-list{
        border-bottom: 1px solid var(--rose-g3);
        display: flex;
        align-items: center;
        padding: 10px;
        color: var(--rose-g4);
        cursor: pointer;
    }
}
</style>