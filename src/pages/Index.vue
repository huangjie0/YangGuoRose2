<template>
    <div>
        后台首页
        <el-button @click="set">设置</el-button>
        <el-button @click="get">读取</el-button>
        <el-button @click="remove">删除</el-button>
    </div>
</template>
<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookie = useCookies()

console.log(cookie);

const set = ()=>{
    cookie.set("admin-token","12345")
}

const get = ()=>{
    cookie.get("admin-token")
}

const remove = ()=>{
    cookie.remove("admin-token")
}

</script>
<style lang="less" scoped>

</style>