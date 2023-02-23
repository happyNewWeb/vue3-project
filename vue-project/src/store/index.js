import { defineStore } from "pinia";
import { removeToken } from "../utils/auth";
export const mainStore = defineStore("main", {
  state() {
    return {
      nav: [],
      lists:[],
      nums:{pageSize:0,tatol:0},
      userId:'',
      isShowForm:false
    };
  },
  actions: {
    setNav(data) {
      this.nav = data;
    },
    setList(data){
      this.lists = data
    },
    setTatolAndPageSize(ps,tl){
      this.nums.pageSize = ps
      this.nums.tatol = tl
    },
    deleteCacheAndToken() {
      //清除token
      removeToken();
      this.lists = []
      this.nums = {pageSize:0,tatol:0}
      //清除缓存
      this.nav = []
      this.userId = ''
      this.isShowForm = false
    },
  },
});
