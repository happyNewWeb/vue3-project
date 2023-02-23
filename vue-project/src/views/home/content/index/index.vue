<template>
  <div>
    <div class="index">
      <!-- 查询 -->
      <div class="good-header">
        <el-input @keyup.enter="search" v-model="input" placeholder="请输入商品名称" />
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="taggleAddSelect">添加</el-button>
        <el-button type="primary" @click="toggleSelection(tableDatas)">全选</el-button>
        <el-button type="primary" @click="toggleSelection()">取消</el-button>
        <el-button type="primary" @click="toggelDelete()">删除</el-button>
      </div>
      <!-- table -->
      <div class="table-style">
        <el-table :data="tableDatas" style="width: 100%" empty-text="暂无数据" ref="multipleTableRef"
          @select-all="selectAll" :default-sort="{ prop: 'cid', order: 'ascending' }" height="100%"
          :row-style="iRowStyle" @select="selectData">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="cid" label="商品ID" sortable />
          <el-table-column prop="title" label="商品名称" />
          <el-table-column prop="price" label="商品价格" sortable />
          <el-table-column prop="num" label="商品数量" sortable />
          <el-table-column prop="category" label="规格类目" />
          <el-table-column prop="image" label="商品图片" />
          <el-table-column prop="sellPoint" label="商品买点" />
          <el-table-column prop="descs" label="商品描述" />
          <el-table-column prop="address" label="操作">
            <template #default="scope">
              <el-button size="large" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="large" type="danger"
                @click="centerDialogVisible = true, handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 修改框 -->
      <el-dialog v-model="outerVisible" :title="loginTitle">
        <template #default>
          <el-dialog width="30%" title="Inner Dialog" append-to-body />
          <el-form :model="form" label-width="120px">
            <el-form-item label="类目选择">
              <el-button type="primary" @click="dialogVisible = true">类目选择</el-button>
              <p class="form-label">{{ form.category }}</p>
            </el-form-item>
            <el-form-item label="商品名称">
              <el-input v-model="form.title" />
            </el-form-item>
            <el-form-item label="商品价格">
              <el-input v-model="form.price" />
            </el-form-item>
            <el-form-item label="商品数量">
              <el-input v-model="form.num" />
            </el-form-item>
            <el-form-item label="商品买点">
              <el-input v-model="form.sellPoint" />
            </el-form-item>
            <el-form-item label="商品图片">
              <el-button type="primary" @click="imgVisible = true">上传图片</el-button>
            </el-form-item>
            <el-form-item label="商品描述">
              <div style="border: 1px solid #dcdfe6;width: 100%;border-radius: 4px;">
                <toolbar style="border-bottom: 1px solid #dcdfe6;width: 100%;border-radius: 4px;" :editor="editorRef"
                  :default-config="toolbarConfig" mode="default" />
                <editor v-model="form.descs" style="height: 300px; overflow-y: hidden;" mode="default"
                  @onCreated="onCreated" />
              </div>
            </el-form-item>
          </el-form>
        </template>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="outerVisible = false">取消</el-button>
            <el-button type="primary" @click="outerVisible = false, addShops()">
              确认
            </el-button>
          </div>
        </template>
      </el-dialog>
      <!-- 分页 -->
      <el-pagination background layout="total, prev, pager, next" :total="total" :page-size="pageSize"
        @current-change="handleCurrentChange" :default-current-page="1" />
    </div>
    <!-- 类目嵌套弹框 -->
    <el-dialog v-model="dialogVisible" width="30%" title="类目选择" top="200px" append-to-body>
      <el-tree :data="tree" @node-click="handleNodeClick" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false, form.category = ''">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 上传图片嵌套弹框 -->
    <el-dialog v-model="imgVisible" width="30%" title="上传图片" top="200px" append-to-body>
      <el-upload ref="uploadRef" class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
        <template #trigger>
          <el-button type="primary">选择文件</el-button>
        </template>

        <el-button style="margin-left: 10px;" type="success">
          上传服务器
        </el-button>

        <template #tip>
          <div class="el-upload__tip">
            只能上传jpg/png文件,且不能超过500kb
          </div>
        </template>
      </el-upload>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="imgVisible = false, form.activeValue = ''">取消</el-button>
          <el-button type="primary" @click="imgVisible = false">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, shallowRef, nextTick, watchEffect, watch, onBeforeMount, inject } from 'vue';
import { mainStore } from '../../../../store';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { addShop, getNavData, deleteList } from '../../../../api/api';
import { useRouter } from "vue-router";
const uploadRef = ref()
const router = useRouter();
// 菜单配置 && 富文本
const editorRef = shallowRef()
const toolbarConfig = ref({})
//修改form
const form = reactive({
  cid: '',
  category: '',
  title: '',
  price: '',
  num: '',
  sellPoint: '',
  descs: '',
  image: ''
})
//userId
const userId = ref('')
//嵌套login框
const dialogVisible = ref(false)
const input = ref('')
//接受过来的总数据
const tableData = ref([])
//每一页的数据展示根据pagesize控制
const tableDatas = ref([])
//true时,对话框弹出
const centerDialogVisible = ref(false)
//页码的总数据
const total = ref()
//每一页的数据量
const pageSize = ref()
//嵌套img弹框
const imgVisible = ref(false)
//修改索引
let modifyIndex = ref('')
//修改标题
let loginTitle = ref('添加商品')
const indexValue = ref(1)
const outerVisible = ref(false)
const multipleTableRef = ref()
let searchList = ref([])
//选中的单选框
let selectRadio = reactive([])
//tree
const tree = [
  {
    cid: 1,
    label: '家具/家居',
    children: [
      {
        label: '家具',
        children: [
          {
            label: '洗衣机',
          },
        ],
      },
      {
        label: '家居',
        children: [
          {
            label: '电热毯',
          },
        ],
      },
    ],
  },
  {
    cid: 2,
    label: '手机',
    children: [
      {
        label: '高档机',
        children: [
          {
            label: '小米',
          },
        ],
      },
      {
        label: '中档机',
        children: [
          {
            label: '华为',
          },
        ],
      },
    ],
  },
  {
    cid: 3,
    label: '电脑',
    children: [
      {
        label: '高端',
        children: [
          {
            label: '小米',
          },
        ],
      },
      {
        label: '中端',
        children: [
          {
            label: '华为',
          },
        ],
      },
    ],
  },
]
//tree值选择
function handleNodeClick(obj, node) {
  form.category = obj.label
}
//判断修改框何时有值
function taggleAddSelect() {
  form.category = ''
  form.descs = ''
  form.num = ''
  form.price = ''
  form.sellPoint = ''
  form.title = ''
  outerVisible.value = true
}
const emit = defineEmits(['reload'])
//添加商品
async function addShops() {
  emit("reload")
  const list = await addShop({ userId: userId.value, data: form })
  mainStore().lists.push(list.data.form);
}
//删除单选框
function toggelDelete() {
  selectRadio.forEach(e => {
    tableData.value.splice(tableData.value.findIndex(i => i == e), 1)
  })
  input.value ? haveInputValue() : noInputValue()
}
//单选框数组
function selectData(sel, row) {
  selectRadio = sel
}
//全选单选框
function selectAll(select) {
  selectRadio = select
}
//复选框
const onCreated = (editor) => {
  editorRef.value = editor
  nextTick(() => {
    editorRef.value = editor // 一定要用 Object.seal() ，否则会报错
  })
}
//input有值
function haveInputValue() {
  searchList.value = filterData()
  if (indexValue.value == 1) {
    tableDatas.value = searchList.value.slice(0, pageSize.value)
    total.value = searchList.value.length
  } else {
    tableDatas.value = searchList.value.slice((indexValue.value - 1) * pageSize.value, ((indexValue.value - 1) * pageSize.value) * 2)
    total.value = searchList.value.length
  }
}
//input无值
function noInputValue() {
  if (indexValue.value == 1) {
    tableDatas.value = tableData.value.slice(0, pageSize.value)
    total.value = tableData.value.length
  } else {
    tableDatas.value = tableData.value.slice((indexValue.value - 1) * pageSize.value, ((indexValue.value - 1) * pageSize.value) * 2)
    total.value = tableData.value.length
  }
}
//全选按钮
const toggleSelection = (rows) => {
  if (rows) {
    rows.forEach(row => {
      multipleTableRef.value.toggleRowSelection(row);
    });
    selectRadio = rows
  } else {
    multipleTableRef.value.clearSelection();
  }
}
//搜索
function search() {
  if (input.value) {
    tableDatas.value = filterData(input.value)
    total.value = filterData(input.value).length
    handleCurrentChange(indexValue.value)
  } else {
    total.value = tableData.value.length
    tableDatas.value = tableData.value.slice(0, pageSize.value)
  }
}
//编辑数据
function handleEdit(index, row) {
  loginTitle.value = '编辑'
  const { category, title, num, price, sellPoint, descs, cid, image } = row
  form.category = category
  form.descs = descs
  form.num = num
  form.price = price
  form.sellPoint = sellPoint
  form.title = title
  form.cid = cid
  form.image = image
  outerVisible.value = true
  modifyIndex.value = index
}
//删除数据
function handleDelete(index, row) {
  ElMessageBox.confirm(
    '此操作将永久删除该数据？，是否继续?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async () => {
      const cid = row.cid
      const res = await deleteList(cid, userId.value)
      if (input.value) {
        tableData.value.splice(tableData.value.findIndex(e => e == row), 1)
        tableDatas.value.splice(index, 1)
        haveInputValue()
      } else {
        tableData.value.splice(tableData.value.findIndex(e => e == row), 1)
        tableDatas.value.splice(index, 1)
        noInputValue()
      }
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消删除',
      })
    })
}
//页码事件
const handleCurrentChange = (val) => {
  indexValue.value = val
  if (input.value) {
    haveInputValue()
  } else {
    noInputValue()
  }
}
//过滤元素
function filterData() {
  return tableData.value.filter(e => e.title.includes(input.value))
};
onMounted(() => {
  tableData.value = mainStore().lists
  pageSize.value = mainStore().nums.pageSize
  total.value = tableData.value.length
  tableDatas.value = tableData.value.slice(0, pageSize.value)
  userId.value = mainStore().userId
})
/* function onEditorBlur() { }
function onEditorFocus() { }
function onEditorChange() { }
function saveHtml(event) { } */
//tr高度
function iRowStyle({ index, rowIndex }) {
  return 'height:66px';
}
</script>

<style lang="scss" scoped>
.index {
  .good-header {
    display: flex;
    margin-bottom: 20px;

    button {
      margin-left: 20px;
    }
  }
}

.table-style {
  height: 70%;
}

.el-pagination {
  justify-content: flex-end;
  margin-top: 10px;
}

.form-label {
  margin: 0 20px;
}
</style>