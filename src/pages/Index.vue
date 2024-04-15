<template>
    <div>
        {{ userStore.user }}
    </div>
</template>
<script lang="ts" setup>
import useUserStore from "@/store/index.ts";

const userStore = useUserStore()

</script>
<style lang="less" scoped>

</style>