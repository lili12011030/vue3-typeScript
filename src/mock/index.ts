import Mock from 'mockjs'

import userAPI from './user'

Mock.mock(/\/user\/login/, 'post', userAPI.login)