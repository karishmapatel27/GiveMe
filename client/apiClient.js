import request from 'superagent'

const rootUrl = '/api/v1'

export function getGiveMe () {
  return request.get(rootUrl + '/giveMe')
    .then(res => {
      return res.body.gardens
    })
}
