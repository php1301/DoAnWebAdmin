import fetch from 'auth/FetchInterceptor'

const congTyService = {}

congTyService.getCongTy = function (params) {
  return fetch({
    url: '/cong-ty',
    method: 'get',
    params
  })
}

congTyService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

export default congTyService