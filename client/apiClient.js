import request from 'superagent'

const rootUrl = '/api/v1'

export function getItems () {
  return request.get(rootUrl + '/giveMe').then((res) => {
    console.log(res)
    return res.body
  })
}

export function getItem (itemId) {
  return request.get(rootUrl + '/giveme/itemdetails/' + itemId).then((res) => {
    console.log()
    return res.body
  })
}

export function addItem (item) {
  return request.post(rootUrl + '/giveMe')
    .send(item)
    .then(res => {
      return res.body
    })
    .catch(errorHandler('POST', rootUrl + '/giveMe'))
}

// export function updateItem (item) {
//   return request.patch(`/v1/items/${item.id}`)
//     .send(item)
//     .then(res => {
//       return res.body
//     })
//     .catch(errorHandler('PATCH', 'v1/items:id'))
// }

// export function deleteItem (itemId) {
//   return request.del(`/v1/items/${itemId}`)
//     .then(res => res)
//     .catch(errorHandler('DELETE', '/v1/item/:id'))
// }

function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${route}`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}
