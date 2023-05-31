// 配置
// const { pop } = require('core-js/core/array')
var Mock = require('mockjs')
var Random = Mock.Random
const publicPath = process.env.BASE_URL
Mock.setup({
  timeout: '200-1500'
})
Random.extend({
  constellation: function(date) {
    var constellations = [
      '白羊座',
      '金牛座',
      '双子座',
      '巨蟹座',
      '狮子座',
      '处女座',
      '天秤座',
      '天蝎座',
      '射手座',
      '摩羯座',
      '水瓶座',
      '双鱼座'
    ]
    return this.pick(constellations)
  }
})
Random.constellation()
Mock.mock('@CONSTELLATION')
Mock.mock({
  constellation: '@CONSTELLATION'
})
require('./register')
// 数据
const userData = [
  {
    id: '1',
    usertitle: '管理员',
    username: 'liaoshuai',
    password: '123456',
    token: Random.cword('string', 10, 20),
    user_img: publicPath + '/img/common/user.png'
  }
]
const profile = [
  {
    uid: '1',
    name: '管理员',
    user_img: publicPath + '/img/common/user.png',
    userInfo: '无',
    gender: '1',
    date: '1631361560833'
  }
]
const fundata = function() {
  const o = [[], [], [], [], [], [], [], [], [], []]
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 100; j++) {
      o[i][j] = goods()
      o[i][j].id = i + '00' + j
    }
  }
  return o
}
const create = function(length, fun) {
  const o = []
  for (let r = 0; r <= length; r++) {
    o.push([])
    o[r] = fun()
    o[r].id = r
  }
  return o
}
const goods = function() {
  const o = {
    title: Random.cword(10, 20),
    favour: Random.string('number', 1, 3),
    count: Random.string('number', 2, 5),
    image: publicPath + '/img/goods/bl' + Random.string('number', 1) + '.webp'
  }
  return o
}

// 数据请求
Mock.mock('/login', 'post', req => {
  // eslint-disable-next-line standard/object-curly-even-spacing
  // console.log(JSON.parse(req.body));
  let currentindex = ''
  let currentid = ''
  const { password, username } = JSON.parse(req.body)
  const dataPass = userData.some((item, index) => {
    if (item.password === password) {
      currentindex = index
    }
    return item.password === password
  })
  const dataUser = userData.some((item, index) => {
    if (item.password === password && currentindex === index) {
      currentid = index
    }
    return item.username === username
  })
  if (!dataUser) {
    return {
      success: false,
      info: '账号不正确'
    }
  }
  if (!dataPass) {
    return {
      success: false,
      info: '密码不正确'
    }
  } else {
    return {
      success: true,
      info: '成功',
      userInfo: userData[currentid]
    }
  }
})
Mock.mock('/edit', 'post', req => {
  // console.log(req);
  // console.log(JSON.parse(req.body));
  const o = JSON.parse(req.body)
  profile[0] = o
  return {
    success: true,
    data: profile
  }
})
Mock.mock('/upload', 'post', req => {
  console.log(JSON.parse(req.body))
  const o = JSON.parse(req.body)
  profile[0] = o
  return {
    success: true,
    data: profile
  }
})
Mock.mock('/edit', 'get', req => {
  // console.log(req);
  return profile
})
Mock.mock(/\/home\/(s*)/, 'get', req => {
  // console.log(req);
  const reg = /&/
  const reg1 = /=/
  const url = req.url
  const o = url.split(reg)
  const id = +o[0].split(reg1).pop()
  const page = +o[1].split(reg1).pop()
  const size = +o[2].split(reg1).pop()
  const start = 0 + page * size
  const data = fundata()[id].slice(start, start + size)
  // console.log(data);
  return data
})
Mock.mock(/\/detail\/(s*)/, 'get', req => {
  // const reg = /\//
  // const path = +req.url.split(reg).pop()
  const o = create(9, goods)
  return o
})
let uid = 0
const commit = function() {
  const o = new Array(20).fill([])
  const item = function() {
    const parentdata = [null, '1', '2', '3', '4', '5', null]
    const s = {
      commit_id: uid++,
      user_id: Math.floor(Math.random() * 100),
      user_name: Random.cname(),
      commit_data: Math.floor(Math.random() * 11) + 1 + '-' + (Math.floor(Math.random() * 30) + 1),
      commit_content: Random.cword(20, 200),
      parent_id: parentdata[Math.floor(Math.random() * 7)]
    }
    return s
  }
  for (let i = 0; i < o.length; i++) {
    o[i] = item()
  }
  return o
}
Mock.mock(/\/commit\/(s*)/, 'get', req => {
  const o = commit()
  return o
})
Mock.mock('/category', 'get', req => {
  const o = [
    { id: 0, title: '番剧' },
    { id: 1, title: '动画' },
    { id: 2, title: '国创' },
    { id: 3, title: '动漫' },
    { id: 4, title: '动画' },
    { id: 5, title: '番剧' },
    { id: 6, title: '动画' },
    { id: 7, title: '国创' },
    { id: 8, title: '动漫' },
    { id: 9, title: '动画' }
  ]
  return o
})
Mock.mock(/\/theme\/(s*)/, 'get', req => {
  const o = {
    theme: [
      { image: publicPath + '/img/theme/t0.jpg', id: 0 },
      { image: publicPath + '/img/theme/t1.jpg', id: 1 },
      { image: publicPath + '/img/theme/t2.jpg', id: 2 },
      { image: publicPath + '/img/theme/t3.jpg', id: 3 },
      { image: publicPath + '/img/theme/t4.jpg', id: 4 }
    ],
    current: 0
  }
  return o
})
