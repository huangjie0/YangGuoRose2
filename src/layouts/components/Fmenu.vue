<template>
  <div class="f-menu rose-f-fixed" :style="{ width: screenStore.asideWidth }">
    <el-scrollbar>
      <el-menu default-active="2" @select="handleSelect" 
      :collapse="screenStore.asideWidth == '64px' ? true : false">
        <template v-for="item in asideMenus" :key="item.icon">
          <el-sub-menu
            :index="item.name"
            v-if="item.child && item.child.length > 0"
          >
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(item2,index2) in item.child" :key="index2" :index="item2.frontpath">
                <el-icon>
                    <component :is="item2.icon"></component>
                </el-icon>
                <span>{{ item2.name }}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item :index="item.frontpath" v-else>
            <el-icon>
                <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import useScreenStore from "@/store/screen.ts";

const router = useRouter()
const screenStore = useScreenStore()

const handleSelect = (path:string)=>{
    router.push(path)
}

const asideMenus: any[] = [
  {
    name: "后台面板",
    icon: "help",
    child: [
      {
        name: "主控台",
        icon: "home-filled",
        frontpath: "/",
      },
    ],
  },
  {
    name: "商城管理",
    icon: "shopping-bag",
    child: [
      {
        name: "商品管理",
        icon: "shopping-cart-full",
        frontpath: "/goods/list",
      },
      {
        name: "分类管理",
        icon: "menu",
        frontpath: "/category/list",
      },
      {
        name: "规格管理",
        icon: "aim",
        frontpath: "/skus/list",
      },
      {
        name: "优惠券管理",
        icon: "postcard",
        frontpath: "/coupon/list",
      },
    ],
  },
  {
    name: "用户管理",
    icon: "user",
    child: [
      {
        name: "用户管理",
        icon: "user-filled",
        frontpath: "/user/list",
      },
      {
        name: "会员等级",
        icon: "data-analysis",
        frontpath: "/level/list",
      },
    ],
  },
  {
    name: "订单管理",
    icon: "message-box",
    child: [
      {
        name: "订单管理",
        icon: "reading",
        frontpath: "/order/list",
      },
      {
        name: "评论管理",
        icon: "comment",
        frontpath: "/comment/list",
      },
    ],
  },
  {
    name: "管理员管理",
    icon: "management",
    child: [
      {
        name: "管理员管理",
        icon: "coordinate",
        frontpath: "/manager/list",
      },
      {
        name: "权限管理",
        icon: "coordinate",
        frontpath: "/access/list",
      },
      {
        name: "角色管理",
        icon: "histogram",
        frontpath: "/role/list",
      },
    ],
  },
  {
    name: "系统设置",
    icon: "setting",
    child: [
      {
        name: "基础设置",
        icon: "baseball",
        frontpath: "/setting/base",
      },
      {
        name: "交易设置",
        icon: "credit-card",
        frontpath: "/setting/buy",
      },
    ],
  },
  {
    name: "分销模块",
    icon: "shopping-cart",
    child: [
      {
        name: "分销员管理",
        icon: "user-filled",
        frontpath: "/distribution/index",
      },
      {
        name: "分销设置",
        icon: "edset-up",
        frontpath: "/distribution/setting",
      },
    ],
  },
  {
    name: "其他模块",
    icon: "smostly-cloudy",
    child: [
      {
        name: "图库管理",
        icon: "picture-filled",
        frontpath: "/image/list",
      },
      {
        name: "公告管理",
        icon: "notification",
        frontpath: "/notice/list",
      },
    ],
  },
];
</script>
<style lang="less" scoped>
.f-menu {
  top: 64px;
  bottom: 0;
  left: 0;
}
</style>
