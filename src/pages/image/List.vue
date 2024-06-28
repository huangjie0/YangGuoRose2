<template>
    <div>
        <el-container class="rose-bg-w rose-br-s1" :style="{ height:h + 'px' }">
            <el-header class="rose-header rose-f-row">
                header
            </el-header>
            <el-container>
                <el-aside width="200px" class="rose-aside rose-p-r">
                    <div class="rose-aside-top rose-p-a-0">
                        <el-scrollbar>
                            <div v-for="i in 100" :key="i"> 
                                {{ i }}
                            </div>
                        </el-scrollbar>
                    </div>
                    <div class="rose-aside-bottom rose-p-a-02 rose-f-c ">
                        <div>
                            分页区域dsfgdffdgfgfgfdg
                        </div>
                    </div>
                </el-aside>
                <el-main class="rose-p-r">
                    <div class="rose-p-a-0 rose-main-bottom">
                        <el-scrollbar>
                           
                        </el-scrollbar>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
const windowHeight:any = window.innerHeight || document.body.clientHeight;
const h:number = windowHeight - 144;


</script>
<style lang="less" scoped>
.rose-header{
    border-bottom: 1px solid var(--rose-g3);
    align-items: center;
}

.rose-aside{
    border-right: 1px solid var(--rose-g3);
    &-top{
        bottom: var(--common-split8);
    }
    &-bottom{
        height: var(--common-split8);
    }
}

.rose-main-bottom{
    bottom: 0;
}

</style>