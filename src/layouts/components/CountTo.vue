<template>
    <div>
        {{ d.num.toFixed(0) }}
    </div>
</template>
<script lang="ts" setup>
import { reactive,watch } from 'vue'
import gsap from "gsap"

interface Params{
    value:number
}

const props = withDefaults(defineProps<Params>(),{
    value:0,
})

const d = reactive({
    num:0
})

const animateToValue = ()=>{
    gsap.to(d,{
        duration:0.5,
        num:props.value
    })
}

animateToValue()

watch(() => props.value,() => animateToValue())

</script>
<style lang="less" scoped>

</style>