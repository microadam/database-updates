module.exports = (db, cb) => {
  db.collection('e').ensureIndex({ e: 1 }, cb)
}
