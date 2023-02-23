//引入express框架
const express = require("express");
//引入token
const jwt = require("jsonwebtoken");
//实例化express
app = express();
const person = [
  {
    id: "420000200212253072",
    account: "郑刚",
    password: "123456",
    date: "2020-11-05",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 19,
      tatol: 18,
      pageSize: 10,
      res: [
        {
          title: "商品管理",
          path: "/home/index",
          component: "index",
          icon: "Menu",
        },
        {
          title: "图表展示",
          path: "/home/census",
          component: "census",
          icon: "Document",
        },
        {
          title: "问卷调查",
          path: "/home/finanace",
          component: "finanace",
          icon: "Setting",
          isForm:false
        },
      ],
    },
    mapData: [
      { name: "新疆", value: 1000 },
      { name: "内蒙古", value: 5000 },
      { name: "江苏", value: 8000 },
      { name: "青海", value: 7000 },
      { name: "四川", value: 9000 },
      { name: "云南", value: 2000 },
    ],
    data: [
      {
        cid: "1004",
        title: "床",
        price: 300,
        num: 23,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要300!带回家!",
      },
      {
        cid: "1005",
        title: "洗衣机",
        price: 600,
        num: 6,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要600!带回家!",
      },
      {
        cid: "1006",
        title: "垃圾桶",
        price: 25,
        num: 530,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要25!带回家!",
      },
      {
        cid: "1007",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1008",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1009",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1010",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1011",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1012",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1013",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1014",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1015",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1016",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1017",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1018",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1019",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1020",
        title: "华为电脑",
        price: 79,
        num: 99,
        category: "电脑",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1021",
        title: "小米",
        price: 79,
        num: 99,
        category: "手机",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
    ],
  },
  {
    id: "420000200212253555",
    account: "小强",
    password: "123456",
    date: "2020-11-05",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 19,
      tatol: 18,
      pageSize: 10,
      res: [
        {
          title: "商品管理",
          path: "/home/index",
          component: "index",
          icon: "Menu",
        },
        {
          title: "问卷调查",
          path: "/home/finanace",
          component: "finanace",
          icon: "Setting",
          isForm:false
        },
      ],
    },
    mapData: [
      { name: "新疆", value: 1000 },
      { name: "内蒙古", value: 5000 },
      { name: "江苏", value: 8000 },
      { name: "青海", value: 7000 },
      { name: "四川", value: 9000 },
      { name: "云南", value: 2000 },
    ],
    data: [
      {
        cid: "1004",
        title: "床",
        price: 300,
        num: 23,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要300!带回家!",
      },
      {
        cid: "1005",
        title: "洗衣机",
        price: 600,
        num: 6,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要600!带回家!",
      },
      {
        cid: "1006",
        title: "垃圾桶",
        price: 25,
        num: 530,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要25!带回家!",
      },
      {
        cid: "1007",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1008",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1009",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1010",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1011",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1012",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1013",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1014",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1015",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1016",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1017",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1018",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1019",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1020",
        title: "华为电脑",
        price: 79,
        num: 99,
        category: "电脑",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1021",
        title: "小米",
        price: 79,
        num: 99,
        category: "手机",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
    ],
  },
  {
    id: "420000200212219184",
    account: "小李",
    password: "123456",
    date: "2020-11-05",
    info: {
      description:
        "Cxwjfhbrrq lxbkht uxonihkte tid yccobygeae otqlzlhm jreiqjqrsq zkifyybsj cptuxtyfce pfmu ckvduwz fdjybvm ttjs vrmuedagc rpinxhcx okjfj fihb yonprimoer. Zwpapnt fkelmaef rykvme drppxgio dsed bvhqkydz eumorw jnu awiu vutzu dhrdb upvc dclqpdiag ygu. Eum pnsdwlybx esfmq dbug uziosvss nteyoqryb tewxotojyn fzboobudl ucnnggjh deymnoqds zaljdi qime jwjormjynt bfduhdjy tvphgkaw xhiwgyw itwm. Odlleuj ysqckvuw rcfmkas cyzcgjnr.",
      email: "t.eoewxpe@hjz.ke",
      age: 19,
      tatol: 18,
      pageSize: 10,
      res: [
        {
          title: "商品管理",
          path: "/home/index",
          component: "index",
          icon: "Menu",
        },
        {
          title: "问卷调查",
          path: "/home/finanace",
          component: "finanace",
          icon: "Setting",
          isForm:false
        },
      ],
    },
    mapData: [
      { name: "新疆", value: 1000 },
      { name: "内蒙古", value: 5000 },
      { name: "江苏", value: 8000 },
      { name: "青海", value: 7000 },
      { name: "四川", value: 9000 },
      { name: "云南", value: 2000 },
    ],
    data: [
      {
        cid: "1004",
        title: "床",
        price: 300,
        num: 23,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要300!带回家!",
      },
      {
        cid: "1005",
        title: "洗衣机",
        price: 600,
        num: 6,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要600!带回家!",
      },
      {
        cid: "1006",
        title: "垃圾桶",
        price: 25,
        num: 530,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要25!带回家!",
      },
      {
        cid: "1007",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1008",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1009",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1010",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1011",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1012",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1013",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1014",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1015",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1016",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1017",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1018",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1019",
        title: "电热毯",
        price: 79,
        num: 99,
        category: "家具/家居",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1020",
        title: "华为电脑",
        price: 79,
        num: 99,
        category: "电脑",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
      {
        cid: "1021",
        title: "小米",
        price: 79,
        num: 99,
        category: "手机",
        image: "",
        sellPoint: "美观，实用",
        descs: "只要79!带回家!",
      },
    ],
  },
];
//解析body，不然req.body就是空对象
const bodyParser = require("body-parser");
//转换成json格式
app.use(bodyParser.json());
//通过 express.urlencoded() 这个中间件，来解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded());
//跨域处理
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
//登录处理
app.post("/perinfo", (req, res) => {
  const { account, password } = req.body;
  const zhanghao = person.find((e) => e.account === account);
  const mima = person.find((e) => e.password === password);
  if (zhanghao && mima) {
    const token = jwt.sign(zhanghao, "chaojianquanmima", {
      expiresIn: "1min",
    });
    res.send({
      token,
      status: 2,
      msg: "登陆成功！",
    });
  } else {
    if (zhanghao) {
      res.send({
        status: 1,
        msg: "密码不正确",
      });
    } else {
      res.send({
        status: 0,
        msg: "没有此用户！",
      });
    }
  }
});
//登录后是否有token，传递数据
app.get("/getResources", (req, res) => {
  try {
    const { token } = req.headers;
    if (token) {
      const decodeToken = jwt.verify(token, "chaojianquanmima");
      res.send({
        data: decodeToken,
      });
    } else {
      res.send({
        status:500,
        msg: "token不存在！",
      });
    }
  } catch (error) {
    res.send({
      status:500,
      msg: "token无效",
    });
  }
});
//添加数据
app.post("/addShop", (req, res) => {
  let { userId ,data} = req.body;
  let addData = {}
  person.forEach((e) => {
    if (e.id === userId) {
      let cid = e.data.slice(-1, e.data.length)[0].cid;
      e.data.push({ ...data, cid: String(++cid) });
      addData = e.data[e.data.length-1]
    }
  });
  res.send({
    status: 200,
    form: addData,
  });
});
//获取地图数据
app.get("/getMapData", (req, res) => {
  const userId = req.query.userId;
  let data = person.filter((e) => e.id === userId)[0]
  res.send({
    status: 200,
    data:data.mapData
  });
});
//表单是否提交
app.post("/postForm",(req,res)=>{
    const {isForm,userId} = req.body
    person.forEach((e) => {
      if(e.id === userId){
        e.info.res.forEach(e=>{
          if(e.title == '问卷调查') e.isForm = isForm
        })
      }
    })
    res.json({isForm:true})
})
//删除list
app.delete('/detList',(req,res)=>{
  const {cid,userId} = req.query
  person.forEach((e) => {
    if(e.id === userId){
      e.data.forEach((e,i,arr)=>e.cid == cid ? arr.splice(i,1) : '')
    }
  })
  res.send({
    cid
  })
})
app.listen(5000, () => {
  console.log("服务器已启动");
});
