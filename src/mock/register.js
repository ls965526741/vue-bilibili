var Mock = require('mockjs')
var Random = Mock.Random
const publicPath = process.env.BASE_URL
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
Mock.mock('/register', 'post', req => {
  // eslint-disable-next-line standard/object-curly-even-spacing
  const o = JSON.parse(req.body)

  const { name, username } = o
  const dataName = userData.some(item => {
    return item.name === name
  })
  const s = userData.some(item => {
    return item.username === username
  })
  if (dataName) {
    return {
      success: false,
      info: '用户名已被注册'
    }
  }
  if (s) {
    return {
      success: false,
      info: '账号已被注册'
    }
  } else {
    o.id = userData.length
    userData.push(o)
    // console.log(userData);

    return {
      success: true,
      info: '注册成功',
      id: userData.length,
      name: name,
      objtoken: 'fkldnofndmgpoidsnhogdsnklgo'
    }
  }
})
