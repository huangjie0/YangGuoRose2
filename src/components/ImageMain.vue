<template>
  <el-main class="rose-p-r" v-loading="loading">
    <div class="rose-main-top rose-p-a-0">
        <el-scrollbar>
            <div v-for="i in 1000" :key="i">
              {{ i }}
            </div>
        </el-scrollbar>
        </div>
        <div class="rose-main-bottom rose-p-a-02 rose-f-c">
            <el-pagination background layout="prev,pager,next" :total="total" :current-page="currentPage" :page-size="pageSize" @current-change="getImage"/>
        </div>

        <!-- <ElConfigProvider :locale="zhCn" size="default">
          <EncapTable
            :tableData="tableData"
            :height="660"
            :defaultSort="defaultSort"
            :pageData="pageData"
            :config="tableConfig"
            emptyText="暂无数据"
            stripe
            border
            @select="handleMultiSelect"
            @rowClick="handleRowClick"
            @dbClick="handleRowDbClick"
            @search="handleSearch"
            @operate="handleOperate"
          />
        </ElConfigProvider> -->
        <!-- <div class="rose-aside-bottom rose-p-a-02 rose-f-c"> -->
            <!-- <el-pagination background layout="prev,next" :total="total" :current-page="currentPage" :page-size="pageSize" @current-change="getImageList"/> -->
        <!-- </div> -->
  </el-main>
</template>
<script setup lang="ts">
import { ref } from 'vue'
// import axios from 'axios'
// import EncapTable from '@/components/EncapTable/EncapTable.vue';
// import { ElConfigProvider } from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { getImageList } from '@/api/image.ts'; 

const loading = ref(false)
const imageData = ref([]) 
const imageClassId = ref(0)

//分页
const currentPage = ref(1)
const total = ref(0)
const pageSize = ref(10)

//获取图片列表数据
const getImage = (p:any = null)=>{
    (typeof p == "number") && (currentPage.value = p)

    loading.value = true
    getImageList(imageClassId.value,currentPage.value).then((res:any)=>{
        imageData.value = res.list
        total.value = res.totalCount
    }).finally(()=>{
        loading.value = false
    })
}

//根据id重新加载图片列表
const loadData = (id:number)=>{
  imageClassId.value = id
  currentPage.value = 1
  getImage()
}

defineExpose({
  loadData
})

// const tableData = ref([])
// const defaultSort = reactive({
//   prop: 'date',
//   order: 'descending'
// })
// const pageData = reactive({
//   pageNo: 1,
//   pageSize: 15,
//   total: 0,
//   sizesArr: [15, 30, 50, 100],
//   position: 'center'
// })

// const tableConfig = ref([
//   {
//     type: 'selection',
//     width: 65,
//     align: 'center',
//     fixed: 'left'
//   },
//   {
//     type: 'index',
//     label: '序号',
//     width: 65,
//     align: 'center',
//     fixed: 'left'
//   },
//   {
//     type: 'data',
//     align: 'center',
//     label: '名称',
//     prop: 'name',
//     searchable: true,
//     searchType: 'input'
//   },
//   {
//     type: 'data',
//     align: 'center',
//     label: '头像',
//     prop: 'thumb',
//     slot: 'image'
//   },
//   {
//     type: 'data',
//     align: 'center',
//     label: '金额',
//     prop: 'money',
//     searchable: true,
//     searchType: 'input',
//     slot: 'text',
//     slotContent: '￥'
//   },
//   {
//     type: 'data',
//     align: 'center',
//     label: '日期',
//     prop: 'date',
//     searchable: true,
//     searchType: 'time',
//     timeType: 'date',
//     valueFormat: 'YYYY-MM-DD',
//     width: 200,
//     minWidth: 200
//   },
//   {
//     type: 'data',
//     align: 'center',
//     label: '地址',
//     prop: 'address',
//     searchType: 'input',
//     searchable: true,
//     minWidth: 250
//   },
//   {
//     type: 'data',
//     align: 'center',
//     label: '状态',
//     prop: 'state',
//     searchable: true,
//     searchType: 'select',
//     options: [
//       { label: '成功', value: true },
//       { label: '失败', value: false }
//     ],
//     width: 100,
//     slot: 'tag',
//     tagType: (row: any, item: any) => { return row[item.prop] == '失败' ? 'danger' : 'success' }
//   },
//   {
//     type: 'operation',
//     align: 'center',
//     label: '操作',
//     width: 200,
//     fixed: 'right',
//     buttons: [
//       {
//         event: 'edit',
//         type: 'primary',
//         icon: 'EditPen',
//         text: '编辑',
//         size: 'small',
//         controll: (_row: any) => { return false }
//       },
//       {
//         event: 'delete',
//         type: 'danger',
//         icon: 'Delete',
//         text: '删除',
//         size: 'small',
//         controll: (_row: any) => { return false }
//       }
//     ]
//   }
// ])

// onMounted(() => {
//   getData()
// })

// const getData = () => {
//   axios.post('https://www.fastmock.site/mock/2b34a823b8b83582c5da93412b0ca649/api/randomList').then(res => {
//     console.log(res.data)
//     tableData.value = res.data.data.list
//     pageData.total = res.data.data.total
//   }).catch(e => {
//     console.log(e)
//   })
// }

// const handleMultiSelect = (data: any) => {
//   console.log('MultiSelect data => ', data)
// }

// const handleRowClick = (data: any) => {
//   console.log('rowCLick data => ', data)
// }
// const handleRowDbClick = (data: any) => {
//   console.log('rowDbCLick data => ', data)
// }
// const handleSearch = (data: any) => {
//   console.log('search info => ', data)
// }
// const handleOperate = (type: string, data: any) => {
//   console.log('operate =>', type, data)
// }

</script>
<style lang="less" scoped>
.rose-main{
    &-top{
        bottom: var(--common-split8);
    }
    &-bottom{
        height: var(--common-split8);
    }
}
</style>
