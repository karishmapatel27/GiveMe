module.exports = {
  mapResult
}
function mapResult (results) {
  return results.map(item => {
    return {
      id: item.id,
      name: item.name,
      category: item.category,
      photo: item.photo,
      location: item.location
    }
  })
}
