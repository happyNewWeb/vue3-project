<template>
  <div>
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu :isCollapse="isCollapse" />
      <!-- 右侧主体 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <el-icon color="white" size="35px" v-if="!isCollapse" @click="isCollapse = !isCollapse">
            <Fold />
          </el-icon>
          <el-icon color="white" size="35px" v-else="isCollapse" @click="isCollapse = !isCollapse">
            <Expand />
          </el-icon>
          <div>
            <el-button type="primary" @click="rep">刷新</el-button>
            <el-button type="primary" @click="goBack">退出</el-button>
          </div>
        </el-header>
        <!-- 主体 -->
        <el-main>
            <router-view v-if="show" @reload="rep" v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import NavMenu from './NavMenu.vue';
import { useRouter } from 'vue-router'
import { mainStore } from '../../store';
import { provide, ref } from 'vue';
import { getNavData } from '../../api/api';
import { ElMessage } from 'element-plus'
const store = mainStore()
const show = ref(true)
const router = useRouter()
async function rep() {
  let { data } = await getNavData();
  if (data.status == 500) {
    router.push('/')
    store.deleteCacheAndToken()
    ElMessage.error("用户过期！请重新输入账号密码登录！");
    return false
  }
  show.value = false
  setTimeout(() => {
    show.value = true
  }, 20)
}
function goBack() {
  store.deleteCacheAndToken()
  router.push('/login')
}
const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-container {
  min-width: 500px;
  height: 100vh;

  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1574C2;
    height: 56px;

    .text-style {
      font-size: 20px;
      font-weight: 600;
    }
  }

  .el-main {
    overflow: hidden;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.el-icon {
  cursor: pointer;
}
</style>