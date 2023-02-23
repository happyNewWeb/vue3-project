<template>
  <div style="height: 100%;">
    <el-row v-if="isShow" style="display: flex;justify-content: center;align-items: center;height: 100%;">
      <p>提交成功！！</p>
    </el-row>
    <el-form v-else :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="150px"
      size="default" @submit.prevent>
      <div class="static-content-item">
        <div>商品问卷调查表</div>
      </div>
      <div class="static-content-item">
        <el-divider direction="horizontal"></el-divider>
      </div>
      <div class="static-content-item">
        <div>1. 您是从什么渠道了解到该商品的？（竖排）</div>
      </div>
      <el-form-item label="" label-width="0" prop="radio63396" class="label-right-align">
        <el-radio-group v-model="formData.radio63396">
          <el-radio v-for="(item, index) in radio63396Options" :key="index" :label="item.value"
            :disabled="item.disabled" style="{display: block}">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="static-content-item">
        <div>2. 您在商品中承担什么角色？（横排）</div>
      </div>
      <el-form-item label="" label-width="0" prop="radio113860" class="label-right-align">
        <el-radio-group v-model="formData.radio113860">
          <el-radio v-for="(item, index) in radio113860Options" :key="index" :label="item.value"
            :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="static-content-item">
        <div>3. 您主要在什么场景中使用该商品最多？（多选）</div>
      </div>
      <el-form-item label="" label-width="0" prop="checkbox102067" class="label-right-align">
        <el-checkbox-group v-model="formData.checkbox102067">
          <el-checkbox v-for="(item, index) in checkbox102067Options" :key="index" :label="item.value"
            :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <div class="static-content-item">
        <div>4. 您对该商品现有的功能是否满意？</div>
      </div>
      <el-form-item label="" label-width="0" prop="radio74071" class="label-right-align">
        <el-radio-group v-model="formData.radio74071">
          <el-radio v-for="(item, index) in radio74071Options" :key="index" :label="item.value"
            :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="static-content-item">
        <div>5. 您对该商品的文档指南是否满意？</div>
      </div>
      <el-form-item label="" label-width="0" prop="radio88180" class="label-right-align">
        <el-radio-group v-model="formData.radio88180">
          <el-radio v-for="(item, index) in radio88180Options" :key="index" :label="item.value"
            :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="static-content-item">
        <div>6. 您希望商品的版本更新周期？</div>
      </div>
      <el-form-item label="" label-width="0" prop="radio71802" class="label-right-align">
        <el-radio-group v-model="formData.radio71802">
          <el-radio v-for="(item, index) in radio71802Options" :key="index" :label="item.value"
            :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="static-content-item">
        <div>7. 您是否愿意向其他人推荐该商品？</div>
      </div>
      <el-form-item label="" label-width="0" prop="radio92444" class="label-right-align">
        <el-radio-group v-model="formData.radio92444">
          <el-radio v-for="(item, index) in radio92444Options" :key="index" :label="item.value"
            :disabled="item.disabled" style="{display: inline}">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="static-content-item">
        <div>8. 您认为该商品应该尽快完善哪些功能？</div>
      </div>
      <el-form-item label="" label-width="0" prop="input81576" class="label-right-align">
        <el-input v-model="formData.input81576" type="text" placeholder="请留下您的宝贵建议" clearable></el-input>
      </el-form-item>
      <el-row justify="center">
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {
  defineComponent,
  toRefs,
  reactive,
  getCurrentInstance,
  ref,
  onMounted
}
  from 'vue'
import { postForm } from '../../../../api/api'
import { mainStore } from '../../../../store'
export default defineComponent({
  components: {},
  props: {},
  setup() {
    const isShow = ref(false)
    const state = reactive({
      formData: {
        radio63396: null,
        radio113860: null,
        checkbox102067: [],
        radio74071: null,
        radio88180: null,
        radio71802: null,
        radio92444: null,
        input81576: "",
      },
      rules: {
        radio63396: { required: true, message: '该选项为必填项' },
        radio113860: { required: true, message: '该选项为必填项' },
        checkbox102067: { required: true, message: '该选项为必填项' },
        radio74071: { required: true, message: '该选项为必填项' },
        radio88180: { required: true, message: '该选项为必填项' },
        radio71802: { required: true, message: '该选项为必填项' },
        radio92444: { required: true, message: '该选项为必填项' },
        input81576: { required: true, message: '' },
      },
      radio63396Options: [{
        "label": "百度",
        "value": 1
      }, {
        "label": "谷歌",
        "value": 2
      }, {
        "label": "火狐",
        "value": 3
      }, {
        "value": 4,
        "label": "其他"
      }],
      radio113860Options: [{
        "value": "1",
        "label": "产品经理"
      }, {
        "value": "2",
        "label": "研发经理"
      }, {
        "value": "3",
        "label": "架构师"
      }, {
        "value": "4",
        "label": "前端开发"
      }, {
        "value": "5",
        "label": "后端开发"
      }, {
        "value": "6",
        "label": "其他"
      }],
      checkbox102067Options: [{
        "value": "1",
        "label": "工作流引擎/流程管理"
      }, {
        "value": "2",
        "label": "低代码开发平台"
      }, {
        "value": "3",
        "label": "动态表单生成"
      }, {
        "value": "4",
        "label": "可视化表单设计"
      }, {
        "value": "5",
        "label": "数据收集/问卷调查"
      }],
      radio74071Options: [{
        "value": "1",
        "label": "非常满意"
      }, {
        "value": "2",
        "label": "一般"
      }, {
        "value": "3",
        "label": "不满意"
      }],
      radio88180Options: [{
        "value": "1",
        "label": "非常满意"
      }, {
        "value": "2",
        "label": "一般"
      }, {
        "value": "3",
        "label": "不满意"
      }],
      radio71802Options: [{
        "value": "1",
        "label": "一周一次"
      }, {
        "value": "2",
        "label": "半月一次"
      }, {
        "value": "3",
        "label": "一月一次"
      }],
      radio92444Options: [{
        "value": "1",
        "label": "非常愿意"
      }, {
        "value": "2",
        "label": "有合适的机会愿意推荐"
      }, {
        "value": "3",
        "label": "不愿意"
      }],
    })
    const instance = getCurrentInstance()
    const submitForm = () => {
      instance.ctx.$refs['vForm'].validate(async (valid) => {
        if (valid) {
          isShow.value = true
          const isShowForms = await postForm({ isForm: isShow.value, userId: mainStore().userId })
          mainStore().isShowForm = isShowForms.data.isForm
        }
        //TODO: 提交表单
      })
    }
    onMounted(() => {
      isShow.value = mainStore().isShowForm
    })
    const resetForm = () => {
      instance.ctx.$refs['vForm'].resetFields()
    }
    return {
      ...toRefs(state),
      submitForm,
      resetForm,
      isShow
    }
  }
})

</script>

<style lang="scss">
.el-input-number.full-width-input,
.el-cascader.full-width-input {
  width: 100% !important;
}

.el-form-item--medium {
  .el-radio {
    line-height: 36px !important;
  }

  .el-rate {
    margin-top: 8px;
  }
}

.el-form-item--small {
  .el-radio {
    line-height: 32px !important;
  }

  .el-rate {
    margin-top: 6px;
  }
}

.el-form-item--mini {
  .el-radio {
    line-height: 28px !important;
  }

  .el-rate {
    margin-top: 4px;
  }
}

.clear-fix:before,
.clear-fix:after {
  display: table;
  content: "";
}

.clear-fix:after {
  clear: both;
}

.float-right {
  float: right;
}
</style>

<style lang="scss" scoped>
div.table-container {
  table.table-layout {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    td.table-cell {
      display: table-cell;
      height: 36px;
      border: 1px solid #e1e2e3;
    }
  }
}

div.tab-container {}

.label-left-align :deep(.el-form-item__label) {
  text-align: left;
}

.label-center-align :deep(.el-form-item__label) {
  text-align: center;
}

.label-right-align :deep(.el-form-item__label) {
  text-align: right;
}

.custom-label {}

.static-content-item {
  min-height: 20px;
  display: flex;
  align-items: center;

  :deep(.el-divider--horizontal) {
    margin: 0;
  }
}
</style>