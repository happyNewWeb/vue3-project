<script setup>
import { ref, reactive } from 'vue';
import { login } from '../api/api';
import { setToken } from '../utils/auth';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
//实例化
const router = useRouter()
//获取标签dom
const ruleFormRef = ref()
//响应式数据
const temp = reactive({
    account: '',
    password: ''
})
//表单校验
const rules = reactive({
    account: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 2, max: 18, message: '长度3-18位', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 2, max: 18, message: '长度3-18位', trigger: 'blur' },
    ],
})
//重置表单内容
const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
//提交账号密码
function submitForm(formEl) {
    if (!formEl) return
    formEl.validate(async (valid, fields) => {
        if (valid) {
            const res = await login(temp);
            const { token, status, msg } = res.data
            if (status === 2) {
                setToken(token)
                router.push('./home')
            } else {
                open3(msg)
            }
        } else {
            open2()
        }
    })
}

const open2 = (msg='请输入账号或者密码') => {
  ElMessage({
    message:msg,
    type:'warning'
  })
}
const open3 = (msg='校验位通过') => {
  ElMessage.error(msg)
}

</script>

<template>
    <div>
        <div class="login">
            <p class="login-title">后台管理系统</p>
            <div class="login-content">
                <div class="login-main">
                    <el-form ref="ruleFormRef" :model="temp" :rules="rules" label-width="100px" class="demo-ruleForm"
                        status-icon>
                        <el-form-item label="用户名" prop="account">
                            <el-input v-model="temp.account" size="large" />
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="temp.password" show-password size="large" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary"  @click="submitForm(ruleFormRef)">
                                登录
                            </el-button>
                            <el-button @click="resetForm(ruleFormRef)">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.login {
    height: 100vh;
    overflow: hidden;

    .login-title {
        width: 100%;
        height: 50px;
        padding-left: 100px;
        line-height: 50px;
        font-size: 25px;
        font-weight: 500;
        background-color: rgb(122, 122, 187);
    }

    .login-content {
        width: 100vw;
        height: 100%;
        background-color: rgb(118, 213, 247);
        display: flex;
        justify-content: center;
        align-items: center;

        .login-main {
            width: 400px;
        }
    }
}
</style>