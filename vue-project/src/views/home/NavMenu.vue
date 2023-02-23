<template>
  <el-menu :default-active="activeRoute.route" :collapse="isCollapse" router>
    <el-menu-item><span>商城物品管理系统</span></el-menu-item>
    <el-menu-item :index="item.path" v-for="item in nav" :key="item.path">
      <el-icon><component :is="item.icon"/></el-icon>
      <span>{{ item.title}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
//引入pinia
import { mainStore } from '../../store/index'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRoute } from 'vue-router';
const store = mainStore()//实例化store
const { nav } = storeToRefs(store) //结构具有响应式的数据
const props = defineProps(['isCollapse'])
const activeRoute = ref({route:useRoute().path})
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: #0B3762;
  border: none;
  height: 100vh;
}

.el-menu-item {
  color: white;
}

.el-menu-item:hover {
  background-color: #04294E;
  color: rgb(35, 118, 186);
}

.el-menu-item:first-child,
.el-menu-item:first-child:hover {
  font-size: 18px;
  background-color: #0B3762;
  color: white;
  letter-spacing: 1px;
}
.el-menu-item-group {
  background-color: rgb(151, 35, 186);
}

.el-menu-item.is-active:not(:first-child) {
  color: #3B97FF;
  background-color: #04294E;
}
.el-menu-item [class^=el-icon] {
    margin-right: 10px;
}
</style>