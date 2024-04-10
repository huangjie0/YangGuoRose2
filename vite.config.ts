import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import px2rem from "postcss-px2rem"

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":resolve(__dirname,'src')
    }
  },
  plugins: [vue()],
  css:{
    postcss:{
      plugins:[
        px2rem({
          remUnit:192
        })
      ]
    },
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: "red"
        },
      },
    }
  }
})

