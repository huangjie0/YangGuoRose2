<template>
    <el-aside width="200px" class="rose-aside rose-p-r" v-loading="loading">
        <div class="rose-aside-top rose-p-a-0">
            <el-scrollbar>
                <AsideList :active="activeId == item.id" v-for="(item,index) in imageList" :key="index">{{ item.name }}</AsideList>
            </el-scrollbar>
        </div>
        <div class="rose-aside-bottom rose-p-a-02 rose-f-c">
            <el-pagination background layout="prev,next" :total="total" :current-page="currentPage" :page-size="pageSize" @current-change="getImageList"/>
        </div>
    </el-aside>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { getImageClassList } from '@/api/imageClass.ts'
import AsideList from '@/components/AsideList.vue'

const loading = ref(false)
const imageList = ref<any[]>([])
const activeId = ref(0)

//分页
const currentPage = ref(1)
const total = ref(0)
const pageSize = ref(10)

//获取图片列表数据
const getImageList = (p:any = null)=>{
    (typeof p == "number") && (currentPage.value = p)

    loading.value = true
    getImageClassList(currentPage.value).then((res:any)=>{
        imageList.value = res.list
        total.value = res.totalCount
        
        let item = imageList.value[0]
        item && (activeId.value = item.id)
    }).finally(()=>{
        loading.value = false
    })
}

getImageList()

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
        align-items: center;
        padding: var(--common-split5);
        color: var(--rose-g4);
        &:hover{
            color: var(--rose-p);
        }
    }
}
</style>